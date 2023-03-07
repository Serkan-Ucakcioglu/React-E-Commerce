import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Head/Header";

function HomePage() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default HomePage;
