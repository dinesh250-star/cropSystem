import React from 'react'
import '../css/nucleo-icons.css'
import '../css/nucleo-svg.css'
import '../css/bootstrap.css'
import '../css/material-dashboard.css'
import '../css/predictedvalues.css'
import gain from '../images/gain-icon.png'

function Gainers(props) {
    const {obj} = props

    console.log(obj[0][0]);


    const list = obj.map((element) => {
        return (
            <tr>
                <td>
                    <div className="d-flex px-2 py-1">
                        <div>
                            <i className="material-icons opacity-10">grass</i>
                        </div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="d-flex flex-column justify-content-center">
                            <h5 className="mb-0 text-sm">{element[0]}</h5>
                        </div>
                    </div>
                </td>
                <td>
                    <p className="text-xs font-weight-bold mb-0">₹ {element[1]}</p>
                </td>
                <td className="align-middle text-center text-sm">
                    <h6 className="mb-0 text-sm">{element[2]}% <img
                        src={gain} height="25" width="25" /></h6>
                </td>
            </tr>
        );
    })


    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <h4 className='text-black mb-3 text-capitalize'>Top Gainers (Current trends)</h4>
                    <table className='table table-striped align-items-center'>
                        <thead>
                            <tr>
                                <th
                                    className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                    Crop Name</th>
                                <th
                                    className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                    Price (per Qtl.)</th>
                                <th
                                    className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                    Change</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                list
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Gainers