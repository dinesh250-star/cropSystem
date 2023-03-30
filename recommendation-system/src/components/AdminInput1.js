import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/bootstrap.css";
import "../css/fertiliserform.css";
import requests from "../django-ML-API/requests";
import Modal from "./Modal";
import Navbar from "./Navbar";
import axios from "axios";
function FertiliserRecommendation() {
  const [t, setT] = useState("");
  const [h, setH] = useState("");
  const [m, setM] = useState("");
  const [n, setN] = useState("");
  const [p, setP] = useState("");
  const [k, setK] = useState("");
  const [s, setS] = useState("");
  const [c, setC] = useState("");
  const [f, setF] = useState("");
  const n1 = (e) => {
    setN(e.target.value);
  };
  const n2 = (e) => {
    setP(e.target.value);
  };
  const n3 = (e) => {
    setK(e.target.value);
  };
  const n4 = (e) => {
    setT(e.target.value);
  };
  const n5 = (e) => {
    setH(e.target.value);
  };
  const n6 = (e) => {
    setM(e.target.value);
  };
  const n7 = (e) => {
    setS(e.target.value);
  };
  const n8 = (e) => {
    setC(e.target.value);
  };
  const n9 = (e) => {
    setF(e.target.value);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:3001/input1R`, {
        n,
        p,
        k,
        t,
        h,
        m,
        s,
        c,
        f,
      })
      .then((resp) => {
        alert(resp.data);
      });
    setN("");
    setP("");
    setK("");
    setT("");
    setH("");
    setM("");
    setS("");
    setC("");
    setF("");
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="form-body">
        <div className="card">
          <div className="form-heading">
            <center>
              <h3 style={{ color: "whitesmoke" }}>
                Fertiliser Recommender<span className="crop_icon">🧪</span>
              </h3>
            </center>
          </div>
          <div className="card-body">
            <form onSubmit={submitHandler}>
              <div className="input-group input-group-outline mb-4">
                <input
                  required
                  value={t}
                  onChange={n4}
                  type="number"
                  id="temperature"
                  name="temperature"
                  key="temperature"
                  className="form-control"
                  placeholder="Temperature (in Celcius)"
                />
              </div>
              <div className="input-group input-group-outline mb-4">
                <input
                  required
                  value={h}
                  onChange={n5}
                  type="number"
                  id="humidity"
                  name="humidity"
                  key="humidity"
                  className="form-control"
                  placeholder="Humidity (in %)"
                />
              </div>
              <div className="input-group input-group-outline mb-4">
                <input
                  required
                  onChange={n6}
                  value={m}
                  type="number"
                  id="moisture"
                  name="moisture"
                  key="moisture"
                  className="form-control"
                  placeholder="Moisture in Soil"
                />
              </div>
              <div className="input-group input-group-outline mb-4">
                <input
                  required
                  onChange={n1}
                  value={n}
                  type="number"
                  id="nitrogen"
                  name="nitrogen"
                  key="nitrogen"
                  className="form-control"
                  placeholder="Amount of Nitrogen in Soil"
                />
              </div>
              <div className="input-group input-group-outline mb-4">
                <input
                  required
                  value={p}
                  onChange={n2}
                  type="number"
                  id="potassium"
                  name="potassium"
                  key="potassium"
                  className="form-control"
                  placeholder="Amount of Postassium in Soil"
                />
              </div>
              <div className="input-group input-group-outline mb-4">
                <input
                  required
                  value={k}
                  onChange={n3}
                  type="number"
                  id="phosphorus"
                  name="phosphorus"
                  key="phosphorus"
                  className="form-control"
                  placeholder="Amount of Phosphorous in Soil"
                />
              </div>
              <select
                required
                id="soil_type"
                name="soil_type"
                onChange={n7}
                value={s}
                className="form-select form-select-lg mb-4"
              >
                <option selected>Select Soil Type</option>
                <option value="Sandy">Sandy</option>
                <option value="Loamy">Loamy</option>
                <option value="Black">Black</option>
                <option value="Red">Red</option>
                <option value="Clayey">Clayey</option>
              </select>
              <select
                required
                id="crop_type"
                name="crop_type"
                onChange={n8}
                value={c}
                className="form-select form-select-lg mb-4 "
              >
                <option selected>Select Crop Type</option>
                <option value="Maize">Maize</option>
                <option value="Sugarcane">Sugarcane</option>
                <option value="Cotton">Cotton</option>
                <option value="Tobacco">Tobacco</option>
                <option value="Paddy">Paddy</option>
                <option value="Barley">Barley</option>
                <option value="Wheat">Wheat</option>
                <option value="Millets">Millets</option>
                <option value="Oil seeds">Oil seeds</option>
                <option value="Pulses">Pulses</option>
                <option value="Ground Nuts">Ground Nuts</option>
              </select>
              <div className="input-group input-group-outline mb-4">
                <input
                  onChange={n9}
                  value={f}
                  required
                  type="text"
                  id="fertilizer"
                  name="fertilizer"
                  key="fertilizer"
                  className="form-control"
                  placeholder="Fertilizer name"
                />
              </div>
              <button
                style={{ color: "whitesmoke" }}
                type="submit"
                name="broadcastCrop"
                class="btn custom-btn"
              >
                Save
              </button>
            </form>
          </div>
        </div>
        <br></br>
        <Modal />
      </div>
    </div>
  );
}

export default FertiliserRecommendation;
