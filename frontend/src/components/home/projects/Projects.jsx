import React, { useContext, useEffect, useState } from 'react';
import './projects.css';
import { NavLink } from 'react-router-dom';
import ProjectDetails from '../projectdetails/ProjectDetails';
import axios from 'axios';
import UserContext from '../../../usermodel/UserContext';
import AddProject from '../addProject/AddProject'; // Ensure the path is correct
import { format } from 'date-fns';
import EditProjectForm from '../editProject/EditProjectForm'; 
const formatDate = (dateString) => {
    return format(new Date(dateString), 'dd-MMM-yyyy');
};

let myurl = process.env.REACT_APP_COMMONURL;
 
const Projects = () => {
    const [filter, setFilter] = useState([]);
    const [sender, setSender] = useState(undefined);
    const [projectfunck, setProjectfunck] = useState(undefined);
    const { user } = useContext(UserContext);
    console.log(user?.designation , user?.department)

    useEffect(() => {
        axios.get(`${myurl}/api/project`)
            .then(response => {
                if((user?.designation=="HOD" && user?.department=="Frontend") || (user?.designation=="HOD" && user?.department=="Backend") || (user?.designation=="HOD" && user?.department=="Testing") ){
                    setFilter(response.data);
                }

                if(user?.designation=="Team Lead" && user?.department=="Frontend"){
                    const filterResult = (response.data)?.filter(item => item.user_id === (user?.emp_id));
                    setFilter(filterResult);
                }
                else{
                     const filterResult = (response.data)?.filter(item => item.user_id === (user?.emp_id));
                     setFilter(filterResult);
                }   

                // const filterResult = (response.data)?.filter(item => item.user_id === (user?.emp_id));
                // setFilter(filterResult);
                // console.log(response.data) 
            })
            .catch(error => console.error(error));
    }, [user]);

    const valueGet = (index, item) => {
        setSender(item);
    }; 

    // delete project
    const handleDelete = async (id) => {
        let confirmation = window.confirm("Are you sure you want to delete the project")
        if (confirmation) {
        try {
            let response = await axios.delete(`${myurl}/api/deleteproject/${id}`);

            if (response.data && response.data.Message === "Success") {
                console.log('Data deleted successfully:', response.data);
                window.location.reload();
            } else {
                console.log('Error deleting data:', response.data);
            }
        } catch (error) {
            console.error('Something went wrong:', error);
        }
        }
    }
    // edit project
    const editHandle = (e)=>{
    let resetForm = document.querySelector("#editProject form")
       resetForm.reset()
        setSender(e);
        setProjectfunck()
    }

    return (
        <>
            <div className="col-md-7">
                <div className="d-flex gap-6 projects-slide">
                    {
                        filter.map((item, index) => (
                            <div className="col-md-3" key={index}>
                                <div className="card border-0 project-card rounded-4">
                                    <div className="card-header d-flex align-items-center px-3">
                                        <span className="avatar text-bg-primary avatar-lg fs-5">
                                            <img className="avatar" src="https://fastbootstrap.com/images/avatar/3.jpg" alt="Avatar" />
                                        </span>
                                        <div className="ms-3">
                                            <h6 className="mb-0 fs-sm">{item.project_name}</h6>
                                            <span className="text-muted fs-sm">{formatDate(item.current_release)}</span>
                                        </div>
                                        <div className="dropstart ms-auto">
                                            <button className="btn text-muted" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="fa fa-ellipsis-v"></i>
                                            </button>
                                            <ul className="dropdown-menu">
                                               <li>
                                                    <a className="dropdown-item"  href="#" data-bs-toggle="modal" data-bs-target="#editProject" onClick={()=>editHandle(item)} ><i className="fa fa-pencil me-3"></i>Edit</a>
                                                     
                                               </li>
                                               
                                                <li>
                                                    <a className="dropdown-item" href="#" onClick={() => handleDelete(item.id)}><i className="fa fa-trash me-3"></i>Delete</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="card-body p-3">
                                        <div className='mb-3'>
                                            <h6 className="mb-0 fs-sm projects-update-heading text-danger">Upcoming Release</h6>
                                            <p className="card-text fs-sm">{formatDate(item.upcoming_release)}</p>
                                        </div>
                                        <div className='mb-3'>
                                            <h6 className="mb-0 fs-sm projects-update-heading text-success">Last Release</h6>
                                            <p className="card-text fs-sm">{formatDate(item.closed_release)}</p>
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
                                        <NavLink className='project-card-info-icon' data-bs-toggle="modal" data-bs-target="#projectDetails" onClick={() => valueGet(index, item)} >
                                            <i className="fa fa-chevron-right fs-6"></i>
                                        </NavLink>
                                        <ProjectDetails
                                            project={sender?.project_name}
                                            introduction={sender?.project_information}
                                            manager={sender?.manager_name}
                                            coordinator={sender?.coordinator_name}
                                            businesstype={sender?.business_type}
                                            weblink={sender?.website_link}
                                            upcoming={sender?.upcoming_release}
                                            current={sender?.current_release}
                                            closed={sender?.closed_release}
                                            dev={sender?.dev}
                                            devadmin={sender?.dev_admin}
                                            v7={sender?.teesting_server}
                                            v7admin={sender?.v7_admin}
                                            Stage={sender?.staging}
                                            Stageadmin={sender?.staging_admin}
                                            Prod={sender?.production}
                                            prodadmin={sender?.production_admin}
                                        />
                                         <EditProjectForm xyz={sender} />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <AddProject />
           
        </>
    );
};

export default Projects;
