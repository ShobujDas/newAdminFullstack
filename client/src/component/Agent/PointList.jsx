import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { FaTachometerAlt } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";

function PointList() {
  const [agentPointData, setAgentPointData] = useState([]);

  const getAgetnPoints = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8000/api/v1/agentpoint/getpionts"
      );
      // console.log(data);
      if (data?.success) {
        toast.success("Get All Agent Data ");

        setAgentPointData(data?.getPoints);
        console.log(agentPointData)
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  useEffect(() => {
    getAgetnPoints();
  }, []);

  //Delete category
  const handleDelete = async (pId) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:8000/api/v1/agentpoint/deletepionts/${pId}`
      );
      if (data.success) {
        toast.success(`User is deleted`);
      } else {
        toast.error(data.error);
      }
      getAgetnPoints();
    } catch (error) {
      console.log(error);
      toast.error("something went error");
    }
  };





  return (
    <Layout>
      <div className="row m-3  brd">
        <div className="col-md-8">
          <h4>Agent Point List</h4>
        </div>
        <div className="col-md-4">
          <div className="d-flex align-items-center mb-2 bg-warning p-2">
            <FaTachometerAlt />
            <div className="ms-2">Home</div>
            <span className="ms-2">{">"}</span>
            <div className="ms-2">Agetn Point List</div>
          </div>
        </div>
      </div>

      <div className="row ms-4">
        <div className="card-header ">
          <i className="fas fa-table me-1" />
          DataTable Example
        </div>

        <div className="card-body ">
          <div className="overflow-scroll">
            <table className="table table-bordered ">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Agent Id</th>
                  <th scope="col">Agent Name</th>
                  <th scope="col">Contact</th>
                  <th scope="col">Date</th>
                  <th scope="col">Points</th>
                </tr>
              </thead>
              <tbody>
              {agentPointData?.map((e,index) => (
                  <tr key={e._id}>
                    <th scope="row">{index + 1}</th>
                    <td>{e.agentId}</td>
                    <td>{e.agentName}</td>
                    <td>{e.agentNum}</td>
                    <td>{e.date}</td>
                    <td>{e.points}</td>
                    <td>
                      <button
                        className="btn btn-primary ms-2"
                        onClick={() => {}}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger ms-2"
                        onClick={() => {
                          handleDelete(e._id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default PointList;
