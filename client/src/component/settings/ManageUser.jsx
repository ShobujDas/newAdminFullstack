import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { FaTachometerAlt } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";

function ManageUser() {
  const [userData, setUserData] = useState([]);

  const getUserData = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8000/api/v1/user/getUser"
      );
      console.log(data)

      if (data?.success) {
        toast.success("Get all user data");
        setUserData(data?.getUser);
        console.log(userData)
        console.log(userData)
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went Wrong");
    }
  };

  useEffect(() => {
    getUserData();

  }, []);

  return (
    <Layout>
      <div className="row m-3  brd">
        <div className="col-md-8">
          <h4>User List </h4>
        </div>
        <div className="col-md-4">
          <div className="d-flex align-items-center mb-2">
            <FaTachometerAlt />
            <div className="ms-2">Home</div>
            <span className="ms-2">{">"}</span>
            <div className="ms-2">User List</div>
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
                  <th scope="col">Name</th>
                  <th scope="col">Address</th>
                  <th scope="col">Phone</th>
                  <th scope="col">User Name</th>
                  <th scope="col">User Role</th>
                </tr>
              </thead>
              <tbody>
                {userData?.map((e,index) => (
                  <tr key={e._id}>
                    <th scope="row">{index + 1}</th>
                    <td>{e.name}</td>
                    <td>{e.address}</td>
                    <td>{e.phone}</td>
                    <td>{e.username}</td>
                    <td>{e.role}</td>
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

export default ManageUser;
