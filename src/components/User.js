import React from "react";

export default function ResponseMapFunction({ id, name, email }) {
  return (
    <tr>
      <td>{`${id}`}</td>
      <td>{`${name}`}</td>
      <td>{`${email}`}</td>
    </tr>
  );
}
