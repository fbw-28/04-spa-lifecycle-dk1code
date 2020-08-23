import React from "react";

import "./Header.css";

export default function Header(props) {
  return (
    <header>
      <h1>UserSearch</h1>
      <p>
        <span onClick={() => props.switchCase("search")}>Search</span> |
        <span onClick={() => props.switchCase("about")}>About</span>
      </p>
    </header>
  );
}
