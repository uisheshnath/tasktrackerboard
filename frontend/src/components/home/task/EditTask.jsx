import React, { useEffect, useState } from 'react'
import { format } from 'date-fns';
import axios from 'axios';
let myurl = process.env.REACT_APP_COMMONURL 
function EditTask(props) {
    let task = props?.task
    let project = props.project;
    const [project_name, setProjectname] = useState([]);
    const [project_title, setProjecttitle] = useState([]);
    const [description, setDescription] = useState([]);
    const [priority, setPriority] = useState([]);
    const [start_date, setStartdate] = useState('');
    const [end_date, setEnddate] = useState('');

    useEffect(() => {
        // console.log(props.start_date);
        setProjectname(task?.project_name)
        setProjecttitle(task?.project_title)
        setDescription(task?.description)
        setPriority(task?.priority);
        setStartdate(props.start_date);
        setEnddate(props?.end_date);

    }, [task])

    const editSubmit = (e) => {
        e.preventDefault();
        let taskid = task.id;
        let data = {
            project_name: project_name,
            project_title: project_title,
            description: description,
            priority: priority,
            start_date: start_date,
            end_date: end_date
        };
        axios.patch(`${myurl}/api/edittask/${taskid}`, data)
            .then((res) => {
                console.log("Response data:", res.data);
                if (res.data.Message === "Success") {
                    // window.alert("Update successful")
                    window.location.reload();
                } else {
                    console.error("Error response:", res.data.Error);
                }
            })
            .catch((err) => {
                console.error("Network error:", err.response || err.message || err);
            });
    };
    

    return (
        <>

            <div className="modal fade" id="editTask" tabIndex="-1" aria-labelledby="editTaskLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editTaskLabel">Add New Task</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={editSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="projectName" className="form-label">Project Name</label>
                                    <select className="form-select" id="projectName" onChange={(e) => setProjectname(e.target.value)} value={project_name} required >
                                        <option value='' >-Select Project Name-</option>
                                        {project?.map((item) => {
                                            return (
                                                <>
                                                    <option value={item.project_name}> {item.project_name} </option>
                                                </>
                                            )
                                        })
                                        }
                                        <option value='Other' >Other</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="taskTitle" className="form-label">Task Title</label>
                                    <input type="text" className="form-control" id="taskTitle" placeholder="Enter task title" onChange={(e) => setProjecttitle(e.target.value)} value={project_title} required></input>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="taskDescription" className="form-label">Task Description</label>
                                    <textarea className="form-control" id="taskDescription" rows="3" placeholder="Enter task description" onChange={(e) => setDescription(e.target.value)} value={description} required></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="taskPriority" className="form-label">Priority</label>
                                    <select className="form-select" id="taskPriority" onChange={(e) => setPriority(e.target.value)} value={priority} required >
                                        <option value='' >select priority</option>
                                        <option value="low">Low</option>
                                        <option value="medium">Medium</option>
                                        <option value="high">High</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="startDate" className="form-label">Start Date</label>
                                    <input type="date" className="form-control" id="startDate" onChange={(e) => setStartdate(e.target.value)} value={start_date} required></input>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="endDate" className="form-label">End Date</label>
                                    <input type="date" className="form-control" id="endDate" onChange={(e) => setEnddate(e.target.value)} value={end_date} required></input>
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>

                        {/* form */}

                    </div>
                </div>
            </div>
        </>
    )
}

export default EditTask