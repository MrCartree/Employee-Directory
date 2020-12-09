import React from "react";
import './App.css';
import Header from "./components/Heading";
import SearchBar from "./components/Searchbar";
import Dropdown from "./components/Dropdown";
import Table from "./components/Table"


function App(props) {
  const [ inputValue, setInputValue ] = React.useState('')
  const [ dataValue, setDataValue ] = React.useState(props.employees);
  const [ sortValue, setSortValue ] =React.useState("")

  const handleInput = e => {
    setInputValue(e.target.value);
  }

  React.useEffect(() => {
    if (inputValue === '') {
      setDataValue(props.employees);
      return;
    }

    const people = props.employees.filter((person) => {
      return person.name.toLowerCase().includes(inputValue.toLowerCase());
    });

    if (people.length) {
      setDataValue(people);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  const handleSortValue = (e) => {
    setDataValue(props.employees);
    setSortValue(e.target.value);
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
