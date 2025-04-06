import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Admin_Manager from "../Admin_Manage";

export default function Admin_page() {
  const [appointments, setAppointments] = useState([]);
  const [metaData, setMetaData] = useState({});
  const navigate = useNavigate();

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
    const interval = setInterval(fetchData, 1000);
    return () => clearInterval(interval);
  }, []);

  const deleteAppointment = (id) => {
    if (window.confirm("Are you sure you want to delete this appointment?")) {
      axios
        .delete(`https://67e6b92e6530dbd311114010.mockapi.io/data/user/${id}`)
        .then(() => {
          setAppointments((prev) => prev.filter((appt) => appt.id !== id));
        });
    }
  };

  const editAppointment = (id) => {
    navigate(`/admin/edit/${id}`);
  };

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

  let baseStartTime = metaData?.start_Time ? new Date(metaData.start_Time) : null;

  return (
    <div className="admin-panel content">
      <h2>Admin Panel - All Appointments</h2>
      <Admin_Manager />
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Reason</th>
            <th>Gender</th>
            <th>Scheduled Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {baseStartTime &&
            appointments.map((appt) => {
              const reason = appt.Reason || appt.Reson || "other";
              const duration = getDurationByReason(reason);

              let currentStartTime = new Date(baseStartTime);
              let currentEndTime = new Date(currentStartTime.getTime() + duration * 60000);
              baseStartTime = new Date(currentEndTime);

              const schedule = `${currentStartTime.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })} - ${currentEndTime.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}`;

              return (
                <tr key={appt.id}>
                  <td>{appt.Name}</td>
                  <td>{appt.Age}</td>
                  <td>{appt.Phone}</td>
                  <td>{reason}</td>
                  <td>{appt.Gender}</td>
                  <td>{schedule}</td>
                  <td>
                    <button onClick={() => editAppointment(appt.id)}>Edit</button>
                    <button
                      style={{ marginLeft: "10px", color: "red" }}
                      onClick={() => deleteAppointment(appt.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
