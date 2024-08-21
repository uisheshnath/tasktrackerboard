import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
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
                                    <p className="card-text">Don't have an account? Really?<NavLink to={'/signup'}>Sign Up</NavLink></p>
                                    <form action="">
                                        <div className="form-floating mb-3">
                                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                            <label for="floatingInput">Email address</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                            <label for="floatingPassword">Password</label>
                                        </div>
                                        <div className="mb-3">
                                            <div className="d-flex justify-content-between">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="disabledFieldsetCheck" />
                                                    <label className="form-check-label" for="disabledFieldsetCheck">
                                                        Keep me logged in
                                                    </label>
                                                </div>
                                                <p className="card-text"><NavLink>Forgot Password</NavLink></p>
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
        </>
    )
}

export default Login