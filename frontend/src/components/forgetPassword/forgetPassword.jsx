import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const ForgotPassword = () => {
    const [formData, setFormData] = useState({ email: '' });
    const [errors, setErrors] = useState({});

    const handleEmailBlur = () => {
        const emailRegex = /^[\w\.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if (!emailRegex.test(formData.email)) {
            setErrors(prevErrors => ({
                ...prevErrors,
                email: "Please enter a valid email address."
            }));
        } else {
            setErrors(prevErrors => ({
                ...prevErrors,
                email: ""
            }));
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <>
            <div className="container-fluid bg-primary">
                <div className="container">
                    <div className="row d-flex vh-100 align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 text-light">
                            <img src={process.env.PUBLIC_URL + 'assets/img/logoicon.png'} alt="Icon" className='mb-4' style={{ width: '50px' }} />
                            <h2 className="card-title mb-2 fw-semibold text-start">Task Tracker Board</h2>
                            <h4 className="card-title mb-3 fw-lighter lh-base">Making the daily tasks and project updates maintaining easy and properly trackable</h4>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="card rounded-5">
                                <div className="card-body p-12">
                                    <h2 className="card-title">Forgot Password</h2>
                                    <p className="card-text">Remember your password? <NavLink to={'/'}>Sign In</NavLink></p>
                                    <form action="">
                                        <div className="form-floating mb-3">
                                            <input 
                                                type="email" 
                                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                                id="floatingInput" 
                                                placeholder="name@example.com" 
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                onBlur={handleEmailBlur} 
                                            />
                                            <label htmlFor="floatingInput">Email address</label>
                                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
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
    );
}

export default ForgotPassword;
