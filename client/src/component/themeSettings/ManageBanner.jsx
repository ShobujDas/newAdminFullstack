import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { FaTachometerAlt } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";

function ManageLogo() {
  const [bannerData, setBannerData] = useState([]);

  const getLogo = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8000/api/v1/banner/getbanner"
      );
      console.log(data);
      if (data?.success) {
        toast.success("Get All Agent Data ");

        setBannerData(data?.data);
        // console.log(agentInfoData)
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  useEffect(() => {
    getLogo();
  }, []);

  //Delete category
  const handleDelete = async (pId) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:8000/api/v1/banner/deletebanner/${pId}`
      );
      if (data.success) {
        toast.success(`User is deleted`);
      } else {
        toast.error(data.error);
      }
      getLogo();
    } catch (error) {
      console.log(error);
      toast.error("something went error");
    }
  };

  return (
    <Layout>
      <div className="row m-3  brd">
        <div className="col-md-8">
          <h4>Banner</h4>
        </div>
        <div className="col-md-4">
          <div className="d-flex align-items-center mb-2">
            <FaTachometerAlt />
            <div className="ms-2">Home</div>
            <span className="ms-2">{">"}</span>
            <div className="ms-2">Banner</div>
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
                  <th scope="col">Banner</th>
                  <th scope="col">Name</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
              {bannerData?.map((e,index) => (
                  <tr key={e._id}>
                    <th scope="row">{index + 1}</th>
                    <td>
                      <img
                        src={`http://localhost:8000/public/images/${e.image}`}
                        width={"50px"}
                        height={"50px"}
                        alt={e.name}
                      />
                    </td>
                    <td>{e.name}</td>
                    <td className="d-flex">
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

export default ManageLogo;
