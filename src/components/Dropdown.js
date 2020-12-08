import React from "react";
import "./Dropdown.css";

function Dropdown({ sortValue, handleSortValue }) {
    return(
        <div>
            <label htmlFor="sortby" >Sort By: </label>
            <select>
                <option value="" disabled hidden>Select One</option>
                <option>Testing</option>
                <option>Check it out</option>
                <option>Poopy</option>
            </select>
        </div>
    )
}

export default Dropdown;