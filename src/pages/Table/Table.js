import Paper from "@mui/material/Paper";
import Loader from "../../components/shared/Loader/Loader";
import VirtualizedTable from "../../components/VirtualizedTable/VirtualizedTable";
import { getItems } from "../../config/api";
import useFetch from "../../hooks/useFetch";
import tableSlice from "../../store/tableSlice";

export default function Table() {
  const tableURL = process.env.REACT_APP_TABLE_URL;
  const [tableItems] = useFetch(null, getItems(tableURL), tableSlice.actions.add);

  return (
    <>
      {tableItems ? (
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
        <Loader/>
      )}
    </>
  );
}