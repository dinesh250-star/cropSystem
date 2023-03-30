import React, { useEffect } from 'react'
import Navbar from './Navbar'
import axios from '../django-ML-API/axios.js';
import requests from '../django-ML-API/requests';
import PredictedValues from './PredictedValues';
import '../css/nucleo-icons.css'
import '../css/nucleo-svg.css'
import '../css/bootstrap.css'
import '../css/material-dashboard.css'
import Gainers from './Gainers';
import Losers from './Losers';
import Commodity from './Commodity';

function PricePrediction() {
  const [TopGainers, setTopGainers] = React.useState([])
  const [TopLosers, setTopLosers] = React.useState([])
  const [sixmonths, setSixmonths] = React.useState([])

  const getSixMonths = async () => {
    const response = await axios.get(requests.winnersloosersApi);
    console.log(response.data.top5)
    setTopGainers(response.data.top5)
    console.log(response.data.bottom5)
    setTopLosers(response.data.bottom5)
    console.log(response.data.sixmonths)
    setSixmonths(response.data.sixmonths)
  }

  useEffect(() => {
    getSixMonths();
  }, [])

  if (TopGainers.length === 0 || TopLosers.length === 0 || sixmonths.length === 0) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <Navbar></Navbar>
      <br></br>
      <PredictedValues sixmonth={sixmonths}></PredictedValues>
      <Gainers obj={TopGainers}></Gainers>
      <Losers losers={TopLosers}></Losers>
      <Commodity></Commodity>
    </div>
  )
}

export default PricePrediction