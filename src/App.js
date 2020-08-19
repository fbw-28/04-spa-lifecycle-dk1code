import React, { Component } from "react";

import "normalize.css";
import "./main.css";

import Header from "./components/Header";
import SearchResults from "./components/SearchResults";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
      lastSearchTerm: "",
    };
  }

  storeInput = (e) => {
    this.setState({
      searchTerm: e.target.value,
    });
  };

  setLastInput = (e) => {
    e.preventDefault();
    this.setState({
      lastSearchTerm: this.state.searchTerm,
    });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((data) =>
        this.setState({
          users: data,
        })
      );
  }

  render() {
    return (
      <div>
        <Header />
        <form>
          <input
            type="text"
            placeholder="Enter Searchterm"
            onChange={this.storeInput}
          />
          <button onClick={this.setLastInput}>Search</button>
        </form>
        <SearchResults
          users={this.state.users}
          searchFor={this.state.lastSearchTerm}
        />
      </div>
    );
  }
}
