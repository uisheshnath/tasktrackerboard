import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Signup = () => {

    // Initialize state for form fields
    const [formData, setFormData] = useState({
        empName: '',
        empId: '',
        reportingTo: '',
        reportingToId: '',
        designation: '',
        department: '',
        email: '',
        password: '',
        confirmPassword: '',
        terms: false,
    });
    // Handle change events for form fields
    const handleChange = (e) => {
        const { id, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [id]: type === 'checkbox' ? checked : value
        }));
    };

    // Validate form fields
    const validateForm = () => {
        if (formData.password !== formData.confirmPassword) {
            console.log('Passwords do not match');
        }
    }
    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Log or process the form data
        if(formData.password !== formData.confirmPassword){
           console.log("error")
        }
        else{
            console.log('Form Data Submitted:', formData);
        }
       
    };

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
                                    <form onSubmit={handleSubmit}>
                                        <div className="row g-md-3">
                                            <div className="col-md-6">
                                                <div className="form-floating mb-3">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="empName"
                                                        placeholder="Name"
                                                        value={formData.empName}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                    <label htmlFor="empName">Name</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-floating mb-3">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="empId"
                                                        placeholder="Emp ID"
                                                        value={formData.empId}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                    <label htmlFor="empId">Emp ID</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row g-md-3">
                                            <div className="col-md-6">
                                                <div className="form-floating mb-3">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="reportingTo"
                                                        placeholder="Reporting To"
                                                        value={formData.reportingTo}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                    <label htmlFor="reportingTo">Reporting To</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-floating mb-3">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="reportingToId"
                                                        placeholder="Reporting To ID"
                                                        value={formData.reportingToId}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                    <label htmlFor="reportingToId">Reporting To ID</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row g-md-3">
                                            <div className="col-md-6">
                                                <div className="form-floating mb-3">
                                                    <select
                                                        className="form-select"
                                                        id="designation"
                                                        aria-label="Designation"
                                                        value={formData.designation}
                                                        onChange={handleChange}
                                                        required
                                                    >
                                                        <option value="">Select Designation</option>
                                                        <option value="1">Intern</option>
                                                        <option value="2">Junior</option>
                                                        <option value="3">Mid</option>
                                                        <option value="4">Senior</option>
                                                        <option value="5">TR</option>
                                                        <option value="6">Team Lead</option>
                                                        <option value="7">HOD</option>
                                                    </select>
                                                    <label htmlFor="designation">Designation</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-floating mb-3">
                                                    <select
                                                        className="form-select"
                                                        id="department"
                                                        aria-label="Department"
                                                        value={formData.department}
                                                        onChange={handleChange}
                                                        required
                                                    >
                                                        <option value="">Select Department</option>
                                                        <option value="1">Frontend</option>
                                                        <option value="2">Backend</option>
                                                        <option value="3">Testing</option>
                                                    </select>
                                                    <label htmlFor="department">Department</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row g-md-3">
                                            <div className="col-md-12">
                                                <div className="form-floating mb-3">
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="email"
                                                        placeholder="name@example.com"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                    <label htmlFor="email">Email address</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row g-md-3">
                                            <div className="col-md-6">
                                                <div className="form-floating mb-3">
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        id="password"
                                                        placeholder="Password"
                                                        value={formData.password}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                    <label htmlFor="password">Password</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-floating mb-3">
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        id="confirmPassword"
                                                        placeholder="Confirm Password"
                                                        value={formData.confirmPassword}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <div className="d-flex justify-content-between">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="terms"
                                                        checked={formData.terms}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                    <label className="form-check-label" htmlFor="terms">
                                                        By submitting this form, you agree to the <a href="#">Privacy Policy</a> and <a href="#">Terms & Conditions</a>.
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