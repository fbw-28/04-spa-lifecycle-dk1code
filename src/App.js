import React from "react";

import "normalize.css";
import "./main.css";

import Header from "./components/Header";
import SearchResults from "./components/SearchResults";

function App() {
  return (
    <div className="App">
      <Header />
      <form>
        <input type="text" placeholder="Enter Searchterm" />
        <button>Search</button>
      </form>
      <SearchResults />
    </div>
  );
}

export default App;
