import React, { useContext, useState } from 'react';
import axios from "axios"
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import { FaCalendarAlt } from 'react-icons/fa';
import UserContext from '../../../usermodel/UserContext';
let myurl = process.env.REACT_APP_COMMONURL;
const AddProject = () => {
    const { user } = useContext(UserContext);
    // console.log(user?.emp_name, user?.emp_id, myurl)
    // user name
    //user id
    let username = user?.emp_name;
    let userid = user?.emp_id;
    const [pname, setPname] = useState([])
    const [pinformation, setPinformation] = useState([])
    const [manager, setManager] = useState(null)
    const [managerid, setManagerid] = useState(null)
    const [coordinator, setCoordinator] = useState(null)
    const [coordinatorid, setCoordinatorid] = useState(null)
    const [btype, setBtype] = useState([])
    const [website, setWebsite] = useState([])
    const [upcomingRelease, setUpcomingRelease] = useState([]);
    const [currentRelease, setCurrentRelease] = useState([]);
    const [closedRelease, setClosedRelease] = useState([]);
    const [assignees, setAssignees] = useState([]);
    const [dev, setDev] = useState([])
    const [devadmin, setDevadmin] = useState([])
    const [testing, setTesting] = useState([])
    const [testingadmin, setTestingadmin] = useState([])
    const [staging, setStaging] = useState([])
    const [stagingadmin, setStagingadmin] = useState([])
    const [production, setProduction] = useState([])
    const [productionadmin, setProductionadmin] = useState([])

    let values=[username,userid,pname, pinformation, manager, managerid, coordinator, coordinatorid, btype, website, upcomingRelease,
        currentRelease, closedRelease, assignees, dev, devadmin, testing, testingadmin, staging, stagingadmin, production, productionadmin]
    console.dir(values)

    // const [inputValue, setInputValue] = useState('');
    // const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    // const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
    const options = ["Ben", "Gwen", "Grandpa", "Omnitrix"];
    // const handleInputChange = (e) => {
    //     const value = e.target.value;
    //     setInputValue(value);
    //     if (value) {
    //         const filtered = options.filter(suggestion =>
    //             suggestion.toLowerCase().includes(value.toLowerCase())
    //         );
    //         setFilteredSuggestions(filtered);
    //         setActiveSuggestionIndex(0);
    //     } else {
    //         setFilteredSuggestions([]);
    //     }
    // };


    const handleSelectChange = (e) => {
        const value = e.target.value;
        if (value && !assignees.includes(value)) {
            setAssignees([...assignees, value]);
        }
    };

    const removePill = (value) => {
        setAssignees(assignees.filter(assignee => assignee !== value));
    };

    const handleSubmit = async (e) => { 
        e.preventDefault();

        // Prepare the data
        const dataValues = { 
            user_name: username,
            user_id: userid,
            project_name: pname,
            project_information: pinformation,
            manager_name: manager,
            manager_id: managerid,
            coordinator_name: coordinator,
            coordinator_id: coordinatorid,
            business_type: btype,
            website_link: website,
            upcoming_release: upcomingRelease,
            current_release: currentRelease,
            closed_release: closedRelease,
            assignee: assignees.join('\n'), // Join array elements with newline or other delimiter
            dev: dev,
            dev_admin: devadmin,
            teesting_server: testing,
            v7_admin: testingadmin,
            staging: staging,
            staging_admin: stagingadmin,
            production: production,
            production_admin: productionadmin
        };
    
        try {
            const response = await axios.post(`${myurl}/api/addproject`, dataValues, {
                headers: {
                    'Content-Type': 'application/json',
                    // Add any other headers if needed
                }
            });
            console.log('Data posted successfully:', response.data);
            // window.location.reload()
        } catch (error) {
            console.error('Error posting data:', error);
        }

    }





    // const addPill = (value) => {
    //     if (!assignees.includes(value)) {
    //         setAssignees([...assignees, value]);
    //     }
    //     setFilteredSuggestions([]);
    // };

    // const handleKeyPress = (e) => {
    //     if (e.key === 'Enter') {
    //         e.preventDefault();
    //         if (filteredSuggestions.length > 0) {
    //             addPill(filteredSuggestions[activeSuggestionIndex]);
    //         } else if (inputValue) {
    //             addPill(inputValue);
    //         }
    //         setInputValue('');
    //         setFilteredSuggestions([]);
    //     } else if (e.key === 'ArrowUp') {
    //         e.preventDefault();
    //         setActiveSuggestionIndex(prevIndex =>
    //             prevIndex > 0 ? prevIndex - 1 : filteredSuggestions.length - 1
    //         );
    //     } else if (e.key === 'ArrowDown') {
    //         e.preventDefault();
    //         setActiveSuggestionIndex(prevIndex =>
    //             prevIndex < filteredSuggestions.length - 1 ? prevIndex + 1 : 0
    //         );
    //     }
    // };

    return (
        <div className="col-md-2">
            <div className="col-md-12 add-project-card h-100">
                <a data-bs-toggle="modal" data-bs-target="#addProjects" aria-current="page" className="project-area-add active" href="#">
                    <div className="card border-0 project-card rounded-4 p-12 text-center my-auto h-100 justify-content-center cursor-pointer">
                        <p className='text-secondary'>Add Projects</p>
                        <i className="fa fa-plus-circle fs-1"></i>
                    </div>
                </a>
                <div className="modal fade" id="addProjects" tabIndex="-1" aria-labelledby="addProjectLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="addTodoLabel">Add New Project</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">

                                <form onSubmit={handleSubmit}>
                                    <div id="projectInfoSection">
                                        <h5 className="text-start">Project Information</h5>
                                        <div className="row mb-3">
                                            <label htmlFor="projectName" className="text-start col-12 col-md-4 col-form-label">Project Name</label>
                                            <div className="col-12 col-md-8">
                                                <input type="text" className="form-control" id="projectName" placeholder="Enter Project Name" onChange={(e) => { setPname(e.target.value) }} />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="projectInfo" className="text-start col-12 col-md-4 col-form-label">Project Information</label>
                                            <div className="col-12 col-md-8">
                                                <textarea className="form-control" id="projectInfo" rows="3" placeholder="Enter project information" onChange={(e) => { setPinformation(e.target.value) }}></textarea>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="businessType" className="text-start col-12 col-md-4 col-form-label">Project Manager</label>
                                            <div className="col-12 col-md-8">
                                                <div className="input-group">
                                                    <input type="text" aria-label="First name" placeholder="Emp ID" className="form-control" onChange={(e) => { setManagerid(e.target.value) }} />
                                                    <input type="text" aria-label="Last name" placeholder="Name" className="form-control" onChange={(e) => { setManager(e.target.value) }} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="businessType" className="text-start col-12 col-md-4 col-form-label">Project Coordinator</label>
                                            <div className="col-12 col-md-8">
                                                <div className="input-group">
                                                    <input type="text" aria-label="First name" placeholder="Emp ID" className="form-control" onChange={(e) => { setCoordinatorid(e.target.value) }} />
                                                    <input type="text" aria-label="Last name" placeholder="Name" className="form-control" onChange={(e) => { setCoordinator(e.target.value) }} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="businessType" className="text-start col-12 col-md-4 col-form-label">Business Type</label>
                                            <div className="col-12 col-md-8">
                                                <input type="text" className="form-control" id="businessType" placeholder="Enter Business Type" onChange={(e) => { setBtype(e.target.value) }} />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="websiteLink" className="text-start col-12 col-md-4 col-form-label">Website Link</label>
                                            <div className="col-12 col-md-8">
                                                <input type="text" className="form-control" id="websiteLink" placeholder="Enter Website Link" onChange={(e) => { setWebsite(e.target.value) }} />
                                            </div>
                                        </div>
                                    </div>

                                    <div id="releasesSection" className="mt-4">
                                        <h5 className="text-start">Releases</h5>
                                        <div className="row">
                                            <div className="col-12 col-md-4 mb-3">
                                                <div className="d-flex flex-column position-relative">
                                                    <label htmlFor="upcomingRelease" className="form-label">Upcoming Release</label>
                                                    <input
                                                        type='date'
                                                        onChange={(date) => setUpcomingRelease(date.target.value)}
                                                        className="form-control pe-5"
                                                        id="upcomingRelease"
                                                        dateFormat="yyyy-MM-dd"
                                                        placeholderText='Pick Date'
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4 mb-3">
                                                <div className="d-flex flex-column position-relative">
                                                    <label htmlFor="currentRelease" className="form-label">Current Release</label>
                                                    <input
                                                        type='date'
                                                        onChange={(date) => setCurrentRelease(date.target.value)}
                                                        className="form-control pe-5"
                                                        id="upcomingRelease"
                                                        dateFormat="yyyy-MM-dd"
                                                        placeholderText='Pick Date'
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4 mb-3">
                                                <div className="d-flex flex-column position-relative">
                                                    <label htmlFor="closedRelease" className="form-label">Closed Release</label>
                                                    <input
                                                        type='date'
                                                        onChange={(date) => setClosedRelease(date.target.value)}
                                                        className="form-control pe-5"
                                                        id="upcomingRelease"
                                                        dateFormat="yyyy-MM-dd"
                                                        placeholderText='Pick Date'
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="assignee_section mt-2">
                                        <h5 className="text-start">Assignee</h5>
                                        <select
                                            className="form-select"
                                            id="assigneeDropdown"
                                            aria-label="Assignee"
                                            onChange={handleSelectChange}
                                            value=""
                                        >
                                            <option value="">Select Assignee</option>
                                            {options
                                                .filter(option => !assignees.includes(option))
                                                .map((option, index) => (
                                                    <option key={index} value={option}>
                                                        {option}
                                                    </option>
                                                ))}
                                        </select>
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
                                                    <input type="text" className="form-control" id="section1Link1" placeholder="Enter Dev Link " onChange={(e) => { setDev(e.target.value) }} />
                                                </div>
                                            </div>
                                            <div className="row mb-2">
                                                <label htmlFor="section1Link2" className="text-start col-12 col-md-4 col-form-label">Dev-Admin</label>
                                                <div className="col-12 col-md-8">
                                                    <input type="text" className="form-control" id="section1Link2" placeholder="Enter  Dev-Admin Link " onChange={(e) => { setDevadmin(e.target.value) }} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <h6 className="text-start">Testing Server</h6>
                                            <div className="row mb-2">
                                                <label htmlFor="section2Link1" className="text-start col-12 col-md-4 col-form-label">Testing </label>
                                                <div className="col-12 col-md-8">
                                                    <input type="text" className="form-control" id="section2Link1" placeholder="Enter V7 Link" onChange={(e) => { setTesting(e.target.value) }} />
                                                </div>
                                            </div>
                                            <div className="row mb-2">
                                                <label htmlFor="section2Link2" className="text-start col-12 col-md-4 col-form-label">Testing Admin</label>
                                                <div className="col-12 col-md-8">
                                                    <input type="text" className="form-control" id="section2Link2" placeholder="Enter V7 Admin Link" onChange={(e) => { setTestingadmin(e.target.value) }} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <h6 className="text-start">Staging Server</h6>
                                            <div className="row mb-2">
                                                <label htmlFor="section2Link1" className="text-start col-12 col-md-4 col-form-label">Staging</label>
                                                <div className="col-12 col-md-8">
                                                    <input type="text" className="form-control" id="section2Link1" placeholder="Enter Staging Link" onChange={(e) => { setStaging(e.target.value) }} />
                                                </div>
                                            </div>
                                            <div className="row mb-2">
                                                <label htmlFor="section2Link2" className="text-start col-12 col-md-4 col-form-label">Staging Admin</label>
                                                <div className="col-12 col-md-8">
                                                    <input type="text" className="form-control" id="section2Link2" placeholder="Enter Staging Admin Link" onChange={(e) => { setStagingadmin(e.target.value) }} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <h6 className="text-start">Production Server</h6>
                                            <div className="row mb-2">
                                                <label htmlFor="section2Link1" className="text-start col-12 col-md-4 col-form-label">Production</label>
                                                <div className="col-12 col-md-8">
                                                    <input type="text" className="form-control" id="section2Link1" placeholder="Enter Production Link" onChange={(e) => { setProduction(e.target.value) }} />
                                                </div>
                                            </div>
                                            <div className="row mb-2">
                                                <label htmlFor="section2Link2" className="text-start col-12 col-md-4 col-form-label">Production Admin</label>
                                                <div className="col-12 col-md-8">
                                                    <input type="text" className="form-control" id="section2Link2" placeholder="Enter Production Admin  Link " onChange={(e) => { setProductionadmin(e.target.value) }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="submit" className="btn btn-primary">Save Project</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProject;
