import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Admin_Manage() {
  const [sessionData, setSessionData] = useState({});

  // Fetch session data once
  useEffect(() => {
    axios
      .get("https://67e6b92e6530dbd311114010.mockapi.io/data/meta_data/1")
      .then((res) => setSessionData(res.data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setSessionData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("https://67e6b92e6530dbd311114010.mockapi.io/data/meta_data/1", sessionData)
      .then(() => alert("Session data updated successfully!"))
      .catch((err) => {
        console.error("Update failed:", err);
        alert("Failed to update session data.");
      });
  };

  // Keys to show in the form (in desired order)
  const formFields = [
    { id: "Book_start_time", label: "Booking Start Time", type: "datetime-local" },
    { id: "Book_end_time", label: "Booking End Time", type: "datetime-local" },
    { id: "booking_Message", label: "Booking Message", type: "text", placeholder: "Enter booking message" },
    { id: "viwe_Message", label: "View Message", type: "text", placeholder: "Enter view message" },
    // { id: "start_Time", label: "Start Time", type: "datetime-local" },
    // { id: "end_Time", label: "End Time", type: "datetime-local" },
    { id: "Status", label: "Session Status", type: "checkbox" }
  ];

  return (
    <main className="admin-container content">
    <section className="admin-panel">
      <header className="grid">
        <p>Manage session timing and messages </p>
      </header>

      <form onSubmit={handleSubmit} className="admin-form ">

        <div className="form_grid">

        {/* <div className="form-group">

          <label htmlFor="startTime">Start Time:</label>
          <input
            type="datetime-local"
            id="startTime"
            value={sessionData.startTime}
            onChange={handleChange}
            required
          />
        </div> */}

        {/* <div className="form-group">
          <label htmlFor="endTime">End Time:</label>
          <input
            type="datetime-local"
            id="endTime"
            value={sessionData.endTime}
            onChange={handleChange}
            required
          />
        </div> */}
          <div>
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
            </div>


        <div>

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

                  </div>
        {/* <div className="form-group checkbox">
          <label htmlFor="status">Session Status:</label>
          <input
            type="checkbox"
            id="status"
            checked={sessionData.status}
            onChange={handleChange}
          />
          <span>{sessionData.status ? "Active" : "Inactive"}</span>
        </div> */}

        <div className="form-actions  grid">
          <button type="submit">Update Session</button>
        </div>
</div>
      </form>
    </section>
  </main>
  );
}
