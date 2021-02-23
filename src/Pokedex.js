import React from "react";
import PokeCards from "./PokeCards";
import PokedexNav from "./PokedexNav";
import Stat from "./Stat";
export default class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedPokemon: null,
      cmpPokemons: [],
    };
  }

  onClickPokemon = (pokemon = null) => {
    this.setState({ clickedPokemon: pokemon });
  };

  onClickComparePokemon = (pokemon) => {
    let cmpPokemons = this.state.cmpPokemons;
    if (cmpPokemons.length <= 1) {
      cmpPokemons.push(pokemon);
      this.setState({ cmpPokemons });
    } else {
      cmpPokemons.pop();
      cmpPokemons.push(pokemon);
      this.setState({ cmpPokemons });
    }
    if (this.state.clickedPokemon) {
      window.scroll({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }
  };
  render() {
    return (
      <div className="pokedex">
        <div className="left">
          <h1>Pokédex</h1>
          <PokeCards
            pokedex={this.props.pokedex}
            onClick={this.onClickPokemon}
            cmpPokemons={this.onClickComparePokemon}
          />
          <PokedexNav
            nextClick={this.props.nextPage}
            prevClick={this.props.prevPage}
            onSubmit={this.props.onSubmit}
            isSearching={this.props.isSearching}
          />

          {this.props.foundPokemon && (
            <React.Fragment>
              <h1 id="searchtab">Found Pokemons</h1>
              <PokeCards
                pokedex={this.props.foundPokemon}
                onClick={this.onClickPokemon}
                cmpPokemons={this.onClickComparePokemon}
              />
            </React.Fragment>
          )}
        </div>
        <div className="right">
          {this.state.clickedPokemon && (
            <Stat pokemon={this.state.clickedPokemon} />
          )}
          {this.state.cmpPokemons.length > 0 && (
            <div className="right__cmp">
              <div className="clean">
                <button
                  className="btn"
                  type="button"
                  onClick={() => this.setState({ cmpPokemons: [] })}
                >
                  Clean compare
                </button>
              </div>
              {this.state.cmpPokemons.map((pokemon, index) => {
                return <Stat pokemon={pokemon} key={index} />;
              })}
            </div>
          )}
        </div>
      </div>
    );
  }
}
