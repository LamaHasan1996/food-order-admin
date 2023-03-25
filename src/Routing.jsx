import { memo } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Restaurants, Meals } from "./pages";

function Routing() {
  return (
    <Routes>
      <Route path={`/`} element={<Navigate replace to="/restaurants" />} />
      <Route path={`/restaurants`} element={<Restaurants />} />
      <Route path={`/meals`} element={<Meals />} />
    </Routes>
  );
}

export default memo(Routing);
