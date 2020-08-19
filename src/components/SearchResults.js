import React, { Component } from "react";

import "./SearchResults.css";

import User from "./User";

export default class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      // filderedUsers: [],
    };
  }

  filterUsers = (users) =>
    users.filter((user) => 
        user.name.toLowerCase().includes(this.props.searchFor.toLowerCase()) ||
        user.email.toLowerCase().includes(this.props.searchFor.toLowerCase())
    );

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
    let filderedUsers = this.filterUsers(this.state.users);
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
          <User filderedUsers={filderedUsers} />
        </table>
      </div>
    );
  }
}
