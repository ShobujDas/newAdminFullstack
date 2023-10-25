import { useState } from "react";
import Layout from "../layout/Layout";
import { FaTachometerAlt } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";

function AddLogo() {
  const [FormValue, SetFormValue] = useState({
    name: "",
    image: "",
  });

  // const [imageChanged, setImageChanged] = useState(false);

  const handleChange = (Property, Value) => {
    SetFormValue({ ...FormValue, [Property]: Value });
  };
  const imageUpload = (e) => {
    // console.log(e.target.files[0])
    // console.log("aaaaaaa")
    SetFormValue({ ...FormValue, image: e.target.files[0] });
    // setImageChanged(true);
   
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    try {

      const formdata = new FormData();
      formdata.append("myFile",FormValue.image,FormValue.image.name);
      formdata.append("name",FormValue.name);

   
      const {data} = await axios.post("http://localhost:8000/api/v1/logo/addlogo",formdata)

      SetFormValue({ name: "", image: "" });
      setImageChanged(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="row m-3  brd">
        <div className="col-md-8">
          <h4> Add Logo</h4>
        </div>
        <div className="col-md-4">
          <div className="d-flex align-items-center mb-2">
            <FaTachometerAlt />
            <div className="ms-2">Home</div>
            <span className="ms-2">{">"}</span>
            <div className="ms-2">Add Logo</div>
          </div>
        </div>
      </div>
      <div className="row ms-4">
        <form encType="multipart/form-data">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Logo Title
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
                value={FormValue.image.name}
                onChange={ imageUpload}
              />
            </div>
            <button
              type="submit"
              onClick={handleUpload}
              className="btn btn-primary mt-3"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default AddLogo;
