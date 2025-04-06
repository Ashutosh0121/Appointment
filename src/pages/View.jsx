import React, { useEffect, useState } from "react";
import axios from "axios";
import "./view.css";

export default function View() {
  const [appointments, setAppointments] = useState([]);
  const [metaData, setMetaData] = useState([]);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://67e6b92e6530dbd311114010.mockapi.io/data/user")
        .then((res) => setAppointments(res.data))
        .catch((err) => console.error(err));

      axios
        .get("https://67e6b92e6530dbd311114010.mockapi.io/data/meta_data/1")
        .then((res) => setMetaData(res.data))
        .catch((err) => console.error(err));
    };

    fetchData();

    const interval = setInterval(() => {
      fetchData();
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getDurationByReason = (reason) => {
    switch ((reason || "").toLowerCase()) {
      case "check up":
        return 15;
      case "consult":
        return 10;
      default:
        return 20;
    }
  };

  let baseStartTime = metaData?.start_Time
    ? new Date(metaData.start_Time)
    : null;

  return (
    <div className="view-container">
      <h2>Appointment View</h2>

      <p className="current-time">
        <strong>Current Time:</strong> {currentTime}
      </p>

      <p className="meta-message">
        {metaData.viwe_Message || "No additional information available."}
      </p>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Scheduled Time</th>
            </tr>
          </thead>
          <tbody>
            {baseStartTime &&
              appointments.map((appt) => {
                const reason = appt.Reason || appt.Reson || "other";
                const duration = getDurationByReason(reason);

                const currentStartTime = new Date(baseStartTime);
                const currentEndTime = new Date(
                  currentStartTime.getTime() + duration * 60000
                );
                baseStartTime = new Date(currentEndTime);

                const schedule = `${currentStartTime.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })} - ${currentEndTime.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}`;

                return (
                  <tr key={appt.id}>
                    <td>{appt.id}</td>
                    <td>{appt.Name}</td>
                    <td>{schedule}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
