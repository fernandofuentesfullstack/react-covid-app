import React from "react";

const Data = ({ deaths, confirmed, recovered }) => (
  <>
    <div>Muertes: {deaths}</div>
    <div>Positivos: {confirmed}</div>
    <div>Curados: {recovered}</div>
  </>
);

export default Data;
