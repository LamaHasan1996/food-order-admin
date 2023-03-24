import { memo } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Restaurants } from "./pages";

function Routing() {
  return (
    <Routes>
      <Route path={`/`} element={<Navigate replace to="/restaurants" />} />
      <Route path={`/restaurants`} element={<Restaurants />} />
    </Routes>
  );
}

export default memo(Routing);
