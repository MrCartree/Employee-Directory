import React from "react";

function SearchBar({ inputValue, handleInput }) {
    return(
    <div>
        <input 
            type="text"
            id="name"
            name="name"
            value={ inputValue }
            placeholder="Type stuff to search or something."
            onChange={handleInput}
        />
    </div>
    )
}

export default SearchBar;