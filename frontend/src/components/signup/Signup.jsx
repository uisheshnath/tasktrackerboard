import React from 'react'
import { NavLink } from 'react-router-dom'

const Signup = () => {
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
                                    <h2 className="card-title">Sign Up</h2>
                                    <p className="card-text">Already have an account? <NavLink to={'/login'}>Sign In</NavLink></p>
                                    <form action="">
                                        <div className="row g-md-3">
                                            <div className="col-md-6">
                                                <div className="form-floating mb-3">
                                                    <input type="text" className="form-control" id="floatingInput" placeholder="Name" />
                                                    <label for="floatingInput">Name</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-floating mb-3">
                                                    <input type="text" className="form-control" id="floatingInput" placeholder="Emp ID" />
                                                    <label for="floatingInput">Emp ID</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row g-md-3">
                                            <div className="col-md-6">
                                                <div className="form-floating mb-3">
                                                    <input type="text" className="form-control" id="floatingInput" placeholder="Reporting To" />
                                                    <label for="floatingInput">Reporting To</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-floating mb-3">
                                                    <input type="text" className="form-control" id="floatingInput" placeholder="Reporting To ID" />
                                                    <label for="floatingInput">Reporting To ID</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row g-md-3">
                                            <div className="col-md-6">
                                                <div className="form-floating mb-3">
                                                    <input type="email" className="form-control" id="floatingInput" placeholder="Designation" />
                                                    <label for="floatingInput">Designation</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-floating mb-3">
                                                    <input type="text" className="form-control" id="floatingInput" placeholder="Department" />
                                                    <label for="floatingInput">Department</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row g-md-3">
                                            <div className="col-md-12">
                                                <div className="form-floating mb-3">
                                                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                                    <label for="floatingInput">Email address</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row g-md-3">
                                            <div className="col-md-6">
                                                <div className="form-floating mb-3">
                                                    <input type="password" className="form-control" id="floatingInput" placeholder="Password" />
                                                    <label for="floatingInput">Password</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-floating mb-3">
                                                    <input type="password" className="form-control" id="floatingInput" placeholder="Confirm Password" />
                                                    <label for="floatingInput">Confirm Password</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <div className="d-flex justify-content-between">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="disabledFieldsetCheck" />
                                                    <label className="form-check-label" for="disabledFieldsetCheck">
                                                        By submiting this form, you agree to the <NavLink>Privacy Policy</NavLink> and <NavLink>Terms & Conditions</NavLink>
                                                    </label>
                                                </div>
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

export default Signup