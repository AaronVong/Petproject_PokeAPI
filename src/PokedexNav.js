import React from "react";
import Button from "./Button";
export default class PokedexNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "",
    };
  }
  onChange = (e) => {
    this.setState({ key: e.target.value });
  };
  render() {
    return (
      <nav className="pokedex__nav">
        <div className="nav__control">
          <Button type="button" onClick={this.props.prevClick}>
            <span>Prev</span>
          </Button>
          <Button type="button" onClick={this.props.nextClick}>
            <span>Next</span>
          </Button>
        </div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            this.props.onSubmit(this.state.key);
            this.setState({ key: "" });
          }}
          className="nav__form"
          href="#searchtab"
        >
          <div className="form__control-group">
            <label>Search: </label>
            <input
              type="text"
              value={this.state.key}
              onChange={this.onChange}
              placeholder="Enter name or id of pokemon..."
              maxLength={15}
            ></input>
            {this.props.isSearching && (
              <div class="lds-facebook">
                <div>L</div>
                <div>o</div>
                <div>a</div>
                <div>d</div>
                <div>i</div>
                <div>n</div>
                <div>g</div>
              </div>
            )}
          </div>
        </form>
      </nav>
    );
  }
}
