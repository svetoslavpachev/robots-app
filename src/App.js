import React from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./Searchbox";


const App = () => {
  return (
    <div className="tc">
      <h1>Robots</h1>
      <SearchBox />
      <CardList robots={robots} />
    </div>
  );
}

export default App;
