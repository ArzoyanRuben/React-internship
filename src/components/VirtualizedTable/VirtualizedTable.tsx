// import * as React from "react";
// import { AutoSizer, Column, Table } from "react-virtualized";
// import clsx from "clsx";
// import { withStyles } from "@mui/styles";
// import { createTheme } from "@mui/material/styles";
// import TableCell from "@mui/material/TableCell";
// import { ITable } from "../../APIResponseTypes";

// const styles = (theme: {
//   direction: string;
//   palette: { grey: { 200: number } };
// }) => ({
//   flexContainer: {
//     display: "flex",
//     alignItems: "center",
//     boxSizing: "border-box",
//   },
//   table: {
//     "& .ReactVirtualized__Table__headerRow": {
//       ...(theme.direction === "rtl" && {
//         paddingLeft: "0 !important",
//       }),
//       ...(theme.direction !== "rtl" && {
//         paddingRight: undefined,
//       }),
//     },
//   },
//   tableRowHover: {
//     "&:hover": {
//       backgroundColor: theme.palette.grey[200],
//     },
//   },
//   tableCell: {
//     flex: 1,
//   },
//   noClick: {
//     cursor: "initial",
//   },
// });

// function MuiVirtualizedTable({
//   headerHeight = 48,
//   rowHeight = 48,
//   classes,
//   columns,
//   ...tableProps
// }) {
//   const getRowClassName = ({ index }: { index: number }) => {
//     return clsx(classes.tableRow, classes.flexContainer, {
//       [classes.tableRowHover]: index !== -1,
//     });
//   };

//   const cellRenderer = ({
//     cellData,
//     columnIndex,
//   }: {
//     cellData: ITable;
//     columnIndex: number;
//   }) => {
//     return (
//       <TableCell
//         component="div"
//         className={clsx(classes.tableCell, classes.flexContainer, {})}
//         variant="body"
//         style={{ height: rowHeight }}
//         align={
//           (columnIndex != null && columns[columnIndex].numeric) || false
//             ? "right"
//             : "left"
//         }
//       >
//         {cellData}
//       </TableCell>
//     );
//   };

//   const headerRenderer = ({
//     label,
//     columnIndex,
//   }: {
//     label: string;
//     columnIndex: number;
//   }) => {
//     return (
//       <TableCell
//         component="div"
//         className={clsx(classes.tableCell, classes.flexContainer)}
//         variant="head"
//         style={{ height: headerHeight }}
//         align={columns[columnIndex].numeric || false ? "right" : "left"}
//       >
//         <span>{label}</span>
//       </TableCell>
//     );
//   };

//   return (
//     <AutoSizer>
//       {({ height, width }: { height: number; width: number }) => (
//         <Table
//           height={height}
//           width={width}
//           rowHeight={rowHeight}
//           gridStyle={{
//             direction: "inherit",
//           }}
//           headerHeight={headerHeight}
//           className={classes.table}
//           {...tableProps}
//           rowClassName={getRowClassName}
//         >
//           {columns.map(({ dataKey }: { dataKey: number }, index: number) => {
//             return (
//               <Column
//                 key={dataKey}
//                 headerRenderer={(headerProps) =>
//                   headerRenderer({
//                     ...headerProps,
//                     columnIndex: index,
//                   })
//                 }
//                 className={classes.flexContainer}
//                 cellRenderer={cellRenderer}
//                 dataKey={dataKey}
//               />
//             );
//           })}
//         </Table>
//       )}
//     </AutoSizer>
//   );
// }

// const defaultTheme = createTheme();
// const VirtualizedTable = withStyles(styles, { defaultTheme })(
//   MuiVirtualizedTable
// );

// export default VirtualizedTable;
