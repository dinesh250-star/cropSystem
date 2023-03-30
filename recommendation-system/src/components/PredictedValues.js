import React from 'react'
import '../css/nucleo-icons.css'
import '../css/nucleo-svg.css'
import '../css/bootstrap.css'
import '../css/material-dashboard.css'
import '../css/predictedvalues.css'
import loss from '../images/loss-icon.png'
import gain from '../images/gain-icon.png'

function PredictedValues(props) {
    let {sixmonth} = props; 
    return (
        <div className='value-body'>
            <div className="container-fluid py-4">
                <div className="row">
                    <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                        <div className="card" style={{backgroundColor:'#FFF5E4'}}>
                            <div className="card-header p-3 pt-2" style={{backgroundColor:'#FFF5E4'}}>
                                <div
                                    className="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 icon-adjust position-absolute">
                                    <i className="material-icons opacity-10 ">online_prediction</i>
                                </div>
                                <div className="text-end pt-1">
                                    <p className="text-sm mb-0 text-capitalize">predictions</p>
                                    <h4 className="mb-0">{sixmonth[0][0]}</h4>
                                </div>
                            </div>
                            <hr className="dark horizontal my-0"></hr>
                            <div className="row">
                                <div className="card-footer p-2" >
                                    <p className="mb-0"><span className="text-success text-sm font-weight-bolder" >{sixmonth[0][1]} :</span>&nbsp;&nbsp;₹{sixmonth[0][2]}&nbsp;&nbsp;&nbsp;&nbsp;<span className="valign-wrapper right" >{sixmonth[0][3]}<img src={gain} height="25" width="25" /></span></p>
                                </div>
                                <div className="card-footer p-2"  >
                                    <p className="mb-0"><span className="text-success text-sm font-weight-bolder" >{sixmonth[0][4]} :</span>&nbsp;&nbsp;{sixmonth[0][5]}&nbsp;&nbsp;&nbsp;&nbsp;<span className="valign-wrapper right" >{sixmonth[0][6]}<img
                                        src={loss} height="25" width="25" /></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                        <div class="card" style={{backgroundColor:''}}>
                            <div class="card-header p-3 pt-2" style={{backgroundColor:''}}>
                                <div
                                    class="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute icon-adjust">
                                    <i class="material-icons opacity-10">online_prediction</i>
                                </div>
                                <div class="text-end pt-1">
                                    <p class="text-sm mb-0 text-capitalize">predictions</p>
                                    <h4 class="mb-0">{sixmonth[1][0]}</h4>
                                </div>
                            </div>
                            <hr class="dark horizontal my-0" />
                            <div className="row">
                                <div className="card-footer p-2" >
                                    <p className="mb-0"><span className="text-success text-sm font-weight-bolder" >{sixmonth[1][1]} :</span>&nbsp;&nbsp;₹{sixmonth[1][2]}&nbsp;&nbsp;&nbsp;&nbsp;<span className="valign-wrapper right" >{sixmonth[1][3]}<img src={gain} height="25" width="25" /></span></p>
                                </div>
                                <div className="card-footer p-2"  >
                                    <p className="mb-0"><span className="text-success text-sm font-weight-bolder" >{sixmonth[1][4]} :</span>&nbsp;&nbsp;{sixmonth[1][5]}&nbsp;&nbsp;&nbsp;&nbsp;<span className="valign-wrapper right" >{sixmonth[1][6]}<img
                                        src={loss} height="25" width="25" /></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                        <div class="card" style={{backgroundColor:'#FFF5E4'}}>
                            <div class="card-header p-3 pt-2" style={{backgroundColor:'#FFF5E4'}}>
                                <div
                                    class="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute icon-adjust">
                                    <i class="material-icons opacity-10">online_prediction</i>
                                </div>
                                <div class="text-end pt-1">
                                    <p class="text-sm mb-0 text-capitalize">predictions</p>
                                    <h4 class="mb-0">{sixmonth[2][0]}</h4>
                                </div>
                            </div>
                            <hr class="dark horizontal my-0" />
                            <div className="row">
                                <div className="card-footer p-2" >
                                    <p className="mb-0"><span className="text-success text-sm font-weight-bolder" >{sixmonth[2][1]} :</span>&nbsp;&nbsp;₹{sixmonth[2][2]}&nbsp;&nbsp;&nbsp;&nbsp;<span className="valign-wrapper right" >{sixmonth[2][3]}<img src={gain} height="25" width="25" /></span></p>
                                </div>
                                <div className="card-footer p-2"  >
                                    <p className="mb-0"><span className="text-success text-sm font-weight-bolder" >{sixmonth[2][4]} :</span>&nbsp;&nbsp;{sixmonth[2][5]}&nbsp;&nbsp;&nbsp;&nbsp;<span className="valign-wrapper right" >{sixmonth[2][6]}<img
                                        src={loss} height="25" width="25" /></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                        <div class="card" style={{backgroundColor:''}}>
                            <div class="card-header p-3 pt-2" style={{backgroundColor:''}}>
                                <div
                                    class="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute icon-adjust">
                                    <i class="material-icons opacity-10">online_prediction</i>
                                </div>
                                <div class="text-end pt-1">
                                    <p class="text-sm mb-0 text-capitalize">predictions</p>
                                    <h4 class="mb-0">{sixmonth[3][0]}</h4>
                                </div>
                            </div>
                            <hr class="dark horizontal my-0" />
                            <div className="row">
                                <div className="card-footer p-2" >
                                    <p className="mb-0"><span className="text-success text-sm font-weight-bolder" >{sixmonth[3][1]} :</span>&nbsp;&nbsp;₹{sixmonth[3][2]}&nbsp;&nbsp;&nbsp;&nbsp;<span className="valign-wrapper right" >{sixmonth[3][3]}<img src={gain} height="25" width="25" /></span></p>
                                </div>
                                <div className="card-footer p-2"  >
                                    <p className="mb-0"><span className="text-success text-sm font-weight-bolder" >{sixmonth[3][4]} :</span>&nbsp;&nbsp;{sixmonth[3][5]}&nbsp;&nbsp;&nbsp;&nbsp;<span className="valign-wrapper right" >{sixmonth[3][6]}<img
                                        src={loss} height="25" width="25" /></span></p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default PredictedValues