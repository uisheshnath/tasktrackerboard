import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
let myurls = process.env.REACT_APP_COMMONURL
// import Cookies from "js-cookie"

const Login = () => {
    const navigate = useNavigate();
    const [emp_email, setEmail] = useState()
    const [emp_password, setPassword] = useState()
    const [terms, setTerms] = useState(null)
    const [showToast, setShowToast] = useState(false);

    axios.defaults.withCredentials = true;

    // console.log(terms, myurls)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (terms) {
            axios.post(`${myurls}/api/login`, { emp_email, emp_password })
                .then((res) => {
                    if (res.data.Status === "Success") {
                        setShowToast(true);
                        setTimeout(() => { navigate('/') }, 1500);

                    } else {
                        console.log(res.data.Error);
                    }
                })
                .catch((err) => { console.log(err) })
        }

    }


    return (
        <>
            <div className="container-fluid bg-primary">
                <div className="container">
                    <div className="row d-flex vh-100 align-items-center">
                        <div className="col-md-6 text-light">
                            <img src={process.env.PUBLIC_URL + 'assets/img/logoicon.png'} alt="Icon" className='mb-4' style={{ width: '50px' }} />
                            <h2 className="card-title mb-2 fw-semibold">Task Tracker Board</h2>
                            <h4 className="card-title mb-3 fw-lighter lh-base">Making the daily tasks and project updates maintaining easy and properly trackable</h4>
                            {/* <p className="card-text fw-light">This is designed for the leads to update and track their team's daily tasks efficiently. This tool allows easy task assignment, deadline setting, and real-time progress updates, ensuring clear communication and improved team productivity.</p> */}
                        </div>
                        <div className="col-md-6">
                            <div className="card rounded-5">
                                <div className="card-body p-12">
                                    <h2 className="card-title">Sign In</h2>
                                    <p className="card-text">Don't have an account? <NavLink to={'/signup'}>Sign Up</NavLink></p>
                                    <form action="" onSubmit={handleSubmit}>
                                        <div className="form-floating mb-3">
                                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} required />
                                            <label htmlFor="floatingInput">Email address</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                                            <label htmlFor="floatingPassword">Password</label>
                                        </div>
                                        <div className="mb-3">
                                            <div className="d-flex justify-content-between">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="disabledFieldsetCheck" checked={terms} onChange={(e) => setTerms(e.target.value)} />
                                                    <label className="form-check-label" htmlFor="disabledFieldsetCheck">
                                                        Keep me logged in
                                                    </label>
                                                </div>
                                                <p className="card-text"><NavLink to={'/forgetPassword'}>Forgot Password</NavLink></p>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary w-100 py-2">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`toast-container top-0 end-0 p-3 `} style={{ position: 'fixed', zIndex: 1050 }}>
                <div className={`toast ${showToast ? 'show' : 'hide'} fade`} role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-body text-bg-success">
                        <div className="d-flex gap-4">
                            <div className="d-flex flex-grow-1 align-items-center">
                                <span className="fw-semibold">Logged In successfully!</span>
                                <button type="button" className="btn-close btn-close-sm btn-close-black ms-auto" aria-label="Close" onClick={() => setShowToast(false)}></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login