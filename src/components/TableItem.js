import React, {useEffect, useState} from 'react';
import MaterialTable from "material-table";
import {getTable} from "../API/tableAPI";

function TableItem() {
    const [table, setTable] = useState([]);
    useEffect(() => {
        getTable().then(res => {
            console.log(res)
            setTable(res.data)
        })
            .catch(err => console.log(err))
    }, [])

    const columns = [
        {title: 'Disclosure_year', field: 'disclosure_year'},
        {title: 'Disclosure_date', field: 'disclosure_date'},
        {title: 'Transaction_date', field: 'transaction_date'},
        {title: 'Owner', field: 'owner'},
        {title: 'Asset_description', field: 'asset_description'},
        {title: 'Type', field: 'type'},
        {title: 'Amount', field: 'amount'},
        {title: 'Representative', field: 'representative'},
        {title: 'District', field: 'district'},
        {title: 'Ptr_link', field: 'ptr_link'},
        {title: 'Cap_gains_over_200_usd', field: 'cap_gains_over_200_usd'},
    ]

    return (
        <div>
            <MaterialTable title="Material table" columns={columns} data={table} options={{search: false, pageSize: 10, paging: false,  toolbar: false,
                thirdSortClick: false, maxBodyHeight: 400,
                headerStyle: { position: 'sticky', top: 0 },}} />

        </div>
    );
}

export default TableItem
