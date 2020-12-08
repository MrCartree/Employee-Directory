import React from "react";
import './App.css';
import Header from "./components/Heading";
import SearchBar from "./components/Searchbar";


function App() {
  return (
    <div className="App">
      <Header title="Employee Directory" />

      <SearchBar />

    </div>
  );
}

export default App;
