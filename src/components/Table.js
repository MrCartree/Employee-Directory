import React from "react";
import "./Table.css";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

function Table({ employees }) {
    return (
        <div>
            <table>
                <TableHead />
                <tbody>
                    { employees.map(person => {
                        return <TableBody {...person} data={employees} />
                    }) }
                </tbody>
            </table>
        </div>
    )
}

export default Table;