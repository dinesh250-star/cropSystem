import axios from '../django-ML-API/axios.js';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/bootstrap.css'
import '../css/fertiliserform.css'
import requests from '../django-ML-API/requests';
import Modal from './Modal';
import Navbar from './Navbar';

function FertiliserRecommendation() {

    const [form2Data, setForm2Data] = useState({
        temperature: "",
        humidity: "",
        moisture: "",
        nitrogen: "",
        potassium: "",
        phosphorus: "",
        soil_type: "select",
        crop_type: "select",
    })

    const navigate = useNavigate()

    const arr = [];

    const handleChange2 = (e, changeKey = undefined) => {
        // console.log(changeKey, e.target.value)
        let newData = { ...form2Data }
        newData[e.target.id] = e.target.value
        console.log(newData)
        setForm2Data(newData)
    }

    const handleClick2 = async () => {

        const request2 = new FormData()

        for (let key in form2Data) {
            console.log(key, form2Data[key])
            request2.append(key, form2Data[key])
        }
        console.log(request2)
        console.log(requests.fertilizerAPi)
        const response = await axios.post(
            requests.fertilizerAPi,
            request2
        )
        console.log(response)
        const responseData = response.data
        console.log(responseData)
        // arr = []
        arr.push(responseData[0])
        arr.push(responseData[1])
        arr.push(responseData[2])
        console.log(arr)
        resultPage()
    }

    const resultPage = () => {
        navigate('/result', { state: { data: arr } });
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="form-body">
                <div className="card">
                    <div className="form-heading">
                        <center>
                            <h3 style={{color:'whitesmoke'}}>
                                Fertiliser Recommender<span className="crop_icon">🧪</span>
                            </h3>
                        </center>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="input-group input-group-outline mb-4">
                                <input
                                    onChange={(e) => handleChange2(e)}
                                    type="text"
                                    id="temperature"
                                    name="temperature"
                                    key="temperature"
                                    className="form-control"
                                    placeholder="Temperature (in Celcius)"
                                />
                            </div>
                            <div className="input-group input-group-outline mb-4">
                                <input
                                    onChange={(e) => handleChange2(e)}
                                    type="text"
                                    id="humidity"
                                    name="humidity"
                                    key="humidity"
                                    className="form-control"
                                    placeholder="Humidity (in %)"
                                />
                            </div>
                            <div className="input-group input-group-outline mb-4">
                                <input
                                    onChange={(e) => handleChange2(e)}
                                    type="text"
                                    id="moisture"
                                    name="moisture"
                                    key="moisture"
                                    className="form-control"
                                    placeholder="Moisture in Soil"
                                />
                            </div>
                            <div className="input-group input-group-outline mb-4">
                                <input
                                    onChange={(e) => handleChange2(e)}
                                    type="text"
                                    id="nitrogen"
                                    name="nitrogen"
                                    key="nitrogen"
                                    className="form-control"
                                    placeholder="Amount of Nitrogen in Soil"
                                />
                            </div>
                            <div className="input-group input-group-outline mb-4">
                                <input
                                    onChange={(e) => handleChange2(e)}
                                    type="text"
                                    id="potassium"
                                    name="potassium"
                                    key="potassium"
                                    className="form-control"
                                    placeholder="Amount of Postassium in Soil"
                                />
                            </div>
                            <div className="input-group input-group-outline mb-4">
                                <input
                                    onChange={(e) => handleChange2(e)}
                                    type="text"
                                    id="phosphorus"
                                    name="phosphorus"
                                    key="phosphorus"
                                    className="form-control"
                                    placeholder="Amount of Phosphorous in Soil"
                                />
                            </div>
                            <select id="soil_type" name="soil_type" onChange={(e) => handleChange2(e, "soil_type")} className="form-select form-select-lg mb-4" >
                                <option selected>Select Soil Type</option>
                                <option value="Sandy">Sandy</option>
                                <option value="Loamy">Loamy</option>
                                <option value="Black">Black</option>
                                <option value="Red">Red</option>
                                <option value="Clayey">Clayey</option>
                            </select>
                            <select id="crop_type" name="crop_type" onChange={(e) => handleChange2(e, "crop_type")} className="form-select form-select-lg mb-4 " >
                                <option selected >Select Crop Type</option>
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
                            <button
                            style={{color: 'whitesmoke'}}
                            onClick={() => handleClick2()}
                                type="button"
                                name="broadcastCrop"
                                class="btn custom-btn"
                            >
                                Recommend
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

export default FertiliserRecommendation