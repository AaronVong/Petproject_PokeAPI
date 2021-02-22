import React, { useEffect } from "react";
import PokeCard from "./PokeCard";
export default class PokeCards extends React.Component {
  render() {
    return (
      <ul className="pokecards">
        {this.props.pokedex.map((pokemon, index) => {
          return (
            <PokeCard
              key={pokemon.id}
              data={pokemon}
              onClick={this.props.onClick}
            />
          );
        })}
      </ul>
    );
  }
}
