import React from "react";

export default function User({ filderedUsers }) {
  return (
    <tbody>
      {filderedUsers.map(({ id, name, email }) => {
        return (
          <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
          </tr>
        );
      })}
    </tbody>
  );
}
