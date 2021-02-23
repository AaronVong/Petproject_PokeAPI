import React, { useEffect, useState } from "react";
import Header from "./Header";
import Pokedex from "./Pokedex";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 10,
      start: 1,
      perPage: 10,
      pokedex: null,
      size: "",
      isLoading: true,
      foundPokemon: null,
      isSearching: false,
    };
    this.api = "https://pokeapi.co/api/v2/pokemon/";
  }

  componentDidMount() {
    const InitApp = async () => {
      const data = await this.getPokemonsFromApi(
        this.state.limit,
        this.state.start
      );
      //console.log(data);
      this.setState((prevState) => ({
        isLoading: !prevState.isLoading,
        pokedex: data,
      }));
    };
    InitApp();
  }

  getPokemonsFromApi = async (limit, start) => {
    this.setState({ isLoading: true });
    let pokemons = [];
    for (let i = start; i <= limit; i++) {
      try {
        const pokemonFromApi = await this.getPokemon(`${this.api}${i}`);
        pokemons.push(pokemonFromApi);
      } catch (error) {
        break;
      }
    }
    return pokemons;
  };

  // lấy api của tửng pokemon
  getSources = async (url = this.api) => {
    const fetchSources = await fetch(url);
    const sources = await fetchSources.json();
    return sources;
  };

  getPokemon = async (pokemonUrl) => {
    const fetchPokemon = await fetch(pokemonUrl);
    if (!fetchPokemon.ok) return null;
    const pokemon = await fetchPokemon.json();
    return pokemon;
  };

  getPokemonsFromSource = (sources) => {
    let pokemonsList = [];
    sources.map(async (source) => {
      const pokemonFromApi = await this.getPokemon(source.url);
      pokemonsList.push(pokemonFromApi);
    });
    // console.log(pokemonsList);
    return pokemonsList;
  };

  handleNextPageClick = async () => {
    // console.log("next page");
    const start = this.state.limit + 1;
    const limit = this.state.limit + this.state.perPage;
    const pokemons = await this.getPokemonsFromApi(limit, start);
    this.setState({
      pokedex: pokemons,
      start,
      limit,
      isLoading: false,
    });
  };

  handlePrevPageClick = async () => {
    // console.log("previous page");
    const start = this.state.start - this.state.perPage;
    const limit = this.state.limit - this.state.perPage;
    if (start <= 0 || limit <= 0) return;
    const pokemons = await this.getPokemonsFromApi(limit, start);
    this.setState({
      pokedex: pokemons,
      start,
      limit,
      isLoading: false,
    });
  };

  onSubmit = async (key) => {
    this.setState({ isSearching: true });
    const pokemonUrl = this.api + key;
    const pokemons = await this.getPokemon(pokemonUrl);

    this.setState({
      foundPokemon: pokemons ? [pokemons] : null,
      isSearching: false,
    });

    if (!pokemons) {
      alert("There are no pokemons with name or id: " + key);
    } else {
      window.scroll({
        top: window.pageYOffset + 5000,
        behavior: "smooth",
      });
    }
  };

  render() {
    return (
      <div className="container">
        <Header />
        {this.state.isLoading ? (
          <div className="lds-dual-ring">Loading...</div>
        ) : (
          <Pokedex
            pokedex={this.state.pokedex}
            nextPage={this.handleNextPageClick}
            prevPage={this.handlePrevPageClick}
            onSubmit={this.onSubmit}
            foundPokemon={this.state.foundPokemon}
            isSearching={this.state.isSearching}
          />
        )}
      </div>
    );
  }
}
