import React from 'react';
import MaterialTable from "material-table";

function TableItem({tables}) {
    const data = [
        {name: 'Ani', age: 15},
        {name: 'Rouben', age: 25},
        {name: 'Arsen', age: 20},
        {name: 'Ani', age: 15},
        {name: 'Rouben', age: 25},
        {name: 'Arsen', age: 20},
        {name: 'Ani', age: 15},
        {name: 'Rouben', age: 25},
        {name: 'Arsen', age: 20},
        {name: 'Ani', age: 15},
        {name: 'Rouben', age: 25},
        {name: 'Arsen', age: 20},
        {name: 'Ani', age: 15},
        {name: 'Rouben', age: 25},
        {name: 'Arsen', age: 20}
    ]
    const columns = [
        {title: 'Name', field: 'name'},
        {title: 'Age', field: 'age'}
    ]
    return (
        <div>
          <MaterialTable title="Material table" columns={columns} data={data} options={{search: false, pageSize: 10, paging: false,  toolbar: false,
              thirdSortClick: false, maxBodyHeight: 300,
              headerStyle: { position: 'sticky', top: 0 },}} />



        </div>
    );
}

export default TableItem
