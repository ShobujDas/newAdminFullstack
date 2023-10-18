import React, { useState } from "react";
import Layout from "../layout/Layout";
import { FaTachometerAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import axios from "axios";


function AddInfromation() {

  
  const [FormValue, SetFormValue] = useState({ agentId: "", userName: "", pass: "", conPass: "", fullName: "", mobile: "",father:"",mother:"",nominee:"",nomineeRel:"",nomineeMobile:"",permanentAddress:"" });


  const handleChange = (Property,Value)=>{
        SetFormValue({...FormValue,[Property]:Value})
  }
const handleAdd = async (e)=>{
  e.preventDefault();
  try {
    // alert(JSON.stringify(FormValue))
   const {data} = await axios.post("http://localhost:8000/api/v1/agentinfo/addinfo",FormValue);
   if(data?.success){
    toast.success(`${data?.agentInfo.userName} ${data?.message}`)
   }
   SetFormValue({ agentId: "", userName: "", pass: "", conPass: "", fullName: "", mobile: "",father:"",mother:"",nominee:"",nomineeRel:"",nomineeMobile:"",permanentAddress:"" });
  } catch (error) {
    console.log(error)
    toast.error("Something Went Wrong")
  }
}



  return (
    <Layout>
      <div className="row m-3  brd">
        <div className="col-md-8">
          <h4>Agent Agent Information</h4>
        </div>
        <div className="col-md-4">
          <div className="d-flex align-items-center mb-2">
            <FaTachometerAlt />
            <div className="ms-2">Home</div>
            <span className="ms-2">{">"}</span>
            <div className="ms-2">Agent Amount Report</div>
          </div>
        </div>
      </div>

      <form className="ms-3">
        <div className="row">
          <div className="row">
            <div className="col-sm-6">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Agent ID
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter name"
                  value={FormValue.agentId}
                  onChange={(e)=>handleChange("agentId",e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Your username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter name"
                  value={FormValue.userName}
                  onChange={(e)=>handleChange("userName",e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Your Password
                </label>
               
                <input
                type="password"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter phone number"
                value={FormValue.pass}
                onChange={(e)=>handleChange("pass",e.target.value)}
              />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Please Confirm your password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter phone number"
                  value={FormValue.conPass}
                  onChange={(e)=>handleChange("conPass",e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Rull Name"
                  value={FormValue.fullName}
                  onChange={(e)=>handleChange("fullName",e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Mobile Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Mobile Number"
                  value={FormValue.mobile}
                  onChange={(e)=>handleChange("mobile",e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Father Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Father Name"
                  value={FormValue.father}
                  onChange={(e)=>handleChange("father",e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Mother Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Mother Name"
                  value={FormValue.mother}
                  onChange={(e)=>handleChange("mother",e.target.value)}
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Nominee name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Nomine Name"
                  value={FormValue.nominee}
                  onChange={(e)=>handleChange("nominee",e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Nominee Relation
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Nomine Relation"
                  value={FormValue.nomineeRel}
                  onChange={(e)=>handleChange("nomineeRel",e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Nominee Mobile Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Nomine Mobile Number"
                  value={FormValue.nomineeMobile}
                  onChange={(e)=>handleChange("nomineeMobile",e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Permanent Address
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  defaultValue={""}
                  placeholder=""
                  value={FormValue.permanentAddress}
                  onChange={(e)=>handleChange("permanentAddress",e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary mt-3" onClick={handleAdd}>
          Save
        </button>
      </form>
    </Layout>
  );
}

export default AddInfromation;
