import Paper from "@mui/material/Paper";
import {USER_URL} from "../../constants/Urls"
import VirtualizedTable from "../../component/VirtualizedTable/VirtualizedTable";
import useFetch from "../../component/Hook/useFetch/useFetch";

export default function Table() {
  const [data] = useFetch(USER_URL);

  return (
    <>
      {data ? (
        <Paper style={{ height: 400, width: "100%" }}>
          <VirtualizedTable
            rowCount={data.length}
            rowGetter={({ index }) => data[index]}
          />
        </Paper>
      ) : (
        null
      )}
    </>
  );
} 

