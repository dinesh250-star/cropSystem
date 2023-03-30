import React from 'react'
import Navbar from './Navbar'
import '../css/weather.css'
import '../css/bootstrap.css'
import '../css/material-dashboard.css'
import '../css/nucleo-icons.css'
import '../css/nucleo-svg.css'
import first from '../images/2.png';

function Weather() {

    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yy = today.getFullYear();
    const date = dd + '/' + mm + '/' + yy;

    const data = [
        {
            date: "12/02/2023",
            weather: "Sunny",
            temp: 26,
            wind: 49
        },
        {
            date: "12/02/2023",
            weather: "Sunny",
            temp: 26,
            wind: 49
        },
        {
            date: "12/02/2023",
            weather: "Sunny",
            temp: 26,
            wind: 49
        }
    ];

    const list = data.map((ele) => {
        return (
            <tr className='text-center'>
                <td>
                    <div >
                        <h5 className="mb-0 text-sm">test</h5>
                    </div>
                </td>
                <td>
                    <div>
                        <h5 className="mb-0 text-sm">
                            <span className='image-adjust'>
                                <img src={first} />
                            </span> test</h5>
                    </div>
                </td>
                <td>
                    <div>
                        <h5 className="mb-0 text-sm">test</h5>
                    </div>
                </td>
                <td>
                    <div>
                        <h5 className="mb-0 text-sm">test</h5>
                    </div>
                </td>
            </tr>
        );
    })

    return (
        <div>
            <Navbar></Navbar>
            <div className='weather-container'>
                <form className="form-inline">
                    <div className="input-group input-group-outline">
                        <input type="text" className="form-control" id="place" placeholder="Enter Location" />
                    </div>
                    <div class="form-group">
                        <button type="submit" className="btn btn-primary mt-3 ml-4">Search</button>
                    </div>
                </form>
            </div>
            <br></br>
            <div className='container-fluid'>
                <div className='card'>
                    <div className='card-body'>
                        <h3>Current Forecast : {date}</h3>
                        <hr />
                        <div className='weather-readings'>
                            <h4>Weather : <span><img src={first} /></span>Sunny</h4>
                            <h4>Temperature : 34</h4>
                            <h4>Wind Cover : 40%</h4>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <div className="container-fluid mt-2">
                <div className="row">
                    <div className="col-12">
                        <h4 className='text-black mb-3 text-capitalize'>Top Losers(Current trends)</h4>
                        <table className="table table-striped align-items-center mb-0">
                            <thead>
                                <tr className='text-center'>
                                    <th
                                        className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Date</th>
                                    <th
                                        className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Weather</th>
                                    <th
                                        className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Temperature</th>
                                    <th
                                        className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                        Wind Cover</th>
                                </tr>
                            </thead>
                            <tbody>
                                {list}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather