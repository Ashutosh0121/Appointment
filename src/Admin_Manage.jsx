import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Admin_Manage() {
  const [sessionData, setSessionData] = useState({
    startTime: "",
    endTime: "",
    bookingMessage: "",
    viewMessage: "",
    status: false,
    bookStartTime: "",
    bookEndTime: ""
  });

  const fetchData = () => {
    axios.get("https://67e6b92e6530dbd311114010.mockapi.io/data/meta_data/1")
      .then((res) => {
        const data = res.data;
        setSessionData({
          startTime: data.start_Time || "",
          endTime: data.end_Time || "",
          bookingMessage: data.booking_Message || "",
          viewMessage: data.viwe_Message || "",
          status: data.Status || false,
          bookStartTime: data.Book_start_time || "",
          bookEndTime: data.Book_end_time || ""
        });
      })
      .catch((err) => console.error("Error fetching data:", err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setSessionData(prev => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put("https://67e6b92e6530dbd311114010.mockapi.io/data/meta_data/1", {
      start_Time: sessionData.startTime,
      end_Time: sessionData.endTime,
      booking_Message: sessionData.bookingMessage,
      viwe_Message: sessionData.viewMessage,
      Status: sessionData.status,
      Book_start_time: sessionData.bookStartTime,
      Book_end_time: sessionData.bookEndTime
    })
    .then(() => {
      alert("Session data updated successfully!");
    })
    .catch((err) => {
      console.error("Update failed:", err);
      alert("Failed to update session data.");
    });
  };

  return (
    <main className="admin-container">
      <section className="admin-panel">
        <header>
          <h1>Admin Session Manager</h1>
          <p>Manage session timing and messages (ID: 1)</p>
        </header>

        <form onSubmit={handleSubmit} className="admin-form">
          <div className="form-group">
            <label htmlFor="startTime">Start Time:</label>
            <input
              type="datetime-local"
              id="startTime"
              value={sessionData.startTime}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="endTime">End Time:</label>
            <input
              type="datetime-local"
              id="endTime"
              value={sessionData.endTime}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="bookStartTime">Booking Start Time:</label>
            <input
              type="datetime-local"
              id="bookStartTime"
              value={sessionData.bookStartTime}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="bookEndTime">Booking End Time:</label>
            <input
              type="datetime-local"
              id="bookEndTime"
              value={sessionData.bookEndTime}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="bookingMessage">Booking Message:</label>
            <input
              type="text"
              id="bookingMessage"
              value={sessionData.bookingMessage}
              onChange={handleChange}
              placeholder="Enter booking message"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="viewMessage">View Message:</label>
            <input
              type="text"
              id="viewMessage"
              value={sessionData.viewMessage}
              onChange={handleChange}
              placeholder="Enter view message"
            />
          </div>

          <div className="form-group checkbox">
            <label htmlFor="status">Session Status:</label>
            <input
              type="checkbox"
              id="status"
              checked={sessionData.status}
              onChange={handleChange}
            />
            <span>{sessionData.status ? "Active" : "Inactive"}</span>
          </div>

          <div className="form-actions">
            <button type="submit">Update Session</button>
          </div>
        </form>
      </section>
    </main>
  );
}
