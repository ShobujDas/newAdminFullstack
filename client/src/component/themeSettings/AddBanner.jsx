import React, { useState } from 'react'
import Layout from '../layout/Layout'
import { FaTachometerAlt } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";

function AddBanner() {


  const [FormValue, SetFormValue] = useState({
    name: "",
    image: "",
  });

  const handleChange = (Property, Value) => {
    SetFormValue({ ...FormValue, [Property]: Value });
  };

  const imageUpload = (e) => {
    console.log(e.target.files[0])
    // console.log("aaaaaaa")
    SetFormValue({ ...FormValue, image: e.target.files[0] });
    console.log(FormValue.image)

  };

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      const formdata = new FormData();
      formdata.append("myFile",FormValue.image,FormValue.image.name);
      formdata.append("name",FormValue.name);
      
      const {data} = await axios.post('http://localhost:8000/api/v1/banner/addbanner',formdata)
      if(data?.success){
        toast.success(`${data?.message}`);
        SetFormValue({ name: "", image: "" });
      }

    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong")
    }
  };




  return (
    <Layout>
      <div className="row m-3  brd">
        <div className="col-md-8">
          <h4> Add Top Banner</h4>
        </div>
        <div className="col-md-4">
          <div className="d-flex align-items-center mb-2">
            <FaTachometerAlt />
            <div className="ms-2">Home</div>
            <span className="ms-2">{">"}</span>
            <div className="ms-2">Add Top Banner</div>
          </div>
        </div>
      </div>
      <div className="row ms-4">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Banner Title
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Title"
              value={FormValue.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
            <div>
              <label htmlFor="formFileLg" className="form-label mt-3">
              Featured Image
              </label>
              <input
                className="form-control form-control-lg"
                id="formFileLg"
                type="file"
                onChange={imageUpload}
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3" onClick={handleUpload}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default AddBanner