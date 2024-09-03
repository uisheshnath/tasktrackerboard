import React from 'react'
import { NavLink } from 'react-router-dom'

const ProjectDetails = () => {
    return (
        <>
            <NavLink className='project-card-info-icon' data-bs-toggle="modal" data-bs-target="#projectDetails">
                <i className="fa fa-chevron-right fs-6"></i>
            </NavLink>
            <div className="modal fade" id="projectDetails" data-bs-keyboard="false" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Project Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body pb-7">
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link active" id="project-details-0" data-bs-toggle="tab" href="#project-detailspanel-0" role="tab" aria-controls="project-detailspanel-0" aria-selected="true">About Project</a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link" id="project-details-1" data-bs-toggle="tab" href="#project-detailspanel-1" role="tab" aria-controls="project-detailspanel-1" aria-selected="false">Releases</a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link" id="project-details-2" data-bs-toggle="tab" href="#project-detailspanel-2" role="tab" aria-controls="project-detailspanel-2" aria-selected="false">Assignee</a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link" id="project-details-3" data-bs-toggle="tab" href="#project-detailspanel-3" role="tab" aria-controls="project-detailspanel-3" aria-selected="false">Important Links</a>
                                </li>
                            </ul>
                            <div className="tab-content pt-5" id="tab-content">
                                <div className="tab-pane about_project active" id="project-detailspanel-0" role="tabpanel" aria-labelledby="project-details-0">
                                    <span className="fw-bold">Project Name -</span>Zlaata
                                    <h6 className="mt-3 fw-bold">Introduction</h6>
                                    <p className="mb-0">Zlaata is a fashion brand that offers a wide</p>
                                    <h6 className="mt-3 fw-bold">Business Type</h6>
                                    <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Mollitia inventore neque laudantium autem repellendus harum ea sint reprehenderit quasi qui?
                                    </p>
                                    <h6 className="mt-3 fw-bold">Website Link</h6>
                                    <a className="mb-0" href='https://zlaata.com'>https://zlaata.com</a>
                                </div>
                                <div className="tab-pane project_releases" id="project-detailspanel-1" role="tabpanel" aria-labelledby="project-details-1">
                                    <h6 className="mt-3 fw-bold">Upcoming</h6>
                                    <p className="mb-0 text-info upcoming_release_date">10th August 2024</p>
                                    <h6 className="mt-3 fw-bold">Current</h6>
                                    <p className="mb-0 text-success current_release_date">25th July 2024</p>
                                    <h6 className="mt-3 fw-bold">Closed</h6>
                                    <p className="mb-0 text-danger closed_release_date">1st July 2024</p>
                                </div>
                                <div className="tab-pane project_assignees" id="project-detailspanel-2" role="tabpanel" aria-labelledby="project-details-2">
                                <div className="row">
                                <div className="col-md-12 mb-3">
                                        <div className="card border-0 shadow">
                                            <div className="card-header d-flex align-items-center">
                                                <span className="avatar text-bg-primary fs-5">V</span>
                                                <div className="ms-3">
                                                    <h6 className="mb-0 fs-sm">Koustav Kumar Das</h6>
                                                    <span className="text-muted fs-sm"><kbd className="me-2">Team Lead </kbd> | <span>SW-110</span></span>
                                                </div>
                                                <div className="ms-auto d-flex">
                                                    <button className="btn btn-custom me-2" type="button">
                                                        <i className="fa fa-phone bg-primary text-white p-2 rounded"></i>
                                                    </button>
                                                    <button className="btn btn-custom" type="button">
                                                        <i className="fa fa-paper-plane bg-warning text-white p-2 rounded"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                        <div className="card border-0 shadow">
                                            <div className="card-header d-flex align-items-center">
                                                <span className="avatar text-bg-primary fs-5">V</span>
                                                <div className="ms-3">
                                                    <h6 className="mb-0 fs-sm">Seshnath</h6>
                                                    <span className="text-muted fs-sm"> <kbd className="me-2 mb-2 bg-secondary text-white fw-bold">Trainee</kbd>
                                                    | <span>SW-110</span>
                                                    </span>
                                                </div>
                                                <div className="ms-auto d-flex">
                                                    <button className="btn btn-custom me-2" type="button">
                                                        <i className="fa fa-phone bg-primary text-white p-2 rounded"></i>
                                                    </button>
                                                    <button className="btn btn-custom" type="button">
                                                        <i className="fa fa-paper-plane bg-warning text-white p-2 rounded"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                        <div className="card border-0 shadow">
                                            <div className="card-header d-flex align-items-center">
                                                <span className="avatar text-bg-primary fs-5">V</span>
                                                <div className="ms-3">
                                                    <h6 className="mb-0 fs-sm">Sarath</h6>
                                                    <span className="text-muted fs-sm">Sr. Software Developer | <span>SW-110</span></span>
                                                </div>
                                                <div className="ms-auto d-flex">
                                                    <button className="btn btn-custom me-2" type="button">
                                                        <i className="fa fa-phone bg-primary text-white p-2 rounded"></i>
                                                    </button>
                                                    <button className="btn btn-custom" type="button">
                                                        <i className="fa fa-paper-plane bg-warning text-white p-2 rounded"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                        <div className="card border-0 shadow">
                                            <div className="card-header d-flex align-items-center">
                                                <span className="avatar text-bg-primary fs-5">V</span>
                                                <div className="ms-3">
                                                    <h6 className="mb-0 fs-sm">Vishnu</h6>
                                                    <span className="text-muted fs-sm">Sr. Software Developer | <span>SW-110</span> </span>
                                                </div>
                                                <div className="ms-auto d-flex">
                                                    <button className="btn btn-custom me-2" type="button">
                                                        <i className="fa fa-phone bg-primary text-white p-2 rounded"></i>
                                                    </button>
                                                    <button className="btn btn-custom" type="button">
                                                        <i className="fa fa-paper-plane bg-warning text-white p-2 rounded"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                        <div className="card border-0 shadow">
                                            <div className="card-header d-flex align-items-center">
                                                <span className="avatar text-bg-primary fs-5">V</span>
                                                <div className="ms-3">
                                                    <h6 className="mb-0 fs-sm">Ujjawal</h6>
                                                    <span className="text-muted fs-sm">Sr. Software Developer | <span>SW-110</span> </span>
                                                </div>
                                                <div className="ms-auto d-flex">
                                                    <button className="btn btn-custom me-2" type="button">
                                                        <i className="fa fa-phone bg-primary text-white p-2 rounded"></i>
                                                    </button>
                                                    <button className="btn btn-custom" type="button">
                                                        <i className="fa fa-paper-plane bg-warning text-white p-2 rounded"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                        <div className="card border-0 shadow">
                                            <div className="card-header d-flex align-items-center">
                                                <span className="avatar text-bg-primary fs-5">V</span>
                                                <div className="ms-3">
                                                    <h6 className="mb-0 fs-sm">Prasad</h6>
                                                    <span className="text-muted fs-sm">Sr. Software Developer | <span>SW-110</span> </span>
                                                </div>
                                                <div className="ms-auto d-flex">
                                                    <button className="btn btn-custom me-2" type="button">
                                                        <i className="fa fa-phone bg-primary text-white p-2 rounded"></i>
                                                    </button>
                                                    <button className="btn btn-custom" type="button">
                                                        <i className="fa fa-paper-plane bg-warning text-white p-2 rounded"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                        <div className="card border-0 shadow">
                                            <div className="card-header d-flex align-items-center">
                                                <span className="avatar text-bg-primary fs-5">V</span>
                                                <div className="ms-3">
                                                    <h6 className="mb-0 fs-sm">Pradeep</h6>
                                                    <span className="text-muted fs-sm">Sr. Software Developer | <span>SW-110</span> </span>
                                                </div>
                                                <div className="ms-auto d-flex">
                                                    <button className="btn btn-custom me-2" type="button">
                                                        <i className="fa fa-phone bg-primary text-white p-2 rounded"></i>
                                                    </button>
                                                    <button className="btn btn-custom" type="button">
                                                        <i className="fa fa-paper-plane bg-warning text-white p-2 rounded"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane project_impt_links" id="project-detailspanel-3" role="tabpanel" aria-labelledby="project-details-3">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">Development</button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
                                            <div className="accordion-body pt-0">
                                                <div className="mb-2">
                                                    <span className="link-name fs-6 fw-bold">Dev:</span>
                                                    <a href="https://devzl.testingserver8.com/" className="btn btn-link">https://devzl.testingserver8.com</a>
                                                </div>
                                                <div>
                                                    <span className="link-name fs-6 fw-bold">Dev-Admin:</span>
                                                    <a href="https://adzldev.testingserver8.com/admin/order/" className="btn btn-link">https://adzldev.testingserver8.com/admin/</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">V7 - Server</button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div className="accordion-body pt-0">
                                                <div className="mb-2">
                                                    <span className="link-name fs-6 fw-bold">V7:</span>
                                                    <a href="https://zltav7.testingserver8.com/" className="btn btn-link">https://zltav7.testingserver8.com/</a>
                                                </div>
                                                <div>
                                                    <span className="link-name fs-6 fw-bold">V7-Admin:</span>
                                                    <a href="https://adminzltav7.testingserver8.com/admin/login/" className="btn btn-link">https://adminzltav7.testingserver8.com/admin/</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Staging Server</button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body pt-0">
                                                <div className="mb-2">
                                                    <span className="link-name fs-6 fw-bold">Stage:</span>
                                                    <a href="https://testing.zlaata.com/" className="btn btn-link">https://testing.zlaata.com/</a>
                                                </div>
                                                <div>
                                                    <span className="link-name fs-6 fw-bold">Stage-Admin:</span>
                                                    <a href="" className="btn btn-link"></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFour">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Production</button>
                                        </h2>
                                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                            <div className="accordion-body pt-0">
                                                <div className="mb-2">
                                                    <span className="link-name fs-6 fw-bold">Prod:</span>
                                                    <a href="https://www.zlaata.com/" className="btn btn-link">https://www.zlaata.com/</a>
                                                </div>
                                                <div>
                                                    <span className="link-name fs-6 fw-bold">Prod-Admin:</span>
                                                    <a href="#" className="btn btn-link"> </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectDetails