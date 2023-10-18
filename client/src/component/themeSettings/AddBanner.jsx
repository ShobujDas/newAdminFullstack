import React from 'react'
import Layout from '../layout/Layout'
import { FaTachometerAlt } from "react-icons/fa";

function AddBanner() {
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
            />
            <div>
              <label htmlFor="formFileLg" className="form-label mt-3">
              Featured Image
              </label>
              <input
                className="form-control form-control-lg"
                id="formFileLg"
                type="file"
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              Submit
            </button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default AddBanner