import React from 'react'
import Modal from './Modal';
import Navbar from './Navbar';

function AdminInput() {
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
              <form>
                <div className="mb-4">
                  <input
                    type="text"
                    id="N"
                    name="N"
                    key="N"
                    className="form-control"
                    placeholder="Amount of Nitrogen in Soil"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    id="P"
                    name="P"
                    key="P"
                    className="form-control"
                    placeholder="Amount of Phosphorus in Soil"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    id="K"
                    name="K"
                    key="K"
                    className="form-control"
                    placeholder="Amount of Potassium in Soil"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    id="temperature"
                    name="temperature"
                    key="temperature"
                    className="form-control"
                    placeholder="Temperature (in Celcius)"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    id="humidity"
                    name="humidity"
                    key="humidity"
                    className="form-control"
                    placeholder="Humidity (in %)"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    id="ph"
                    name="ph"
                    key="ph"
                    className="form-control"
                    placeholder="pH value of Soil"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    id="rainfall"
                    key="rainfall"
                    name="rainfall"
                    className="form-control"
                    placeholder="Rainfall (in mm)"
                  />
                </div>
                <button
                  type="button"
                  name="broadcastCrop"
                  class="btn custom-btn"
                >
                    Save
                </button>
              </form>
            </div>
          </div>
          <Modal/>
        </div>
        </div>
      );
}

export default AdminInput