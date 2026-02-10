import { useEffect, useState } from "react";
import API from "../api/api";

function SummaryCards() {
  const [summary, setSummary] = useState({});

  useEffect(() => {
    API.get("summary/").then(res => setSummary(res.data));
  }, []);

  return (
    <div>
      <h3>Average Flowrate: {summary.avg_flowrate}</h3>
      <h3>Max Pressure: {summary.max_pressure}</h3>
      <h3>Min Temperature: {summary.min_temperature}</h3>
    </div>
  );
}

export default SummaryCards;
