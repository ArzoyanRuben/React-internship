import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Error404 } from "./pages/Error404/Error404";
import { AppBody } from "./pages/AppBody/AppBody";
import { Users } from "./pages/Users/Users";
import { Albums } from "./pages/Albums/Albums";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AppBody />}>
        <Route index element={<Users />} />
        <Route path="albums" element={<Albums />} />
      </Route>
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
