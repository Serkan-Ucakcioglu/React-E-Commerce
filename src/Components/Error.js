import React from "react";
import {NavLink} from "react-router-dom"
function Error() {
  return (
    <div>
      <h1 className="text-red-500">Sayfa Bulunamadı</h1>
      <NavLink to={"/"}>Anasayfaya Dön</NavLink>
    </div>
  );
}

export default Error;
