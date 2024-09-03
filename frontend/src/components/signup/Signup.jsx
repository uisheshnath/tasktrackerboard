import React, { useState, useEffect } from 'react';
import axios from "axios"
import { NavLink, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let myurl = process.env.REACT_APP_COMMONURL

const Signup = () => {

    // Initialize state for form fields
    const navigate = useNavigate();
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

    let emp_name = formData.empName
    let emp_id = formData.empId
    let emp_email = formData.email
    let emp_password = formData.password
    let reporting_to = formData.reportingTo
    let reporting_to_id = formData.reportingToId
    let designation = formData.designation
    let department = formData.department


    // Handle change events for form fields
    const [errors, setErrors] = useState({});
    const [showToast, setShowToast] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleInputChange = (e) => {
        const { id, value, type, checked } = e.target;

        if (id === "empId" || id === "reportingToId") {
            if (value.length > 7) {
                return;
            } else if (!/^[a-zA-Z0-9-]*$/.test(value)) {
                return;
            }
        }

        if (id === "empName" || id === "reportingTo") {
            if (value.length > 50) return;
            const sanitizedValue = value.replace(/\s\s+/g, ' ');
            setFormData(prevData => ({ ...prevData, [id]: sanitizedValue }));
        } else {
            setFormData(prevData => ({
                ...prevData,
                [id]: type === 'checkbox' ? checked : value
            }));
        }

        if (id === 'confirmPassword' && value === '') {
            setErrors(prevErrors => ({
                ...prevErrors,
                confirmPassword: ''
            }));
        }

        if (id === 'email') {
            setErrors(prevErrors => ({
                ...prevErrors,
                email: ''
            }));
        }
    };



    const handleNameKeyDown = (e) => {
        const allowedKeys = /^[a-zA-Z\s]*$/;
        if (!allowedKeys.test(e.key) || (e.key === ' ' && e.target.value.slice(-1) === ' ')) {
            e.preventDefault();
        }
    };

    const handleEmailBlur = () => {
        const emailRegex = /^[\w]*@*[a-z]*\.*[\w]{5,}(\.)*(com)*(@gmail\.com)?$/;
        if (!emailRegex.test(formData.email)) {
            setErrors(prevErrors => ({
                ...prevErrors,
                email: "Please enter a valid email address."
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let formIsValid = true;
        const newErrors = {};

        if (formData.password !== formData.confirmPassword) {
            formIsValid = false;
            newErrors.confirmPassword = "Passwords do not match.";
        }

        if (!formData.email || errors.email) {
            formIsValid = false;
            newErrors.email = "Please enter a valid email address.";
        }

        if (!formIsValid) {
            setErrors(newErrors);
            return;
        }

        setErrors({});
        console.log('Form Data Submitted:', formData);

        if (formData.password !== formData.confirmPassword) {
            console.log("Password and Confirm Password should")
        }
        else {
            axios.post(`${myurl}/api/register`, { emp_name, emp_id, emp_email, emp_password, reporting_to, reporting_to_id, designation, department })
                .then((response) => {
                    console.log(response.data.Error);
                    if (response.data.Status === 'Success') {
                        toast.success('Profile created successfully!', {
                            position: "top-right",
                            autoClose: 1500,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            style: { backgroundColor: '#28a745', color: '#000' },
                            progressStyle: { backgroundColor: '#ffc107' }
                        });
                        setTimeout(() => {
                            navigate("/login");
                        }, 1500);
                    } else {
                        toast.error(response.data.Error, {
                            position: "top-right",
                            autoClose: 1500,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            style: { backgroundColor: '#dc3545', color: '#fff' },
                        });
                    }
                })
                .catch((error) => {
                    console.error(error);
                    toast.error("Registration Failed", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        style: { backgroundColor: '#dc3545', color: '#fff' },
                    });
                });

        }

    };
    useEffect(() => {
        if (showToast) {
            const interval = setInterval(() => {
                setProgress((prevProgress) => prevProgress - 1);
            }, 30);

            setTimeout(() => {
                setShowToast(false);
                clearInterval(interval);
            }, 3000);
        }
    }, [showToast]);

    // const notifyWarning = (e) => {
    //     e.preventDefault();

    //     toast.warn('This is a warning!', {
    //         position: "top-right",
    //         autoClose: 1500,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         style: {
    //             backgroundColor: 'orange',
    //             color: 'black'
    //         },
    //         progressStyle: {
    //             backgroundColor: 'yellow'
    //         }
    //     });

    // };


    return (
        <>
            <div className="container-fluid bg-primary">
                <div className="container">
                    <div className="row d-flex vh-100 align-items-center">
                        <div className="col-md-6 text-light">
                            <img src={process.env.PUBLIC_URL + 'assets/img/logoicon.png'} alt="Icon" className='mb-4' style={{ width: '50px' }} />
                            <h2 className="card-title mb-2 fw-semibold">Task Tracker Board</h2>
                            <h4 className="card-title mb-3 fw-lighter lh-base">Making the daily tasks and project updates maintaining easy and properly trackable</h4>
                        </div>
                        <div className="col-md-6">
                            <div className="card rounded-5">
                                <div className="card-body p-12">
                                    <h2 className="card-title">Sign Up</h2>
                                    <p className="card-text">Already have an account? <NavLink to={'/login'}>Sign In</NavLink>
                                        {/* <a href="/" onClick={notifyWarning}>404</a> */}
                                    </p>
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
                                                        onChange={handleInputChange}
                                                        onKeyDown={handleNameKeyDown}
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
                                                        onChange={handleInputChange}
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
                                                        onChange={handleInputChange}
                                                        onKeyDown={handleNameKeyDown}
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
                                                        onChange={handleInputChange}
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
                                                        onChange={handleInputChange}
                                                        required
                                                    >
                                                        <option value="">Select Designation</option>
                                                        <option value="Intern">Intern</option>
                                                        <option value="Junior">Junior</option>
                                                        <option value="Mid">Mid</option>
                                                        <option value="Senior">Senior</option>
                                                        <option value="TR">TR</option>
                                                        <option value="Team Lead">Team Lead</option>
                                                        <option value="HOD">HOD</option>
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
                                                        onChange={handleInputChange}
                                                        required
                                                    >
                                                        <option value="">Select Department</option>
                                                        <option value="Frontend">Frontend</option>
                                                        <option value="Backend">Backend</option>
                                                        <option value="Testing">Testing</option>
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
                                                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                                        id="email"
                                                        placeholder="name@example.com"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        onBlur={handleEmailBlur}
                                                        required
                                                    />
                                                    <label htmlFor="email">Email address</label>
                                                    {errors.email && (
                                                        <div className="invalid-feedback">
                                                            {errors.email}
                                                        </div>
                                                    )}
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
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                    <label htmlFor="password">Password</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-floating mb-3">
                                                    <input
                                                        type="password"
                                                        className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                                                        id="confirmPassword"
                                                        placeholder="Confirm Password"
                                                        value={formData.confirmPassword}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                                    {errors.confirmPassword && (
                                                        <div className="invalid-feedback">
                                                            {errors.confirmPassword}
                                                        </div>
                                                    )}
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
                                                        onChange={handleInputChange}
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

            {/* <button onClick={notifyWarning}>Show Warning Toast</button> */}
            <ToastContainer />

            {/* <div className={`toast-container top-0 end-0 p-3`} style={{ position: 'fixed', zIndex: 1050 }}>
                <div className={`toast ${showToast ? 'show' : 'hide'} fade`} role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-body" style={{ backgroundColor: '#28a745', color: '#000' }}>
                        <div className="d-flex gap-4">
                            <div className="d-flex flex-grow-1 align-items-center">
                                <span className="fw-semibold">Profile created successfully!</span>
                                <button type="button" className="btn-close btn-close-sm ms-auto" aria-label="Close" onClick={() => setShowToast(false)}></button>
                            </div>
                        </div>
                        <div className="progress mt-2" style={{ height: '5px' }}>
                            <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: `${progress}%`, backgroundColor: '#ffc107' }}
                                aria-valuenow={progress}
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                        </div>
                    </div>
                </div>
            </div> */}

        </>
    );
};

export default Signup;
