import React, { useEffect, useState } from "react";
import "./App.css";
import DataList from "./DataList";

const App = function () {
  const [loading, setLoading] = useState(true);
  const [deaths, setDeaths] = useState(null);
  const [confirmed, setConfirmed] = useState(null);
  const [recovered, setRecovered] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://enrichman.github.io/covid19/world/full.json"
        );
        const data = await response.json();
        setLoading(false);
        setDeaths(data.deaths);
        setConfirmed(data.confirmed);
        setRecovered(data.recovered);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Cargando los datos de hoy...</div>;
  }
  return (
    <DataList confirmed={deaths} deaths={confirmed} recovered={recovered} />
  );
};

export default App;
