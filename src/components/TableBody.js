import React from "react";
import "./TableBody.css";

function TableBody({ first, last, email, address, created, balance }) {
    return (
        <div>
            <tr>
                <td>{first} {last}</td>
                <td>{email}</td>
                <td>{address}</td>
                <td>{created}</td>
                <td>{balance}</td>
            </tr>
        </div>
    )
}

export default TableBody;