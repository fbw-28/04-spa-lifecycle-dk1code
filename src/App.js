import React, { Component } from "react";

import "normalize.css";
import "./main.css";

import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import About from "./components/About";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
      lastSearchTerm: "",
      currentPage: "search",
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

  switchToSearch = (e) => {
    e.preventDefault();
    this.setState({ currentPage: "search" });
  };

  switchToAbout = (e) => {
    e.preventDefault();
    this.setState({ currentPage: "about" });
  };

  switchPage = (page) => {
    this.setState({
      currentPage: page,
    });
  };

  render() {
    return (
      <div>
        <Header switchPage={this.switchPage} />
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
        <About />
      </div>
    );
  }
}
