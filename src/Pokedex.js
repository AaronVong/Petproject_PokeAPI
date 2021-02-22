import React from "react";
import PokeCards from "./PokeCards";
import PokedexNav from "./PokedexNav";
import Stat from "./Stat";
export default class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedPokemon: null,
    };
  }

  onClickPokemon = (pokemon = null) => {
    this.setState({ clickedPokemon: pokemon });
  };
  render() {
    return (
      <div className="pokedex">
        <div className="left">
          <h1>Pokédex</h1>
          <PokeCards
            pokedex={this.props.pokedex}
            onClick={this.onClickPokemon}
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
              />
            </React.Fragment>
          )}
        </div>
        <div className="right">
          {this.state.clickedPokemon && (
            <Stat pokemon={this.state.clickedPokemon} />
          )}
        </div>
      </div>
    );
  }
}
