import React, {useEffect, useState} from 'react';
import {getTable} from "../API/tableAPI";
import Photo from "./Photo";
import VirtualizedTable from "./TableItem";
import Users from "./Users";
import MaterialTable from "material-table";
import TableItem from "./TableItem";


function Table({tables}) {

    return (
        <div>
           hi
           <TableItem tables={tables}/>
        </div>
    );
}

export default Table;