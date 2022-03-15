import React, { useState } from "react";
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
import "../../App.css";

export const Table = () => {
  const tableDataUrl = process.env.REACT_APP_TABLE_API
  const [curItem, setCurItem] = useState(null);
  const [curKey, setCurKey] = useState(null)
  const { isOpen, toggle } = useCustomModal();
  const { data, setData, loading, error } = useFetch(tableDataUrl);
  const tableData = [];
  const objKeys = data && Object.keys(data[0]);

  for (let i = 0; i < objKeys?.length - 6; i++) {
    tableData.push(objKeys[i]);
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
                    {tableData?.map((item, index) => (
                      <th key={item}>{tableData[index]}</th>
                    ))}
                    <th>Download PDF4</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((item, index) => (
                    <tr key={index} >
                      {tableData?.map((itemKey, i) => (
                        <TableBody
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
                        <Button>
                          <EditIcon />
                        </Button>
                        <Button>
                          <DeleteIcon />
                        </Button>
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
                data={data}
                setData={setData}
                toggle={toggle}
                tableModal={true}
                url={tableDataUrl}
                curKey={curKey}
              />
            }
          </>
        )}
    </>
  );
};