import React, { Component } from "react";

import "./SearchResults.css";

import User from "./User";
// import MappingState from "../func/mappingState";

export default class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((data) =>
        this.setState(
          {
            users: data,
          },
          () => console.log(this.state.users)
        )
      );
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>eMail</td>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((props) => User(props))}
            {/* <MappingState obj={this.state.users} /> */}
          </tbody>
        </table>
      </div>
    );
  }
}
