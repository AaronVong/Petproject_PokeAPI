import React from "react";

export default class PokeCard extends React.Component {
  render() {
    const mainType = this.props.data.types[0].type.name;
    const types = this.props.data.types.map((item, index) =>
      index === this.props.data.types.length - 1
        ? item.type.name
        : item.type.name + "/"
    );
    return (
      <li className={`pokecards__card ${mainType}`}>
        <div className="card__header">
          <img
            src={
              this.props.data.sprites.other["official-artwork"]["front_default"]
            }
          ></img>
        </div>
        <div className="card__body">
          <span className="id"># {this.props.data.id}</span>
          <span className="name">{this.props.data.name}</span>
          <span className="types">Types: {types}</span>
        </div>
        <div className="card__tools">
          <div className="tools__compare">
            <button
              type="button"
              className="btn btn--cmp"
              onClick={() => {
                this.props.cmpPokemons(this.props.data);
              }}
            >
              Compare
            </button>
          </div>
          <div className="tools__compare">
            <button
              type="button"
              className="btn btn--cmp"
              onClick={() => {
                this.props.onClick(this.props.data);
              }}
            >
              View
            </button>
          </div>
        </div>
      </li>
    );
  }
}
