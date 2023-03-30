import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../css/weather.css";
import "../css/bootstrap.css";
import "../css/material-dashboard.css";
import "../css/nucleo-icons.css";
import "../css/nucleo-svg.css";
import first from "../images/2.png";
import axios from "axios";

function Weather() {
  const [response, setResponse] = useState("");
  const [location, setLocation] = useState("");
  const [day0, setDay0] = useState("");
  const [weather0, setWeather0] = useState("");
  const [icon0, setIcon0] = useState(1);
  const [temperature0, setTemperature0] = useState("");
  const [wind0, setWind0] = useState("");

  const [day1, setDay1] = useState("");
  const [weather1, setWeather1] = useState("");
  const [icon1, setIcon1] = useState(1);
  const [temperature1, setTemperature1] = useState("");
  const [wind1, setWind1] = useState("");

  const [day2, setDay2] = useState("");
  const [weather2, setWeather2] = useState("");
  const [icon2, setIcon2] = useState(1);
  const [temperature2, setTemperature2] = useState("");
  const [wind2, setWind2] = useState("");

  const [day3, setDay3] = useState("");
  const [weather3, setWeather3] = useState("");
  const [icon3, setIcon3] = useState(1);
  const [temperature3, setTemperature3] = useState("");
  const [wind3, setWind3] = useState("");

  const [day4, setDay4] = useState("");
  const [weather4, setWeather4] = useState("");
  const [icon4, setIcon4] = useState(1);
  const [temperature4, setTemperature4] = useState("");
  const [wind4, setWind4] = useState("");

  const [day5, setDay5] = useState("");
  const [weather5, setWeather5] = useState("");
  const [icon5, setIcon5] = useState(1);
  const [temperature5, setTemperature5] = useState("");
  const [wind5, setWind5] = useState("");

  const [day6, setDay6] = useState("");
  const [weather6, setWeather6] = useState("");
  const [icon6, setIcon6] = useState(1);
  const [temperature6, setTemperature6] = useState("");
  const [wind6, setWind6] = useState("");
  const locationHandler = (e) => {
    setLocation(e.target.value);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    axios
      .get(
        `https://www.meteosource.com/api/v1/free/point?place_id=${location}&sections=all&language=en&units=auto&key=try6tbso8yqk5uvwuwok0e1zqk3nczk43byt61n7`
      )
      .then((res) => {
        console.log(res.data.daily.data);
        setDay0(res.data.daily.data[0].day);
        setIcon0(res.data.daily.data[0].icon);
        setWeather0(res.data.daily.data[0].weather);
        setTemperature0(res.data.daily.data[0].all_day.temperature);
        setWind0(res.data.daily.data[0].all_day.wind.speed);

        setDay1(res.data.daily.data[1].day);
        setIcon1(res.data.daily.data[1].icon);
        setWeather1(res.data.daily.data[1].weather);
        setTemperature1(res.data.daily.data[1].all_day.temperature);
        setWind1(res.data.daily.data[1].all_day.wind.speed);

        setDay2(res.data.daily.data[2].day);
        setIcon2(res.data.daily.data[2].icon);
        setWeather2(res.data.daily.data[2].weather);
        setTemperature2(res.data.daily.data[2].all_day.temperature);
        setWind2(res.data.daily.data[2].all_day.wind.speed);

        setDay3(res.data.daily.data[3].day);
        setIcon3(res.data.daily.data[3].icon);
        setWeather3(res.data.daily.data[3].weather);
        setTemperature3(res.data.daily.data[3].all_day.temperature);
        setWind3(res.data.daily.data[3].all_day.wind.speed);

        setDay4(res.data.daily.data[4].day);
        setIcon4(res.data.daily.data[4].icon);
        setWeather4(res.data.daily.data[4].weather);
        setTemperature4(res.data.daily.data[4].all_day.temperature);
        setWind4(res.data.daily.data[4].all_day.wind.speed);

        setDay5(res.data.daily.data[5].day);
        setIcon5(res.data.daily.data[5].icon);
        setWeather5(res.data.daily.data[5].weather);
        setTemperature5(res.data.daily.data[5].all_day.temperature);
        setWind5(res.data.daily.data[5].all_day.wind.speed);

        setDay6(res.data.daily.data[6].day);
        setIcon6(res.data.daily.data[6].icon);
        setWeather6(res.data.daily.data[6].weather);
        setTemperature6(res.data.daily.data[6].all_day.temperature);
        setWind6(res.data.daily.data[6].all_day.wind.speed);
      })
      .catch((error) => {
        if (error) {
          alert("Enter valid city name");
        }
      });
  };
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yy = today.getFullYear();
  const date = dd + "/" + mm + "/" + yy;

  const data = [
    {
      date: day1,
      weather: weather1,
      temp: temperature1,
      wind: wind1,
      icon: icon1,
    },
    {
      date: day2,
      weather: weather2,
      temp: temperature2,
      wind: wind2,
      icon: icon2,
    },
    {
      date: day3,
      weather: weather3,
      temp: temperature3,
      wind: wind3,
      icon: icon3,
    },
    {
      date: day4,
      weather: weather4,
      temp: temperature4,
      wind: wind4,
      icon: icon4,
    },
    {
      date: day5,
      weather: weather5,
      temp: temperature5,
      wind: wind5,
      icon: icon5,
    },
    {
      date: day6,
      weather: weather6,
      temp: temperature6,
      wind: wind6,
      icon: icon6,
    },
  ];

  const list = data.map((ele) => {
    return (
      <tr className="text-center">
        <td>
          <div>
            <h5 className="mb-0 text-sm">{ele.date}</h5>
          </div>
        </td>
        <td>
          <div>
            <h5 className="mb-0 text-sm">
              <span className="image-adjust">
                <img src={require(`../images/${ele.icon}.png`)} />
              </span>{" "}
              {ele.weather}
            </h5>
          </div>
        </td>
        <td>
          <div>
            <h5 className="mb-0 text-sm">{ele.temp}</h5>
          </div>
        </td>
        <td>
          <div>
            <h5 className="mb-0 text-sm">{ele.wind}</h5>
          </div>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <Navbar></Navbar>
      <div className="weather-container">
        <form className="form-inline" onSubmit={submitHandler}>
          <div className="input-group input-group-outline">
            <input
              type="text"
              required
              className="form-control"
              id="place"
              placeholder="Enter Location"
              onChange={locationHandler}
              value={location}
            />
          </div>
          <div class="form-group">
            <button type="submit" className="btn btn-primary mt-3 ml-4">
              Search
            </button>
          </div>
        </form>
      </div>
      <br></br>
      <div className="container-fluid">
        <div className="card">
          <div className="card-body">
            <h3>Current Forecast : {day0}</h3>
            <hr />
            <div className="weather-readings">
              <h4>
                Weather :{" "}
                <span>
                  <img src={require(`../images/${icon0}.png`)} />
                </span>
                {weather0}
              </h4>
              <h4>Temperature : {temperature0}</h4>
              <h4>Wind Speed : {wind0}</h4>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div className="container-fluid mt-2">
        <div className="row">
          <div className="col-12">
            <h4 className="text-black mb-3 text-capitalize">
              Top Losers(Current trends)
            </h4>
            <table className="table table-striped align-items-center mb-0">
              <thead>
                <tr className="text-center">
                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    Date
                  </th>
                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    Weather
                  </th>
                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                    Temperature
                  </th>
                  <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    Wind Speed
                  </th>
                </tr>
              </thead>
              <tbody>{list}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
