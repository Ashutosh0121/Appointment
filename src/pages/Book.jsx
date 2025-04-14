import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Book() {
  var navigate = useNavigate();
  let [formdata, setFormData] = React.useState({
    Name: "",
    Phone: "",
    Age: "",
    Reason: "",
    Gender: "",
  });


  let handleChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

    let sub = (e) => {
      e.preventDefault();
      console.log(formdata);
      axios.post("https://67e6b92e6530dbd311114010.mockapi.io/data/user",formdata).then((res)=>{
        // console.log(res.data);
        
        navigate("/view")  ; 
      },(rej)=>rej)
     
    };

    return (
      <>
      <section>
        <div className="content book ">
        <div className=" bookbox content ">
          <div className="box grid grid-two">
          <div className="img grid">
            <img src="./image/Dr1.png" alt="" />
          </div>
          <div className="form" >
            <form onSubmit={sub}> 
            <input type="text" placeholder="Name" name="Name" id="Name" value={formdata.Name}  onChange={handleChange} />
            <input type="text" placeholder="Age" name="Age"  id="age" value={formdata.Age} onChange={handleChange} />
            <select name="Reason" id="Reason" value={formdata.Reason} onChange={handleChange}>
              <option value="">Select Reson</option>
              <option value="Check up">Check up</option>
              <option value="Consult">Consult</option>
              <option value="Other">Other</option>
            </select>
            
            <input type="number" placeholder="Phone" name="Phone"  id="Phone" value={formdata.Phone}  onChange={handleChange} />
            <select name="Gender" id="Gender" value={formdata.Gender} onChange={handleChange}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <button type="submit">Submit</button>
            </form>
          </div>
          </div>
        </div>
        </div>
      </section>
      </>
    );
  };
