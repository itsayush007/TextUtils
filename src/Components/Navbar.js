import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg bg-${(props.mode === 'light') ? 'secondary' : 'dark'} fw-bold`}>
                <div className="container-fluid">

                    <Link className={`navbar-brand nav-link active text-${(props.mode === 'light') ? 'light' : 'light'}`} aria-current="page"  to="/">Text-Utils</Link>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link active text-${(props.mode === 'light') ? 'light' : 'light'}`} aria-current="page" to="/home">{props.home}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link active text-${(props.mode === 'light') ? 'light' : 'light'}`} aria-current="page" to="/about">{props.about}</Link>
                            </li>
                        </ul>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                            <label className={`form-check-label text-${(props.mode === "light") ? "light" : "light"}`} htmlFor="flexSwitchCheckDefault">{props.modeState}</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
