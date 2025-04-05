import React, { useEffect, useState } from "react";
import axios from "axios";


export default function Admin_Manage() {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [bookingMessage, setBookingMessage] = useState("");
  const [viewMessage, setViewMessage] = useState("");
  const [status, setStatus] = useState(false);
  const [bookStartTime, setBookStartTime] = useState("");
  const [bookEndTime, setBookEndTime] = useState("");

  const fetchData = () => {
    axios.get("https://67e6b92e6530dbd311114010.mockapi.io/data/meta_data/1")
      .then((res) => {
        const data = res.data;
        setStartTime(data.start_Time);
        setEndTime(data.end_Time);
        setBookingMessage(data.booking_Message);
        setViewMessage(data.viwe_Message);
        setStatus(data.Status);
        setBookStartTime(data.Book_start_time);
        setBookEndTime(data.Book_end_time);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put("https://67e6b92e6530dbd311114010.mockapi.io/data/meta_data/1", {
      start_Time: startTime,
      end_Time: endTime,
      booking_Message: bookingMessage,
      viwe_Message: viewMessage,
      Status: status,
      Book_start_time: bookStartTime,
      Book_end_time: bookEndTime
    }).then(() => {
      alert("Session data updated successfully!");
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
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="endTime">End Time:</label>
            <input
              type="datetime-local"
              id="endTime"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="bookStartTime">Booking Start Time:</label>
            <input
              type="datetime-local"
              id="bookStartTime"
              value={bookStartTime}
              onChange={(e) => setBookStartTime(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="bookEndTime">Booking End Time:</label>
            <input
              type="datetime-local"
              id="bookEndTime"
              value={bookEndTime}
              onChange={(e) => setBookEndTime(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="bookingMessage">Booking Message:</label>
            <input
              type="text"
              id="bookingMessage"
              value={bookingMessage}
              onChange={(e) => setBookingMessage(e.target.value)}
              placeholder="Enter booking message"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="viewMessage">View Message:</label>
            <input
              type="text"
              id="viewMessage"
              value={viewMessage}
              onChange={(e) => setViewMessage(e.target.value)}
              placeholder="Enter view message"
            />
          </div>

          <div className="form-group checkbox">
            <label htmlFor="status">Session Status:</label>
            <input
              type="checkbox"
              id="status"
              checked={status}
              onChange={() => setStatus(!status)}
            />
            <span>{status ? "Active" : "Inactive"}</span>
          </div>

          <div className="form-actions">
            <button type="submit">Update Session</button>
          </div>
        </form>
      </section>
    </main>
  );
}
