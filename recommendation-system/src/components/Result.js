import React from "react";
import Navbar from "./Navbar";
import "../css/result.css";
import { useLocation } from "react-router-dom";

function Result() {
  const location = useLocation();
  return (
    <div>
      <Navbar></Navbar>
      <div className="form-body">
        <div className="card">
          <div className="form-heading">
            <center>
              <h3>
                Results<span className="crop_icon">📊</span>
              </h3>
            </center>
          </div>
          <div className="result-body">
            <img src={location.state.data[1]} className="result-image"></img>
            <h5 className="accuracy">Prediction : {location.state.data[0]}</h5>
            <h6 className="desc">Description : {location.state.data[2]}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
