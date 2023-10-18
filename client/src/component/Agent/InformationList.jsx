import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { FaTachometerAlt } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";

function InformationList() {
  const [agentInfoData, setAgentInfoData] = useState([]);

  const getAgetnInformation = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8000/api/v1/agentinfo/getinfo"
      );
      console.log(data);
      if (data?.success) {
        toast.success("Get All Agent Data ");

        setAgentInfoData(data?.getInfo);
        // console.log(agentInfoData)
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  useEffect(() => {
    getAgetnInformation();
  }, []);

  //Delete category
  const handleDelete = async (pId) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:8000/api/v1/agentinfo/deleteinfo/${pId}`
      );
      if (data.success) {
        toast.success(`User is deleted`);
      } else {
        toast.error(data.error);
      }
      getAgetnInformation();
    } catch (error) {
      console.log(error);
      toast.error("something went error");
    }
  };

  return (
    <Layout>
      <div className="row m-3  brd">
        <div className="col-md-8">
          <h4>Information List</h4>
        </div>
        <div className="col-md-4">
          <div className="d-flex align-items-center mb-2">
            <FaTachometerAlt />
            <div className="ms-2">Home</div>
            <span className="ms-2">{">"}</span>
            <div className="ms-2">Information List</div>
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
                  <th scope="col">AgentID</th>
                  <th scope="col">UserName</th>
                  <th scope="col">Password</th>
                  <th scope="col">FullName</th>
                  <th scope="col">Moblie</th>
                  <th scope="col">FatherName</th>
                  <th scope="col">MotherName</th>
                  <th scope="col">NomineeName</th>
                  <th scope="col">NomineeRelation</th>
                  <th scope="col">NomineNumber</th>
                  <th scope="col">Address</th>
                </tr>
              </thead>
              <tbody>
              {agentInfoData?.map((e,index) => (
                  <tr key={e._id}>
                    <th scope="row">{index + 1}</th>
                    <td>{e.agentId}</td>
                    <td>{e.userName}</td>
                    <td>{e.pass}</td>
                    <td>{e.conPass}</td>
                    <td>{e.fullName}</td>
                    <td>{e.mobile}</td>
                    <td>{e.father}</td>
                    <td>{e.mother}</td>
                    <td>{e.nominee}</td>
                    <td>{e.nomineeRel}</td>
                    <td>{e.nomineeMobile}</td>
                    <td>{e.nomineeMobile}</td>
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

export default InformationList;
