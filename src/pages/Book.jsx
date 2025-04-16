import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Book() {
  const navigate = useNavigate();

  const [formdata, setFormData] = React.useState({
    Name: "",
    Phone: "",
    Age: "",
    Reason: "",
    Gender: "",
  });

  const [errors, setErrors] = React.useState({});

  const handleChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errs = {};

    const nameRegex = /^[A-Za-z]{3,}(?: [A-Za-z]+){0,2}$/;
    if (!formdata.Name.trim()) {
      errs.Name = "Name is required.";
    } else if (!nameRegex.test(formdata.Name.trim())) {
      errs.Name = "Name must be letters only (max 2 spaces, min 3 characters).";
    }

    const age = parseInt(formdata.Age);
    if (!formdata.Age) {
      errs.Age = "Age is required.";
    } else if (isNaN(age) || age < 5 || age > 70) {
      errs.Age = "Age must be between 5 and 70.";
    }

    if (!formdata.Reason) {
      errs.Reason = "Please select a reason.";
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!formdata.Phone) {
      errs.Phone = "Phone number is required.";
    } else if (!phoneRegex.test(formdata.Phone)) {
      errs.Phone = "Phone number must be 10 digits.";
    }

    if (!formdata.Gender) {
      errs.Gender = "Please select a gender.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const sub = (e) => {
    e.preventDefault();
    if (validate()) {
      axios
        .post("https://67e6b92e6530dbd311114010.mockapi.io/data/user", formdata)
        .then((res) => {
          navigate("/view");
        })
        .catch((err) => {
          console.error("Submission failed:", err);
        });
    }
  };

  return (
    <section>
      <div className="content book">
        <div className="bookbox content">
          <div className="box grid grid-two">
            <div className="img grid">
              <img src="./image/Dr1.webp" alt="" />
            </div>
            <div className="form">
              <form onSubmit={sub}>
                <input
                  type="text"
                  placeholder="Name"
                  name="Name"
                  id="Name"
                  value={formdata.Name}
                  onChange={handleChange}
                />
                {errors.Name && <span style={{ color: "red" }}>{errors.Name}</span>}

                <input
                  type="text"
                  placeholder="Age"
                  name="Age"
                  id="age"
                  value={formdata.Age}
                  onChange={handleChange}
                />
                {errors.Age && <span style={{ color: "red" }}>{errors.Age}</span>}

                <select
                  name="Reason"
                  id="Reason"
                  value={formdata.Reason}
                  onChange={handleChange}
                >
                  <option value="">Select Reason</option>
                  <option value="Check up">Check up</option>
                  <option value="Consult">Consult</option>
                  <option value="Other">Other</option>
                </select>
                {errors.Reason && <span style={{ color: "red" }}>{errors.Reason}</span>}

                <input
                  type="number"
                  placeholder="Phone"
                  name="Phone"
                  id="Phone"
                  value={formdata.Phone}
                  onChange={handleChange}
                />
                {errors.Phone && <span style={{ color: "red" }}>{errors.Phone}</span>}

                <select
                  name="Gender"
                  id="Gender"
                  value={formdata.Gender}
                  onChange={handleChange}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                {errors.Gender && <span style={{ color: "red" }}>{errors.Gender}</span>}

                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
