import React, { useState } from "react";
import Layout from "../layout/Layout";
import { FaTachometerAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import axios from "axios";

function AddUser() {


  const [FormValue, SetFormValue] = useState({ name: "", address: "", phone: "", username: "", role: "", password: "" });


  const handleChange = (Property,Value)=>{
        SetFormValue({...FormValue,[Property]:Value})
  }
const handleAdd = async (e)=>{
  e.preventDefault();
  try {
    
    // alert(JSON.stringify(FormValue))
   const {data} = await axios.post("http://localhost:8000/api/v1/user/addUser",FormValue);

  

   if(data?.success){
    toast.success(`${data?.UserADD.name} ${data?.message}`)
   }

   
    SetFormValue({name:"",address:"",phone:"",username:"",role:"",password:""})
  


  } catch (error) {
    console.log(error)
    toast.error("Something Went Wrong")
  }
}



  return (
    <Layout>
      <div className="row m-3  brd">
        <div className="col-md-8">
          <h4>Add New User</h4>
        </div>
        <div className="col-md-4">
          <div className="d-flex align-items-center mb-2">
            <FaTachometerAlt />
            <div className="ms-2">Home</div>
            <span className="ms-2">{">"}</span>
            <div className="ms-2">Add User</div>
          </div>
        </div>
      </div>

      <div className="row ms-4">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Full Name*
            </label>
            <input
              type="text"
              className="form-control"        
              aria-describedby="emailHelp"
              placeholder="Enter name"
              value={FormValue.name}
              onChange={(e)=>handleChange("name",e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Address*
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={3}
              placeholder="Enter Address"
              value={FormValue.address}
              // onChange={(e)=>setAddress(e.target.value)}
              onChange={(e)=>handleChange("address",e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Phone Number*
            </label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter phone number"
              value={FormValue.phone}
              // onChange={(e)=>setPhone(e.target.value)}
              onChange={(e)=>handleChange("phone",e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              User Name*
            </label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter user name"
              value={FormValue.username}
              // onChange={(e)=>setUserName(e.target.value)}
              onChange={(e)=>handleChange("username",e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              User Role*
            </label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter user role"
              value={FormValue.role}
              // onChange={(e)=>setRole(e.target.value)}
              onChange={(e)=>handleChange("role",e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Password*
            </label>
            <input
              type="password"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter password"
              value={FormValue.password}
              // onChange={(e)=>setPassword(e.target.value)}
              onChange={(e)=>handleChange("password",e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary mt-3" onClick={handleAdd}>
            Save
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default AddUser;
