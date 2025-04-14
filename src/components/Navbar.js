import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Navbar(props) {
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        document.title = `iNotebook - ${location.pathname === "/" ? "Home" : location.pathname === "/about" ? "About" : location.pathname === "/login" ? "Login" :location.pathname === "/signup" ? "Signup" : ""}`
    }, [location.pathname])
    return (
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <b><a className="navbar-brand" href="/iNotebook">iNotebook</a></b>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? "active text-uppercase" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active text-uppercase" : ""}`} to="/about">About</Link>
                        </li>
                    </ul>
                    <div className='d-flex ms-auto'>
                        <Link to='/login' className={`btn btn-primary m-1 ${location.pathname === '/login' || localStorage.getItem('token') ? "d-none" : "d-block"}`}>Login</Link>
                        <Link to='/signup' className={`btn btn-primary m-1 ${location.pathname === '/signup' || localStorage.getItem('token') ? "d-none" : "d-block"}`}>Signup</Link>
                        <button className={`btn btn-danger m-1 ${localStorage.getItem('token') ? "d-block" : "d-none"}`} onClick={()=>{
                            localStorage.removeItem('token')
                            props.showAlert('You are Logged out.',"success")
                            setTimeout(()=>{
                                navigate('/login');
                            },1000)
                        }}>Log Out</button>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Navbar
