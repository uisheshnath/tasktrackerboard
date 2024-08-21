import React from 'react'
import './projects.css'
import { NavLink } from 'react-router-dom'
import ProjectDetails from '../projectdetails/ProjectDetails'

const Projects = () => {
    return (
        <>
            <div className="col-md-7">
                <div className="d-flex gap-6 projects-slide">
                    {
                        Array.from(Array(5)).map((item, index) => {
                            return (
                                <div className="col-md-3">
                                    <div className="card border-0 project-card rounded-4">
                                        <div className="card-header d-flex align-items-center px-3">
                                            <span className="avatar text-bg-primary avatar-lg fs-5">
                                                <img className="avatar" src="https://fastbootstrap.com/images/avatar/3.jpg" />
                                            </span>
                                            <div className="ms-3">
                                                <h6 className="mb-0 fs-sm">Zlaata</h6>
                                                <span className="text-muted fs-sm">Sep 14, 2022</span>
                                            </div>
                                            <div className="dropstart ms-auto">
                                                <button className="btn text-muted" type="btn" data-bs-toggle="dropdown" aria-expanded="false">
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
                                                <img className="avatar" src="https://fastbootstrap.com/images/avatar/1.jpg" />
                                                <img className="avatar" src="https://fastbootstrap.com/images/avatar/2.jpg" />
                                                <img className="avatar" src="https://fastbootstrap.com/images/avatar/4.jpg" />
                                                <img className="avatar" src="https://fastbootstrap.com/images/avatar/5.jpg" />
                                            </div>
                                            <ProjectDetails/>
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
                            <a data-bs-toggle="modal" data-bs-target="#addProjects" aria-current="page" class="project-area-add active" href="#">
                                <i class="fa fa-plus-circle fs-1"></i>
                            </a>
                        <div class="modal fade" id="addProjects" tabindex="-1" aria-labelledby="addProjectLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="addTodoLabel">Add New Project</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <form>
                                            <div id="projectInfoSection">
                                                <h5 class="text-start">Project Information</h5>
                                                <div class="row mb-3">
                                                    <label for="projectName" class="text-start col-12 col-md-4 col-form-label">Project Name</label>
                                                    <div class="col-12 col-md-8">
                                                        <input type="text" class="form-control" id="projectName" placeholder="Enter Project Name"></input>
                                                    </div>
                                                </div>
                                                <div class="row mb-3">
                                                    <label for="projectInfo" class="text-start col-12 col-md-4 col-form-label">Project Information</label>
                                                    <div class="col-12 col-md-8">
                                                        <textarea class="form-control" id="projectInfo" rows="3" placeholder="Enter project information"></textarea>
                                                    </div>
                                                </div>
                                                <div class="row mb-3">
                                                    <label for="businessType" class="text-start col-12 col-md-4 col-form-label">Business Type</label>
                                                    <div class="col-12 col-md-8">
                                                        <input type="text" class="form-control" id="businessType" placeholder="Enter Business Type"></input>
                                                    </div>
                                                </div>
                                                <div class="row mb-3">
                                                    <label for="websiteLink" class="text-start col-12 col-md-4 col-form-label">Website Link</label>
                                                    <div class="col-12 col-md-8">
                                                        <input type="url" class="form-control" id="websiteLink" placeholder="Enter Website Link"></input>
                                                    </div>
                                                </div>
                                            </div>

                                            <div id="releasesSection" class="mt-4">
                                            <h5 class="text-start">Releases</h5>
                                            <div class="row">
                                                <div class="col-12 col-md-4 mb-3">
                                                <div class="d-flex flex-column">
                                                    <label for="upcomingRelease" class="form-label">Upcoming Release</label>
                                                    <input type="date" class="form-control" id="upcomingRelease"></input>
                                                </div>
                                                </div>
                                                <div class="col-12 col-md-4 mb-3">
                                                <div class="d-flex flex-column">
                                                    <label for="currentRelease" class="form-label">Current Release</label>
                                                    <input type="date" class="form-control" id="currentRelease"></input>
                                                </div>
                                                </div>
                                                <div class="col-12 col-md-4 mb-3">
                                                <div class="d-flex flex-column">
                                                    <label for="closedRelease" class="form-label">Closed Release</label>
                                                    <input type="date" class="form-control" id="closedRelease"></input>
                                                </div>
                                                </div>
                                            </div>
                                            </div>

                                            <div class="assignee_section mt-2">
                                                <h5 class="text-start">Assignee</h5>
                                                <input type="text" class="form-control" id="pillInput" placeholder="Enter Assignee"></input>
                                                <div class="pill-container" id="pillContainer"></div>
                                            </div>

                                            <div id="importantLinksSection" class="mt-4">
                                                <h5 class="text-start">Important Links</h5>

                                                <div class="mb-3">
                                                    <h6 class="text-start">Section 1</h6>
                                                    <div class="row mb-2">
                                                        <label for="section1Link1" class="text-start col-12 col-md-4 col-form-label">Link 1</label>
                                                        <div class="col-12 col-md-8">
                                                            <input type="url" class="form-control" id="section1Link1" placeholder="Enter Link 1"></input>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-2">
                                                        <label for="section1Link2" class="text-start col-12 col-md-4 col-form-label">Link 2</label>
                                                        <div class="col-12 col-md-8">
                                                            <input type="url" class="form-control" id="section1Link2" placeholder="Enter Link 2"></input>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="mb-3">
                                                    <h6 class="text-start">Section 2</h6>
                                                    <div class="row mb-2">
                                                        <label for="section2Link1" class="text-start col-12 col-md-4 col-form-label">Link 1</label>
                                                        <div class="col-12 col-md-8">
                                                            <input type="url" class="form-control" id="section2Link1" placeholder="Enter Link 1"></input>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-2">
                                                        <label for="section2Link2" class="text-start col-12 col-md-4 col-form-label">Link 2</label>
                                                        <div class="col-12 col-md-8">
                                                            <input type="url" class="form-control" id="section2Link2" placeholder="Enter Link 2"></input>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="mb-3">
                                                    <h6 class="text-start">Section 3</h6>
                                                    <div class="row mb-2">
                                                        <label for="section3Link1" class="text-start col-12 col-md-4 col-form-label">Link 1</label>
                                                        <div class="col-12 col-md-8">
                                                            <input type="url" class="form-control" id="section3Link1" placeholder="Enter Link 1"></input>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-2">
                                                        <label for="section3Link2" class="text-start col-12 col-md-4 col-form-label">Link 2</label>
                                                        <div class="col-12 col-md-8">
                                                            <input type="url" class="form-control" id="section3Link2" placeholder="Enter Link 2"></input>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="mb-3">
                                                    <h6 class="text-start">Section 4</h6>
                                                    <div class="row mb-2">
                                                        <label for="section4Link1" class="text-start col-12 col-md-4 col-form-label">Link 1</label>
                                                        <div class="col-12 col-md-8">
                                                            <input type="url" class="form-control" id="section4Link1" placeholder="Enter Link 1"></input>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-2">
                                                        <label for="section4Link2" class="text-start col-12 col-md-4 col-form-label">Link 2</label>
                                                        <div class="col-12 col-md-8">
                                                            <input type="url" class="form-control" id="section4Link2" placeholder="Enter Link 2"></input>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </form>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                        <button type="button" class="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default Projects