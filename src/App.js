import React from "react";
import {Employees} from "./Employee"
import './App.css';
import Header from "./components/Heading";
import SearchBar from "./components/Searchbar";
import Dropdown from "./components/Dropdown";
import Table from "./components/Table"


function App() {

  const [ inputValue, setInputValue ] = React.useState(null)
  const [ dataValue, setDataValue ] = React.useState(Employees)
  const [ sortValue, setSortValue ] =React.useState("")

  const handleInput = e => {
    setInputValue(e.target.value) 
    console.log(dataValue)
    console.log(inputValue)
    if (inputValue === null) {
      return dataValue
    } else if (dataValue.filter(person => {
      person.name.toLowerCase().includes(inputValue.toLowerCase())
    })) {
      setDataValue(dataValue.filter(person => {
        return person.name.toLowerCase().includes(inputValue.toLowerCase().trim())
      }))
    }
  }

  const handleSortValue = (e) => {
    setDataValue(Employees)
    setSortValue(e.target.value)
  }

  if(sortValue === "Name (A - Z)") {
    dataValue.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      return 0;
    })
  } else if(sortValue === "Name (Z - A)") {
    dataValue.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
      if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
      return 0;
    })
  } else if(sortValue === "Email (A - Z)") {
    dataValue.sort((a, b) => {
      if (a.email.toLowerCase() < b.email.toLowerCase()) return -1;
      if (a.email.toLowerCase() > b.email.toLowerCase()) return 1;
      return 0;
    })
  } else if(sortValue === "Email (Z - A)") {
    dataValue.sort((a, b) => {
      if (a.email.toLowerCase() < b.email.toLowerCase()) return 1;
      if (a.email.toLowerCase() > b.email.toLowerCase()) return -1;
      return 0;
    })
  } else if(sortValue === "None") {
    dataValue.sort((a, b) => {
      return a.id - b.id;
    })
  }



  return (
    <div className="App">
      <Header title="Employee Directory" />

      <SearchBar inputvalue={inputValue} handleInput={handleInput} />

      <Dropdown sortValue={sortValue} handleSortValue={handleSortValue} />

      { dataValue ? <Table employees={dataValue} /> : <h3>does not compute</h3>}

    </div>
  );
}

export default App;
