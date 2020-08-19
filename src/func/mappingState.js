import React from "react";

import User from "../components/User";

export default function mappingState({ obj }) {
  return <>{obj.map((data) => User(data))}</>;
}
