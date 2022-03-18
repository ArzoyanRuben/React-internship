import React, { useState, useEffect } from "react";
import useFetch from "./../../hooks/useFetch";
import { Loader } from "./../../components/Loader/Loader";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Modal } from "../../components/Modal/Modal";
import useCustomModal from './../../hooks/useCustomModal';
import { DownloadPDF } from "./DownlaodPDF/DownloadPDF";
import { Button } from '@mui/material';
import { TableBody } from './TableBody/TableBody';
import { v4 as uuid } from 'uuid';
import { useDispatch, useSelector } from "react-redux";
import { useGetUsersQuery } from "../../services/usersAPI";
import { usersSliceOp, usersSliceSel } from "../../store/users";
import "../../App.css";
import { TableActions } from './TableActions/TableActions';

export const Table = () => {
  const tableDataUrl = process.env.REACT_APP_TABLE_API
  const [curItem, setCurItem] = useState(null);
  const [curKey, setCurKey] = useState(null)
  const [curIndex, setCurIndex] = useState(null);
  const [curIndexRow, setCurIndexRow] = useState(null);
  const { isOpen, toggle } = useCustomModal();
  const { data, setData, loading, error } = useFetch(tableDataUrl);
  const dataTable = useSelector(usersSliceSel.usersData)
  const objKeys = (dataTable && Object.keys(dataTable[0])) || {};
  const dispatch = useDispatch();
  let tableData = [];

  useEffect(() => {
    dispatch(usersSliceOp.handleData(data))
  }, [data])

  for (let i = 0; i < objKeys?.length - 6; i++) {
    tableData && tableData.push(objKeys[i]);
  }

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
                    {tableData && tableData?.map((item, index) => (
                      <th key={item}>{tableData[index]}</th>
                    ))}
                    <th>Download PDF4</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {dataTable && dataTable.map((item, col) => (
                    <tr key={col} >
                      {tableData && tableData.map((itemKey, row) => (
                        <TableBody
                          col={col}
                          row={row}
                          setCurIndex={setCurIndex}
                          setCurIndexRow={setCurIndexRow}
                          key={uuid()}
                          toggle={toggle}
                          setCurItem={setCurItem}
                          setCurKey={setCurKey}
                          item={item}
                          itemKey={itemKey}
                        />
                      ))}
                      <td className="col_hover">
                        <DownloadPDF item={item} />
                      </td>
                      <td className="col_hover">
                        <TableActions
                          // col={col}
                          dataTable={dataTable}
                        // curIndexRow={curIndexRow}
                        // setCurIndexRow={setCurIndexRow}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {isOpen &&
              <Modal
                newItem={curItem}
                setNewItem={setCurItem}
                data={dataTable}
                // setData={setData}
                toggle={toggle}
                tableModal={true}
                url={tableDataUrl}
                curKey={curKey}
                curIndex={curIndex}
                curIndexRow={curIndexRow}
              />
            }
          </>
        )}
    </>
  );
};