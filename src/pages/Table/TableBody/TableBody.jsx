import React from 'react';

export const TableBody = ({
    itemKey,
    setCurItem,
    item,
    toggle,
    setCurKey,
    col,
    setCurIndexRow,
    row,
    setCurIndex
}) => {
    const handleChange = () => {
        toggle();
        setCurItem(item[itemKey]);
        setCurKey(item);
        setCurIndexRow(col)
        setCurIndex(row);
    }
    return <td onClick={handleChange}>{item[itemKey]}</td>
}