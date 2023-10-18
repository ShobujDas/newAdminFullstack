import React, { Fragment, useState } from "react";
import Layout from "../layout/Layout";
import { FaTachometerAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import axios from "axios";

function SendPoints() {
  const [FormValue, setFormValue] = useState({
    agentId: "",
    agentNum: "",
    agentName: "",
    date: "",
    points: "",
  });

  const handleChange = (property, value) => {
    setFormValue({ ...FormValue, [property]: value });
  };

  const addPoints = async (e)=>{
    e.preventDefault();
    try {
      alert(JSON.stringify(FormValue))
      const {data} = await axios.post("http://localhost:8000/api/v1/agentpoint/addpionts",FormValue);
      if(data?.success){
        toast.success(`${data?.message}`)
      }
      setFormValue({
        agentId: "",
        agentNum: "",
        agentName: "",
        date: "",
        points: "",
      })
      
    } catch (error) {
      console.log(error)
      toast.error("something Went Wrong")
      
    }

  }


  return (
    <Layout>
      <div className="row m-3  brd">
        <div className="col-md-8">
          <h4>Sent Agent Points</h4>
        </div>
        <div className="col-md-4">
          <div className="d-flex align-items-center mb-2">
            <FaTachometerAlt />
            <div className="ms-2">Home</div>
            <span className="ms-2">{">"}</span>
            <div className="ms-2">Sent Agent Points</div>
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
                  aria-describedby="emailHelp"
                  placeholder="Enter name"
                  value={FormValue.agentId}
                  onChange={(e) => handleChange("agentId", e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Agent Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter name"
                  value={FormValue.agentName}
                  onChange={(e) => handleChange("agentName", e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Agent Contact Numer
                </label>
                <input
                  type="number"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="01718484267"
                  value={FormValue.agentNum}
                  onChange={(e) => handleChange("agentNum", e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Date
                </label>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="2023-10-17"
                  value={FormValue.date}
                  onChange={(e) => handleChange("date", e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Points
                </label>
                <input
                  type="number"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder=""
                  value={FormValue.points}
                  onChange={(e) => handleChange("points", e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary mt-3" onClick={addPoints}>
          Save
        </button>
      </form>
    </Layout>
  );
}

export default SendPoints;
