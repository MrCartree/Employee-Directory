import React from "react";
import "./Searchbar.css";

function SearchBar({ inputValue, handleInput, handleSubmit }) {
    return(
    <div>
        <input 
            type="text"
            id="name"
            name="name"
            value={ inputValue }
            placeholder="Type stuff to search or something."
            onChange={ handleInput }
        />
    </div>
    )
}

export default SearchBar;