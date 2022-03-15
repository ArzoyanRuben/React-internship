import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Loader from "../../components/shared/Loader/Loader";
import VirtualizedTable from "../../components/VirtualizedTable/VirtualizedTable";
import useFetch from "../../hooks/useFetch";
import tableSlice from "../../store/tableSlice";

export default function Table() {
  const tableURL = process.env.REACT_APP_TABLE_URL;
  const [tableItems, error, setTableItems] = useFetch(tableURL);

  const dipatch = useDispatch();

  useEffect(() => {
    dipatch(tableSlice.actions.add(tableItems));
  }, [tableItems]);

  return (
    <>
      {tableItems.length > 0 ? (
        <Paper style={{ height: 400, width: "100%" }}>
          <VirtualizedTable
            rowCount={tableItems.length}
            rowGetter={({ index }) => tableItems[index]}
            columns={Object.keys(tableItems[0]).map((cell) => ({
              width: 1000,
              label: [cell],
              dataKey: [cell],
            }))}
          />
        </Paper>
      ) : (
        <Loader />
      )}
    </>
  );
}
