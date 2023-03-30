import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/bootstrap.css";
import "../css/cropform.css";
import requests from "../django-ML-API/requests";
import axios from "../django-ML-API/axios.js";
import "../css/material-dashboard.css";
import "../css/nucleo-icons.css";
import "../css/nucleo-svg.css";

import Modal from "./Modal";
function CropRecommendationForm() {
  const [form1Data, setForm1Data] = useState({
    N: "",
    P: "",
    K: "",
    temperature: "",
    humidity: "",
    ph: "",
    rainfall: "",
  });

  const arr = [];

  const handleChange1 = (e, changeKey = undefined) => {
    // console.log(changeKey, e.target.value)
    let newData = { ...form1Data };
    newData[e.target.id] = e.target.value;
    console.log(newData);
    setForm1Data(newData);
  };

  const handleClick1 = async () => {
    const request = new FormData();

    for (let key in form1Data) {
      console.log(key, form1Data[key]);
      request.append(key, form1Data[key]);
    }
    console.log(request);
    console.log(requests.cropApi);
    const response = await axios.post(requests.cropApi, request);
    console.log(response);
    const responseData = response.data;
    console.log("Response data ", responseData);
    console.log("idr dhyan de");
    // arr = []
    console.log(responseData[0]);
    arr.push(responseData[0]);
    arr.push(responseData[1]);
    arr.push(responseData[2]);
    console.log(arr);
    resultPage();
  };

  const navigate = useNavigate();

  const resultPage = () => {
    navigate("/result", { state: { data: arr } });
  };

  return (
    <div className="form-body">
      <div className="card">
        <div className="form-heading">
          <center>
            <h3 style={{ color: "whitesmoke" }}>
              Crop Recommender<span className="crop_icon">🧑‍🌾</span>
            </h3>
          </center>
        </div>
        <div className="card-body">
          <form>
            <div className="input-group input-group-outline mb-4">
              <input
                type="text"
                id="N"
                name="N"
                key="N"
                onChange={(e) => handleChange1(e)}
                className="form-control"
                placeholder="Amount of Nitrogen in Soil"
              />
            </div>
            <div className="input-group input-group-outline mb-4">
              <input
                type="text"
                id="P"
                name="P"
                key="P"
                onChange={(e) => handleChange1(e)}
                className="form-control"
                placeholder="Amount of Phosphorus in Soil"
              />
            </div>
            <div className="input-group input-group-outline mb-4">
              <input
                type="text"
                id="K"
                name="K"
                key="K"
                className="form-control"
                onChange={(e) => handleChange1(e)}
                placeholder="Amount of Potassium in Soil"
              />
            </div>
            <div className="input-group input-group-outline mb-4">
              <input
                type="text"
                id="temperature"
                name="temperature"
                key="temperature"
                className="form-control"
                onChange={(e) => handleChange1(e)}
                placeholder="Temperature (in Celcius)"
              />
            </div>
            <div className="input-group input-group-outline mb-4">
              <input
                type="text"
                id="humidity"
                name="humidity"
                key="humidity"
                className="form-control"
                onChange={(e) => handleChange1(e)}
                placeholder="Humidity (in %)"
              />
            </div>
            <div className="input-group input-group-outline mb-4">
              <input
                type="text"
                id="ph"
                name="ph"
                key="ph"
                className="form-control"
                onChange={(e) => handleChange1(e)}
                placeholder="pH value of Soil"
              />
            </div>
            <div className="input-group input-group-outline mb-4">
              <input
                type="text"
                id="rainfall"
                key="rainfall"
                name="rainfall"
                className="form-control"
                onChange={(e) => handleChange1(e)}
                placeholder="Rainfall (in mm)"
              />
            </div>
            <button
              type="button"
              style={{ color: "whitesmoke" }}
              name="broadcastCrop"
              className="btn custom-btn"
              onClick={() => handleClick1()}
            >
              Recommend
            </button>
          </form>
        </div>
      </div>
      <Modal />
    </div>
  );
}

export default CropRecommendationForm;
