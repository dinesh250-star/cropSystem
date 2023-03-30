import React, { useState } from "react";
import Modal from "./Modal";
import Navbar from "./Navbar";
import axios from "axios";
function AdminInput() {
  const [n, setN] = useState("");
  const [p, setP] = useState("");
  const [k, setK] = useState("");
  const [t, setT] = useState("");
  const [h, setH] = useState("");
  const [ph, setPh] = useState("");
  const [r, setR] = useState("");
  const [c, setC] = useState("");
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
    setPh(e.target.value);
  };
  const n7 = (e) => {
    setR(e.target.value);
  };
  const n8 = (e) => {
    setC(e.target.value);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:3001/inputR`, {
        n,
        p,
        k,
        t,
        h,
        ph,
        r,
        c,
      })
      .then((resp) => {
        alert(resp.data);
      });
    setN("");
    setP("");
    setK("");
    setT("");
    setH("");
    setPh("");
    setR("");
    setC("");
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="form-body">
        <div className="card">
          <div className="form-heading">
            <center>
              <h3>
                Admin Input<span className="crop_icon">👨🏻‍💻</span>
              </h3>
            </center>
          </div>
          <div className="card-body">
            <form onSubmit={submitHandler}>
              <div className="mb-4">
                <input
                  type="number"
                  id="N"
                  name="N"
                  key="N"
                  className="form-control"
                  required
                  value={n}
                  placeholder="Amount of Nitrogen in Soil"
                  onChange={n1}
                />
              </div>
              <div className="mb-4">
                <input
                  required
                  type="number"
                  id="P"
                  name="P"
                  key="P"
                  className="form-control"
                  placeholder="Amount of Phosphorus in Soil"
                  value={p}
                  onChange={n2}
                />
              </div>
              <div className="mb-4">
                <input
                  required
                  type="number"
                  id="K"
                  name="K"
                  key="K"
                  className="form-control"
                  placeholder="Amount of Potassium in Soil"
                  value={k}
                  onChange={n3}
                />
              </div>
              <div className="mb-4">
                <input
                  required
                  type="number"
                  id="temperature"
                  name="temperature"
                  key="temperature"
                  className="form-control"
                  placeholder="Temperature (in Celcius)"
                  value={t}
                  onChange={n4}
                />
              </div>
              <div className="mb-4">
                <input
                  required
                  type="number"
                  id="humidity"
                  name="humidity"
                  key="humidity"
                  className="form-control"
                  placeholder="Humidity (in %)"
                  value={h}
                  onChange={n5}
                />
              </div>
              <div className="mb-4">
                <input
                  required
                  type="number"
                  id="ph"
                  name="ph"
                  key="ph"
                  className="form-control"
                  placeholder="pH value of Soil"
                  value={ph}
                  onChange={n6}
                />
              </div>
              <div className="mb-4">
                <input
                  required
                  type="nummber"
                  id="rainfall"
                  key="rainfall"
                  name="rainfall"
                  className="form-control"
                  placeholder="Rainfall (in mm)"
                  value={r}
                  onChange={n7}
                />
              </div>
              <div className="mb-4">
                <input
                  required
                  type="text"
                  id="rainfall"
                  key="rainfall"
                  name="rainfall"
                  className="form-control"
                  placeholder="crop"
                  value={c}
                  onChange={n8}
                />
              </div>
              <button
                type="submmit"
                name="broadcastCrop"
                class="btn custom-btn"
              >
                Save
              </button>
            </form>
          </div>
        </div>
        <Modal />
      </div>
    </div>
  );
}

export default AdminInput;
