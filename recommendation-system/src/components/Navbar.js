import React from 'react'
import '../css/bootstrap.css'
import '../css/navbar.css'


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg" style={{backgroundColor:'#FADA9D'}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">🏘️ Home</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="/feedback">📜 Feedback</a>
                    </div>
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="/fertiliser">🧪 Fertiliser</a>
                    </div>
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="/weather">🌦️ Weather</a>
                    </div>
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="/price">🏷 Price</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar