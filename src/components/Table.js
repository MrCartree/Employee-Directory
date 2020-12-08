import React from "react";
import "./Table.css";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

function Table({ employees }) {

    const columns = [
        { colName: "Name" },
        { colName: "Title" },
        { colName: "Address" },
        { colName: "Hired Date" },
        { colName: "Salary" }
    ];

    return (
        <div>
            <table>
                <TableHead columns={columns} />
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