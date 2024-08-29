import React, { useState } from 'react';
import './projects.css';
import { NavLink } from 'react-router-dom';
import ProjectDetails from '../projectdetails/ProjectDetails';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';

const Projects = () => {
    const [upcomingRelease, setUpcomingRelease] = useState(null);
    const [currentRelease, setCurrentRelease] = useState(null);
    const [closedRelease, setClosedRelease] = useState(null);
    const [assignees, setAssignees] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
    const suggestions = ["Ben", "Gwen", "Grandpa", "Omnitrix"]; 

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        if (value) {
            const filtered = suggestions.filter(suggestion =>
                suggestion.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredSuggestions(filtered);
            setActiveSuggestionIndex(0); 
        } else {
            setFilteredSuggestions([]);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (filteredSuggestions.length > 0) {
                addPill(filteredSuggestions[activeSuggestionIndex]);
            } else if (inputValue) {
                addPill(inputValue);
            }
            setInputValue('');
            setFilteredSuggestions([]);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setActiveSuggestionIndex(prevIndex =>
                prevIndex > 0 ? prevIndex - 1 : filteredSuggestions.length - 1
            );
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            setActiveSuggestionIndex(prevIndex =>
                prevIndex < filteredSuggestions.length - 1 ? prevIndex + 1 : 0
            );
        }
    };

    const addPill = (value) => {
        if (!assignees.includes(value)) {
            setAssignees([...assignees, value]);
        }
        setFilteredSuggestions([]);
    };

    const removePill = (value) => {
        setAssignees(assignees.filter(assignee => assignee !== value));
    };

    return (
        <>
            <div className="col-md-7">
                <div className="d-flex gap-6 projects-slide">
                    {
                        Array.from(Array(5)).map((item, index) => {
                            return (
                                <div className="col-md-3" key={index}>
                                    <div className="card border-0 project-card rounded-4">
                                        <div className="card-header d-flex align-items-center px-3">
                                            <span className="avatar text-bg-primary avatar-lg fs-5">
                                                <img className="avatar" src="https://fastbootstrap.com/images/avatar/3.jpg" alt="Avatar" />
                                            </span>
                                            <div className="ms-3">
                                                <h6 className="mb-0 fs-sm">Zlaata</h6>
                                                <span className="text-muted fs-sm">Sep 14, 2022</span>
                                            </div>
                                            <div className="dropstart ms-auto">
                                                <button className="btn text-muted" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="fa fa-ellipsis-v"></i>
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <a className="dropdown-item" href="#"><i className="fa fa-pencil me-3"></i>Edit</a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#"><i className="fa fa-trash me-3"></i>Delete</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="card-body p-3">
                                            <div className='mb-3'>
                                                <h6 className="mb-0 fs-sm projects-update-heading text-danger">Upcoming Release</h6>
                                                <p className="card-text fs-sm">
                                                    September 14, 2022
                                                </p>
                                            </div>
                                            <div className='mb-3'>
                                                <h6 className="mb-0 fs-sm projects-update-heading text-success">Last Release</h6>
                                                <p className="card-text fs-sm">
                                                    September 14, 2022
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card-footer d-flex px-3 justify-content-between align-items-center">
                                            <div className="avatar-stack">
                                                <span className="avatar">+1</span>
                                                <img className="avatar" src="https://fastbootstrap.com/images/avatar/1.jpg" alt="Avatar" />
                                                <img className="avatar" src="https://fastbootstrap.com/images/avatar/2.jpg" alt="Avatar" />
                                                <img className="avatar" src="https://fastbootstrap.com/images/avatar/4.jpg" alt="Avatar" />
                                                <img className="avatar" src="https://fastbootstrap.com/images/avatar/5.jpg" alt="Avatar" />
                                            </div>
                                            <ProjectDetails />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="col-md-2">
                <div className="col-md-12 add-project-card h-100">
                    <NavLink>
                        <div className="card border-0 project-card rounded-4 p-12 text-center my-auto h-100 justify-content-center cursor-pointer">
                            <p>Add Projects</p>
                            <a data-bs-toggle="modal" data-bs-target="#addProjects" aria-current="page" className="project-area-add active" href="#">
                                <i className="fa fa-plus-circle fs-1"></i>
                            </a>
                            <div className="modal fade" id="addProjects" tabIndex="-1" aria-labelledby="addProjectLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="addTodoLabel">Add New Project</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <form>
                                                <div id="projectInfoSection">
                                                    <h5 className="text-start">Project Information</h5>
                                                    <div className="row mb-3">
                                                        <label htmlFor="projectName" className="text-start col-12 col-md-4 col-form-label">Project Name</label>
                                                        <div className="col-12 col-md-8">
                                                            <input type="text" className="form-control" id="projectName" placeholder="Enter Project Name" />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label htmlFor="projectInfo" className="text-start col-12 col-md-4 col-form-label">Project Information</label>
                                                        <div className="col-12 col-md-8">
                                                            <textarea className="form-control" id="projectInfo" rows="3" placeholder="Enter project information"></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label htmlFor="businessType" className="text-start col-12 col-md-4 col-form-label">Business Type</label>
                                                        <div className="col-12 col-md-8">
                                                            <input type="text" className="form-control" id="businessType" placeholder="Enter Business Type" />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label htmlFor="websiteLink" className="text-start col-12 col-md-4 col-form-label">Website Link</label>
                                                        <div className="col-12 col-md-8">
                                                            <input type="url" className="form-control" id="websiteLink" placeholder="Enter Website Link" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div id="releasesSection" className="mt-4">
                                                    <h5 className="text-start">Releases</h5>
                                                    <div className="row">
                                                        <div className="col-12 col-md-4 mb-3">
                                                            <div className="d-flex flex-column position-relative">
                                                                <label htmlFor="upcomingRelease" className="form-label">Upcoming Release</label>
                                                                <DatePicker
                                                                    selected={upcomingRelease}
                                                                    onChange={(date) => setUpcomingRelease(date)}
                                                                    className="form-control pe-5"
                                                                    id="upcomingRelease"
                                                                    dateFormat="yyyy-MM-dd"
                                                                    placeholderText='Pick Date'
                                                                />
                                                                <FaCalendarAlt className="position-absolute" style={{ right: '10px', top: '55%', opacity: '0.5' }} /> { }
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-md-4 mb-3">
                                                            <div className="d-flex flex-column position-relative">
                                                                <label htmlFor="currentRelease" className="form-label">Current Release</label>
                                                                <DatePicker
                                                                    selected={currentRelease}
                                                                    onChange={(date) => setCurrentRelease(date)}
                                                                    className="form-control pe-5"
                                                                    id="currentRelease"
                                                                    dateFormat="yyyy-MM-dd"
                                                                    placeholderText='Pick Date'
                                                                />
                                                                <FaCalendarAlt className="position-absolute" style={{ right: '10px', top: '55%', opacity: '0.5' }} /> { }
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-md-4 mb-3">
                                                            <div className="d-flex flex-column position-relative">
                                                                <label htmlFor="closedRelease" className="form-label">Closed Release</label>
                                                                <DatePicker
                                                                    selected={closedRelease}
                                                                    onChange={(date) => setClosedRelease(date)}
                                                                    className="form-control pe-5"
                                                                    id="closedRelease"
                                                                    dateFormat="yyyy-MM-dd"
                                                                    placeholderText='Pick Date'
                                                                />
                                                                <FaCalendarAlt className="position-absolute" style={{ right: '10px', top: '55%', opacity: '0.5' }} /> { }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="assignee_section mt-2">
                                                    <h5 className="text-start">Assignee</h5>
                                                    <div className="position-relative">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="pillInput"
                                                            placeholder="Enter Assignee"
                                                            value={inputValue}
                                                            onChange={handleInputChange}
                                                            onKeyPress={handleKeyPress}
                                                        />
                                                        {filteredSuggestions.length > 0 && (
                                                            <ul className="dropdown-menu show">
                                                                {filteredSuggestions.map((suggestion, index) => (
                                                                    <li key={index} onClick={() => addPill(suggestion)} className="dropdown-item">
                                                                        {suggestion}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </div>
                                                    <div className="pill-container mt-2" id="pillContainer">
                                                        {assignees.map((assignee, index) => (
                                                            <div className="pill" key={index}>
                                                                {assignee}
                                                                <span className="close-icon" onClick={() => removePill(assignee)}>
                                                                    &times;
                                                                </span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div id="importantLinksSection" className="mt-4">
                                                    <h5 className="text-start">Important Links</h5>

                                                    <div className="mb-3">
                                                        <h6 className="text-start">Development Server</h6>
                                                        <div className="row mb-2">
                                                            <label htmlFor="section1Link1" className="text-start col-12 col-md-4 col-form-label">Dev</label>
                                                            <div className="col-12 col-md-8">
                                                                <input type="url" className="form-control" id="section1Link1" placeholder="Enter Dev Link " />
                                                            </div>
                                                        </div>
                                                        <div className="row mb-2">
                                                            <label htmlFor="section1Link2" className="text-start col-12 col-md-4 col-form-label">Dev-Admin</label>
                                                            <div className="col-12 col-md-8">
                                                                <input type="url" className="form-control" id="section1Link2" placeholder="Enter  Dev-Admin Link " />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="mb-3">
                                                        <h6 className="text-start">Testing Server</h6>
                                                        <div className="row mb-2">
                                                            <label htmlFor="section2Link1" className="text-start col-12 col-md-4 col-form-label">Teesting Server</label>
                                                            <div className="col-12 col-md-8">
                                                                <input type="url" className="form-control" id="section2Link1" placeholder="Enter V7 Link" />
                                                            </div>
                                                        </div>
                                                        <div className="row mb-2">
                                                            <label htmlFor="section2Link2" className="text-start col-12 col-md-4 col-form-label">V7 Admin</label>
                                                            <div className="col-12 col-md-8">
                                                                <input type="url" className="form-control" id="section2Link2" placeholder="Enter V7 Admin Link" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="mb-3">
                                                        <h6 className="text-start">Staging Server</h6>
                                                        <div className="row mb-2">
                                                            <label htmlFor="section2Link1" className="text-start col-12 col-md-4 col-form-label">Staging</label>
                                                            <div className="col-12 col-md-8">
                                                                <input type="url" className="form-control" id="section2Link1" placeholder="Enter Staging Link" />
                                                            </div>
                                                        </div>
                                                        <div className="row mb-2">
                                                            <label htmlFor="section2Link2" className="text-start col-12 col-md-4 col-form-label">Staging Admin</label>
                                                            <div className="col-12 col-md-8">
                                                                <input type="url" className="form-control" id="section2Link2" placeholder="Enter Staging Admin Link" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="mb-3">
                                                        <h6 className="text-start">Production Server</h6>
                                                        <div className="row mb-2">
                                                            <label htmlFor="section2Link1" className="text-start col-12 col-md-4 col-form-label">Production</label>
                                                            <div className="col-12 col-md-8">
                                                                <input type="url" className="form-control" id="section2Link1" placeholder="Enter Production Link" />
                                                            </div>
                                                        </div>
                                                        <div className="row mb-2">
                                                            <label htmlFor="section2Link2" className="text-start col-12 col-md-4 col-form-label">Production Admin</label>
                                                            <div className="col-12 col-md-8">
                                                                <input type="url" className="form-control" id="section2Link2" placeholder="Enter Production Admin  Link " />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default Projects;
