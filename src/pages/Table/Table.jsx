import React, { useCallback, useState } from "react";
import useFetch from "./../../hooks/useFetch";
import { Loader } from "./../../components/Loader/Loader";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import "../../App.css";
import { Modal } from "../../components/Modal/Modal";
import useCustomModal from './../../hooks/useCustomModal';

export const Table = () => {
  const tableDataUrl = process.env.REACT_APP_TABLE_API
  const [curItem, setCurItem] = useState(null);
  const { isOpen, toggle } = useCustomModal();
  const { data, loading, error } = useFetch(tableDataUrl);
  const tableData = [];
  const objKeys = data && Object.keys(data[0]);

  const colData = useCallback(
    (item) => {
      setCurItem(item);
    },
    [],
  )


  for (let i = 0; i < objKeys?.length - 6; i++) {
    tableData.push(objKeys[i]);
  }
  console.log(tableData, "tableData");

  //TODO iterate on data keys Object.keys().map
  // const empyArr = [];
  // data?.map(dataItem => {
  //   Object.keys(dataItem).map(item => {
  //     const arr = item.split(' ');
  //     empyArr.push(arr);
  //   })
  // })
  //second solution
  // for (let arr of data) {
  //   arr?.map(item => {
  //     console.log(item, 'items')
  //   })
  // }
  const handleChange = () => {
    toggle();

  }
  // const handleItem = (item) => {
  //   setCurItem(item)
  // }
  return (
    <>
      {loading ?
        <Loader loading={loading} />
        : (
          <>
            <div className="table-responsive">
              <table>
                <thead>
                  <tr>
                    {tableData?.map((item, index) => (
                      <th key={item}>{tableData[index]}</th>
                    ))}
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((item, index) => (
                    <tr key={index} >
                      <td onClick={handleChange}>{item.disclosure_year}</td>
                      <td onClick={handleChange}>{item.disclosure_date}</td>
                      <td onClick={handleChange}>{item.transaction_date}</td>
                      <td onClick={handleChange}>{item.owner}</td>
                      <td onClick={handleChange}>{item.ticker}</td>
                      <td onClick={handleChange}>{item.asset_description}</td>
                      <td className="col_hover"><EditIcon /><DeleteIcon /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {isOpen && <Modal toggle={toggle} tableModal={true} />}
          </>
        )}
    </>
  );
};
