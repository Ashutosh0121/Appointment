import React, { useEffect, useState } from "react";
import axios from "axios";
import "./View.css";
import { useNavigate } from "react-router-dom";

export default function View() {
  
  let [data, setData] = useState([]);

  useEffect(() => {
    // fetch data
    const fetchData = () => {
      axios
        .get("https://67e6b92e6530dbd311114010.mockapi.io/data/user")
        .then((res) => setData(res.data))
        .catch((error) => console.error("Error fetching data:", error));
    };

    
    fetchData();

    // fetch data every second
    const interval = setInterval(fetchData, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <h2>Hospital Appointment List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Doctor</th>
            <th>Appointment Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v) => {
            let { Name, id, Phone, Reason } = v;
            return (
              <tr key={id+1}>
                <td>{id}</td>
                <td>{Name}</td>
                <td>{Reason}</td>
                <td>{Phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
