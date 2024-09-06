import React, { useContext, useState } from 'react';
import axios from "axios" 
import 'react-datepicker/dist/react-datepicker.css'; 
import UserContext from '../../../usermodel/UserContext';
let myurl = process.env.REACT_APP_COMMONURL;
const EditProjectForm = (props) => {
    let data = props.xyz
    // console.log(data)
    const { user } = useContext(UserContext);
    let username = user?.emp_name;
    let userid = user?.emp_id;
    const [pname, setPname] = useState([props.project_name])
    const [pinformation, setPinformation] = useState([data?.project_information])
    const [manager, setManager] = useState([data?.manager_name])
    const [managerid, setManagerid] = useState([data?.manager_id])
    const [coordinator, setCoordinator] = useState([data?.coordinator_name])
    const [coordinatorid, setCoordinatorid] = useState([data?.coordinator_id])
    const [btype, setBtype] = useState([data?.business_type])
    const [website, setWebsite] = useState([data?.website_link])
    const [upcomingRelease, setUpcomingRelease] = useState([data?.upcoming_release]);
    const [currentRelease, setCurrentRelease] = useState([data?.current_release]);
    const [closedRelease, setClosedRelease] = useState([data?.closed_release]);
    const [assignees, setAssignees] = useState([data?.assignee]);
    const [dev, setDev] = useState([data?.dev])
    const [devadmin, setDevadmin] = useState([data?.dev_admin])
    const [testing, setTesting] = useState([data?.testing])
    const [testingadmin, setTestingadmin] = useState([data?.v7_admin])
    const [staging, setStaging] = useState([data?.staging])
    const [stagingadmin, setStagingadmin] = useState([data?.staging_admin])
    const [production, setProduction] = useState([data?.production])
    const [productionadmin, setProductionadmin] = useState([data?.production_admin])

    let values = [username, userid, pname, pinformation, manager, managerid, coordinator, coordinatorid, btype, website, upcomingRelease,
        currentRelease, closedRelease, assignees, dev, devadmin, testing, testingadmin, staging, stagingadmin, production, productionadmin]
    // console.dir(data)
 
    const options = ["Ben", "Gwen", "Grandpa", "Omnitrix"];
    
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
            if (response.data.Message === "Success") {
                console.log('Data posted successfully:', response.data);
                window.location.reload()
            }
            else {
                console.log('Error posting data:', response.data);
            }

            // window.location.reload()
        } catch (error) {
            console.error('Error posting data:', error);
        }

    }

    console.log(pname)
   


  return (
    <>
        <div class="modal fade" id="editProject" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addTodoLabel">Edit Project</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            

                            <form onSubmit={handleSubmit}>
                                <div id="projectInfoSection">
                                    <h5 className="text-start">Project Information </h5>
                                    <div className="row mb-3">
                                        <label htmlFor="projectName" className="text-start col-12 col-md-4 col-form-label">Project Name</label>
                                        <div className="col-12 col-md-8">
                                            <input type="text" className="form-control" id="projectName" placeholder="Enter Project Name" onChange={(e) => { setPname(e.target.value) }} value={pname} required />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="projectInfo" className="text-start col-12 col-md-4 col-form-label">Project Information</label>
                                        <div className="col-12 col-md-8">
                                            <textarea className="form-control" id="projectInfo" rows="3" placeholder="Enter project information" onChange={(e) => { setPinformation(e.target.value) }} required></textarea>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="businessType" className="text-start col-12 col-md-4 col-form-label">Project Manager</label>
                                        <div className="col-12 col-md-8">
                                            <div className="input-group">
                                                <input type="text" aria-label="First name" placeholder="Emp ID" className="form-control" onChange={(e) => { setManagerid(e.target.value) }} value={managerid} />
                                                <input type="text" aria-label="Last name" placeholder="Name" className="form-control" onChange={(e) => { setManager(e.target.value) }} value={manager} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="businessType" className="text-start col-12 col-md-4 col-form-label">Project Coordinator</label>
                                        <div className="col-12 col-md-8">
                                            <div className="input-group">
                                                <input type="text" aria-label="First name" placeholder="Emp ID" className="form-control" onChange={(e) => { setCoordinatorid(e.target.value) }} value={coordinatorid} />
                                                <input type="text" aria-label="Last name" placeholder="Name" className="form-control" onChange={(e) => { setCoordinator(e.target.value) }} value={coordinator} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="businessType" className="text-start col-12 col-md-4 col-form-label">Business Type</label>
                                        <div className="col-12 col-md-8">
                                            <input type="text" className="form-control" id="businessType" placeholder="Enter Business Type" onChange={(e) => { setBtype(e.target.value) }} required />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="websiteLink" className="text-start col-12 col-md-4 col-form-label">Website Link</label>
                                        <div className="col-12 col-md-8">
                                            <input type="text" className="form-control" id="websiteLink" placeholder="Enter Website Link" onChange={(e) => { setWebsite(e.target.value) }} required />
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
                                                    required
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
                                                    required
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
                                                    required
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
                                                <input type="text" className="form-control" id="section1Link1" placeholder="Enter Dev Link " onChange={(e) => { setDev(e.target.value) }} value={dev} />
                                            </div>
                                        </div>
                                        <div className="row mb-2">
                                            <label htmlFor="section1Link2" className="text-start col-12 col-md-4 col-form-label">Dev-Admin</label>
                                            <div className="col-12 col-md-8">
                                                <input type="text" className="form-control" id="section1Link2" placeholder="Enter  Dev-Admin Link " onChange={(e) => { setDevadmin(e.target.value) }} value={devadmin} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <h6 className="text-start">Testing Server</h6>
                                        <div className="row mb-2">
                                            <label htmlFor="section2Link1" className="text-start col-12 col-md-4 col-form-label">Testing </label>
                                            <div className="col-12 col-md-8">
                                                <input type="text" className="form-control" id="section2Link1" placeholder="Enter V7 Link" onChange={(e) => { setTesting(e.target.value) }} value={testing} />
                                            </div>
                                        </div>
                                        <div className="row mb-2">
                                            <label htmlFor="section2Link2" className="text-start col-12 col-md-4 col-form-label">Testing Admin</label>
                                            <div className="col-12 col-md-8">
                                                <input type="text" className="form-control" id="section2Link2" placeholder="Enter V7 Admin Link" onChange={(e) => { setTestingadmin(e.target.value) }} value={testingadmin} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <h6 className="text-start">Staging Server</h6>
                                        <div className="row mb-2">
                                            <label htmlFor="section2Link1" className="text-start col-12 col-md-4 col-form-label">Staging</label>
                                            <div className="col-12 col-md-8">
                                                <input type="text" className="form-control" id="section2Link1" placeholder="Enter Staging Link" onChange={(e) => { setStaging(e.target.value) }} value={staging} />
                                            </div>
                                        </div>
                                        <div className="row mb-2">
                                            <label htmlFor="section2Link2" className="text-start col-12 col-md-4 col-form-label">Staging Admin</label>
                                            <div className="col-12 col-md-8">
                                                <input type="text" className="form-control" id="section2Link2" placeholder="Enter Staging Admin Link" onChange={(e) => { setStagingadmin(e.target.value) }} value={stagingadmin} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <h6 className="text-start">Production Server</h6>
                                        <div className="row mb-2">
                                            <label htmlFor="section2Link1" className="text-start col-12 col-md-4 col-form-label">Production</label>
                                            <div className="col-12 col-md-8">
                                                <input type="text" className="form-control" id="section2Link1" placeholder="Enter Production Link" onChange={(e) => { setProduction(e.target.value) }} value={production} />
                                            </div>
                                        </div>
                                        <div className="row mb-2">
                                            <label htmlFor="section2Link2" className="text-start col-12 col-md-4 col-form-label">Production Admin</label>
                                            <div className="col-12 col-md-8">
                                                <input type="text" className="form-control" id="section2Link2" placeholder="Enter Production Admin  Link " onChange={(e) => { setProductionadmin(e.target.value) }} value={productionadmin} />
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
    </>
  )
}

export default EditProjectForm