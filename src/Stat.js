import React from "react";
import StatBar from "./StatBar";

export default class Stat extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const mainType = this.props.pokemon.types[0].type.name;
    const types = this.props.pokemon.types.map((item, index) =>
      index === this.props.pokemon.types.length - 1
        ? item.type.name
        : item.type.name + " / "
    );
    return (
      <div className={`info ${mainType}`}>
        <div className="info__header">
          <img
            src={
              this.props.pokemon.sprites.other["official-artwork"][
                "front_default"
              ]
            }
          ></img>
        </div>
        <div className="info__body">
          <div className="body__group">
            <label>Name: </label>
            <span>{this.props.pokemon.name}</span>
          </div>
          <div className="body__group">
            <label>Types: </label>
            <span>{types}</span>
          </div>
          <div className="body__group">
            <label>HP: </label>
            <div className="tune">
              <StatBar value={this.props.pokemon.stats[0]["base_stat"]} />
            </div>
          </div>
          <div className="body__group">
            <label>Attack: </label>
            <div className="tune">
              <StatBar value={this.props.pokemon.stats[1]["base_stat"]} />
            </div>
          </div>
          <div className="body__group">
            <label>Defense: </label>
            <div className="tune">
              <StatBar value={this.props.pokemon.stats[2]["base_stat"]} />
            </div>
          </div>
          <div className="body__group">
            <label>Speed: </label>
            <div className="tune">
              <StatBar value={this.props.pokemon.stats[5]["base_stat"]} />
            </div>
          </div>
          <div className="body__group">
            <label>Special Attack: </label>
            <div className="tune">
              <StatBar value={this.props.pokemon.stats[3]["base_stat"]} />
            </div>
          </div>
          <div className="body__group">
            <label>Special Deffense: </label>
            <div className="tune">
              <StatBar value={this.props.pokemon.stats[4]["base_stat"]} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
