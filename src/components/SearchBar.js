import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import Logo from "../img/YoutubeLogo.png";

class SearchBar extends Component {
  state = {
    searchTerm: "",
  };

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSubmit = (event) => {
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;

    onFormSubmit(searchTerm);

    event.preventDefault();
  };
  render() {
    return (
      <div style={{ display: "flex", textAlign: "center" }}>
        <div>
          <img
            src={Logo}
            alt="logo"
            width="100px"
            style={{
              cursor: "pointer",
              marginLeft: "100px",
            }}
          />
        </div>
        <form
          onSubmit={this.handleSubmit}
          style={{
            width: "50%",
            border: "1px solid",
            height: "30px",
            alignItems: "end",
            padding: "5px 5px",
            marginLeft: "200px",
            marginTop: "5px",
          }}
        >
          <TextField fullWidth onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

export default SearchBar;
