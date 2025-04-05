import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Admin() {
  let navigate = useNavigate();
  let [data,setData]=useState({
    ID:"",
    pass:""
  })
 
  
  let sub=(e)=>{
    e.preventDefault();
    
    // console.log(data);
    if(data.ID==="admin" && data.pass==="admin"){
     navigate("/adminpage")
      
    }else{
      alert("Invalid Credentials use admin/admin")
    }

  }
  let handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  return (  

  
    <>
      <div className="addmin-form ">
        <h1>Admin Login</h1>
        <form onSubmit={sub}>
          <input type="text" placeholder="Username" name="ID" id="ID" value={data.ID} onChange={handleChange}/>
          <input type="password" placeholder="Password" name="pass" id="pass" value={data.pass} onChange={handleChange}/>
          <button  type="submit">Login</button>
        </form>
      </div>
    </>
  );
}
