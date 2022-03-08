import React from "react";
import { Routes, Route } from "react-router-dom";
import { Error404 } from "./pages/Error404/Error404";
import { AppBody } from "./pages/AppBody/AppBody";
import { Users } from "./pages/Users/Users";
import { Albums } from "./pages/Albums/Albums";
import { Table } from "./pages/Table/Table";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AppBody />}>
        <Route index element={<Users />} />
        <Route path="albums" element={<Albums />} />
        <Route path="table" element={<Table />} />
      </Route>
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
