import React from "react";
import CovidStatistics from "../../pages/CovidStatistics/CovidStatistics";
import { Path } from "../../constants/path";
import { Navigate, Route, Routes } from "react-router-dom";

function MainRoute() {
  return (
    <Routes>
      <Route path={Path.COVID_STATISTICS} element={<CovidStatistics />} />
      <Route
        path="/"
        element={<Navigate replace to={Path.COVID_STATISTICS} />}
      />
    </Routes>
  );
}

export default MainRoute;
