import React from 'react';

export const TableBody = ({ itemKey, setCurItem, item, toggle, setCurKey }) => {
    const handleChange = () => {
        toggle();
        setCurItem(item[itemKey])
        setCurKey(item)
    }
    return <td onClick={handleChange}>{item[itemKey]}</td>
}
