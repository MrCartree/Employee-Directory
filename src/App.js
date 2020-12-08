import React from "react";
import {Employees} from "./Employee"
import './App.css';
import Header from "./components/Heading";
import SearchBar from "./components/Searchbar";
import Dropdown from "./components/Dropdown";
import Table from "./components/Table"


function App() {

  const [ inputValue, setInputValue ] = React.useState("")
  const [ dataValue, setDataValue ] = React.useState(Employees)
  const [ sortValue, setSortValue ] =React.useState("")



  return (
    <div className="App">
      <Header title="Employee Directory" />

      <SearchBar />

      <Dropdown />

      <Table employees={dataValue} />

    </div>
  );
}

export default App;
