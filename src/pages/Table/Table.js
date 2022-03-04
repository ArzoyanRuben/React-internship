import Paper from "@mui/material/Paper";
import { getTableItems } from "../../API/tableItemsAPI";
import VirtualizedTable from "../../components/VirtualizedTable/VirtualizedTable";
import useFetch from "../../hooks/useFetch";

export default function Table() {
  const [tableItems] = useFetch(null, getTableItems);

  return (
    <>
      {tableItems ? (
        <Paper style={{ height: 400, width: "100%" }}>
          <VirtualizedTable
            rowCount={tableItems.length}
            rowGetter={({ index }) => tableItems[index]}
            columns={Object.keys(tableItems[0]).map((cell) => ({
              width: 200,
              label: [cell],
              dataKey: [cell],
            }))}
          />
        </Paper>
      ) : (
        <h1>...Loading</h1>
      )}
    </>
  );
}