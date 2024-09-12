import React, { useContext, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './dnd.css';
import UserContext from '../../../usermodel/UserContext';
import axios from 'axios';
import { format } from 'date-fns';
import WithTLtask from '../task/WithTLtask';
import WithoutTLtask from '../task/WithoutTLtask';
import EditTask from '../task/EditTask';
import Filter, { Another } from '../../filter/Filter';

const formatDate = (dateString) => {
    return format(new Date(dateString), 'dd-MMM-yyyy');
};
const formatDate2 = (dateString) => {
    return format(new Date(dateString), 'yyyy-MM-dd');
};

let myurl = process.env.REACT_APP_COMMONURL

const Dnd = () => {
    const [todo, setTodo] = useState([])
    const [inprogress, setInprogress] = useState([])
    const [done, setDone] = useState([])
    const [userrecord, setUserrecord] = useState([])
    const [projectrecord, setProjectrecord] = useState([])
    const [edittask, setEdittask] = useState([])
    const { user } = useContext(UserContext);
    const isEligible = ['hod', 'tr', 'team lead'].includes(user?.designation);
    const [start_date, setStartdate] = useState([]);
    const [end_date, setEnddate] = useState([]);


    //  For show task
    useEffect(() => {
        axios.get(`${myurl}/api/task`)
            .then((response) => {
                let dataResult = response.data;
                if (isEligible) {
                    let editData = dataResult.filter((item) => item.reporting_to_id === user?.emp_id)
                    let inprogressData = editData.filter((item) => item.status === "inProgress")
                    let todoData = editData.filter((item) => item.status === "ToDo")
                    let doneData = editData.filter((item) => item.status === "Done")
                    setTodo(todoData?.reverse())
                    setInprogress(inprogressData?.reverse())
                    setDone(doneData?.reverse())
                    setUserrecord(editData?.reverse())
                    // console.log("You are eligible to edit.", editData);
                } else {
                    let showData = dataResult.filter((item) => item.emp_id === user?.emp_id)
                    let inprogressData = showData.filter((item) => item.status === "inProgress")
                    let todoData = showData.filter((item) => item.status === "ToDo")
                    let doneData = showData.filter((item) => item.status === "Done")
                    setTodo(todoData?.reverse())
                    setInprogress(inprogressData?.reverse())
                    setDone(doneData?.reverse())
                    setUserrecord(showData?.reverse())
                    // console.log("You are not eligible to edit.",showData);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, [user]);

    //  For show project
    useEffect(() => {
        axios.get(`${myurl}/api/project`)
            .then((response) => {
                let dataResult = response.data;
                let editData = dataResult.filter((item) => item.user_id === user?.emp_id)
                let usereditData = dataResult.filter((item) => item.user_id === user?.reporting_to_id)
                if (isEligible) {
                    setProjectrecord(editData)
                }
                else {
                    setProjectrecord(usereditData)
                }
            }
            )
            .catch((error) => { console.error(error); });
    }, [projectrecord])

    const addTask = () => { return isEligible ? <WithTLtask record={userrecord} project={projectrecord} user={user} /> : <WithoutTLtask record={userrecord} project={projectrecord} user={user} /> }
    const onEdittask = (event) => {
        setEdittask(event)
        setStartdate(formatDate2(event?.start_date))
        setEnddate(formatDate2(event?.end_date))
    }

    return (
        <div className="dnd">
            <EditTask project={projectrecord} task={edittask} start_date={start_date} end_date={end_date} />
            <div className="board">
                <div className="column boardColumn" id="ToDo" onDrop={dropIt} onDragOver={allowDrop}>
                    <div className="progress_board_heading d-flex justify-content-between align-items-center p-2 gap-20">
                        <h3 className="mb-0 todo_section fs-6" data-info="ToDo">To Do  </h3>
                        <a data-bs-toggle="modal" data-bs-target="#addTodo" aria-current="page" className="progress-area-add-section active" href="#">
                            <i className="fa fa-plus-circle fs-1"></i>
                        </a>
                    </div>
                    <div className="modal fade" id="addTodo" tabIndex="-1" aria-labelledby="addTodoLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="addTodoLabel">Add New Task</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                {addTask()}
                            </div>
                        </div>
                    </div>
                    {
                        todo?.map((item, index) => {
                            return (
                                <>
                                    <div id={`${item.id}`} key={index} className="task-card task_status_card" draggable="true" onDragStart={dragStart}>
                                        <div className="card border-0">
                                            <div className="card-header d-flex align-items-center border-bottom">
                                                <span className="avatar text-bg-primary avatar-lg fs-5">{item?.emp_name.slice(0, 1).toUpperCase()}</span>
                                                <div className="ms-3">
                                                    <h6 className="mb-0 fs-sm">{item.project_name}</h6>
                                                    <span className="text-muted fs-sm">{item.emp_name}</span>
                                                </div>
                                                <div className="dropstart ms-auto">
                                                    <button className="btn text-muted" type="btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="fa fa-ellipsis-v"></i>
                                                    </button>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#editTask" onClick={() => { onEdittask(item) }}><i className="fa fa-pencil me-3" ></i>Edit</a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" onClick={() => deleteCard(item.id)}>
                                                                <i className="fa fa-trash me-3"></i>Delete
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="#" onClick={(event) => moveOrderToSpecificColumn(event, 'inProgress', item.id)}>
                                                                <i className="fa fa-arrow-right me-3"></i>Move to inProgress
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="#" onClick={(event) => moveOrderToSpecificColumn(event, 'ToDo',  item.id)}>
                                                                <i className="fa fa-arrow-left me-3"></i>Move to ToDo
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="#" onClick={(event) => moveOrderToSpecificColumn(event, 'Done',  item.id)}>
                                                                <i className="fa fa-check me-3"></i>Move to Done
                                                            </a>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <p className='mb-1 fs-sm'><span className='fw-bold'>Task: </span>{item.project_title}</p>
                                                <p className='mb-1 fs-sm'><span className='fw-bold'>Priority: </span><span className="badge rounded-pill text-bg-danger px-2 py-1">{item.priority}</span></p>
                                                <p className="card-text fs-sm">
                                                    <span className='fw-bold'>Description: </span>{item.description}
                                                </p>
                                                <p className='mb-1 fs-sm'><span className='fw-bold'>Start Date: </span>{formatDate(item.start_date)}</p>
                                                <p className='mb-1 fs-sm'><span className='fw-bold'>End Date: </span>{formatDate(item.end_date)}</p>
                                            </div>
                                            <div className="card-footer d-flex align-items-center">
                                                <p className="mb-0 text-primary p-0 me-auto fw-bold">#{item.id}</p>
                                                <button className="btn btn-danger rounded-5 me-3 removeTask" type="button" onClick={removeCard}>
                                                    <i className="fa fa-remove fa-lg"></i>
                                                </button>
                                                <button className="btn btn-success rounded-5 aproveTask" type="button" onClick={moveOrder}>
                                                    <i className="fa fa-check fa-lg"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }

                    {/* <div id="task-2" className="task-card task_status_card" draggable="true" onDragStart={dragStart}>
                        <div className="card border-0">
                            <div className="card-header d-flex align-items-center border-bottom">
                                <span className="avatar text-bg-primary avatar-lg fs-5">S</span>
                                <div className="ms-3">
                                    <h6 className="mb-0 fs-sm">Zlaata</h6>
                                    <span className="text-muted fs-sm">Sheshnath Chauhan</span>
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
                                            <a className="dropdown-item" href="#" onClick={deleteCard}>
                                                <i className="fa fa-trash me-3"></i>Delete
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#" onClick={(event) => moveOrderToSpecificColumn(event, 'inProgress')}>
                                                <i className="fa fa-arrow-right me-3"></i>Move to In Progress
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#" onClick={(event) => moveOrderToSpecificColumn(event, 'todo')}>
                                                <i className="fa fa-arrow-left me-3"></i>Move to To-Do
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#" onClick={(event) => moveOrderToSpecificColumn(event, 'done')}>
                                                <i className="fa fa-check me-3"></i>Move to Done
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <div className="card-body">
                                <p className='mb-1 fs-sm'><span className='fw-bold'>Task: </span>Blog Page Layout 1</p>
                                <p className='mb-1 fs-sm'><span className='fw-bold'>Priority: </span><span className="badge rounded-pill text-bg-danger px-2 py-1">High</span></p>
                                <p className="card-text fs-sm">
                                    <span className='fw-bold'>Description: </span>This impressive paella is a perfect party dish and a fun meal.
                                </p>
                                <p className='mb-1 fs-sm'><span className='fw-bold'>Start Date: </span>23 July 2024</p>
                                <p className='mb-1 fs-sm'><span className='fw-bold'>End Date: </span>23 July 2024</p>
                            </div>
                            <div className="card-footer d-flex align-items-center">
                                <button className="btn btn-link p-0 me-auto fw-bold" href="#">Remarks</button>
                                <button className="btn btn-danger rounded-5 me-3" type="button" onClick={removeCard}>
                                    <i className="fa fa-remove fa-lg"></i>
                                </button>
                                <button className="btn btn-success rounded-5" type="button" onClick={moveOrder}>
                                    <i className="fa fa-check fa-lg"></i>
                                </button>
                            </div>
                        </div>
                     </div>
                     <div id="task-2" className="task-card task_status_card" draggable="true" onDragStart={dragStart}>
                        <div className="card border-0">
                            <div className="card-header d-flex align-items-center border-bottom">
                                <span className="avatar text-bg-primary avatar-lg fs-5">S</span>
                                <div className="ms-3">
                                    <h6 className="mb-0 fs-sm">Zlaata</h6>
                                    <span className="text-muted fs-sm">Sheshnath Chauhan</span>
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
                                        <li>
                                            <a className="dropdown-item" href="#" onClick={(event) => moveOrderToSpecificColumn(event, 'inProgress')}>
                                                <i className="fa fa-arrow-right me-3"></i>Move to In Progress
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#" onClick={(event) => moveOrderToSpecificColumn(event, 'todo')}>
                                                <i className="fa fa-arrow-left me-3"></i>Move to To-Do
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#" onClick={(event) => moveOrderToSpecificColumn(event, 'done')}>
                                                <i className="fa fa-check me-3"></i>Move to Done
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <div className="card-body">
                                <p className='mb-1 fs-sm'><span className='fw-bold'>Task: </span>Blog Page Layout 2</p>
                                <p className='mb-1 fs-sm'><span className='fw-bold'>Priority: </span><span className="badge rounded-pill text-bg-danger px-2 py-1">Medium</span></p>
                                <p className="card-text fs-sm">
                                    <span className='fw-bold'>Description: </span>This impressive paella is a perfect party dish and a fun meal.
                                </p>
                                <p className='mb-1 fs-sm'><span className='fw-bold'>Start Date: </span>23 July 2024</p>
                                <p className='mb-1 fs-sm'><span className='fw-bold'>End Date: </span>23 July 2024</p>
                            </div>
                            <div className="card-footer d-flex align-items-center">
                                <button className="btn btn-link p-0 me-auto fw-bold" href="#">Remarks</button>
                                <button className="btn btn-danger rounded-5 me-3" type="button" onClick={removeCard}>
                                    <i className="fa fa-remove fa-lg"></i>
                                </button>
                                <button className="btn btn-success rounded-5" type="button" onClick={moveOrder}>
                                    <i className="fa fa-check fa-lg"></i>
                                </button>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="column boardColumn" id="inProgress" onDrop={dropIt} onDragOver={allowDrop}>
                    <div className="progress_board_heading d-flex justify-content-between align-items-center p-2 gap-20">
                        <h3 className="mb-0 todo_section fs-6" data-info="inProgress">In Progress</h3>
                    </div>
                    {/* <div id="task-3" className="task-card task_status_card" draggable="true" onDragStart={dragStart}>
                        <div className="card  border-0 cards_progress_bay">
                            <div className="card-header d-flex align-items-center border-bottom">
                                <span className="avatar text-bg-primary avatar-lg fs-5">S</span>
                                <div className="ms-3">
                                    <h6 className="mb-0 fs-sm">Zlaata</h6>
                                    <span className="text-muted fs-sm">Sheshnath Chauhan</span>
                                </div>
                                <div className="dropstart ms-auto">
                                    <button className="btn text-muted" type="btn" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fa fa-ellipsis-v"></i>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a href="#" className="dropdown-item"><i className="fa fa-pencil me-3"></i>Edit</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#"><i className="fa fa-trash me-3"></i>Delete</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#" onClick={(event) => moveOrderToSpecificColumn(event, 'inProgress')}>
                                                <i className="fa fa-arrow-right me-3"></i>Move to In Progress
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#" onClick={(event) => moveOrderToSpecificColumn(event, 'todo')}>
                                                <i className="fa fa-arrow-left me-3"></i>Move to To-Do
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#" onClick={(event) => moveOrderToSpecificColumn(event, 'done')}>
                                                <i className="fa fa-check me-3"></i>Move to Done
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card-body">
                                <p className='mb-1 fs-sm'><span className='fw-bold'>Task: </span>Blog Page Layout</p>
                                <p className='mb-1 fs-sm'><span className='fw-bold'>Priority: </span><span className="badge rounded-pill text-bg-danger px-2 py-1">Low</span></p>
                                <p className="card-text fs-sm">
                                    <span className='fw-bold'>Description: </span>This impressive paella is a perfect party dish and a fun meal.
                                </p>
                                <p className='mb-1 fs-sm'><span className='fw-bold'>Start Date: </span>23 July 2024</p>
                                <p className='mb-1 fs-sm'><span className='fw-bold'>End Date: </span>23 July 2024</p>
                            </div>
                            <div className="card-footer d-flex align-items-center">
                                <button className="btn btn-link p-0 me-auto fw-bold" href="#">Remarks</button>
                                <button className="btn btn-danger rounded-5 me-3" type="button" onClick={removeCard}>
                                    <i className="fa fa-remove fa-lg"></i>
                                </button>
                                <button className="btn btn-success rounded-5" type="button" onClick={moveOrder}>
                                    <i className="fa fa-check fa-lg"></i>
                                </button>
                            </div>
                        </div>
                    </div> */}
                    {
                        inprogress?.map((item, index) => {
                            return (
                                <>
                                    <div id={`${item.id}`} key={index} className="task-card task_status_card" draggable="true" onDragStart={dragStart}>
                                        <div className="card border-0">
                                            <div className="card-header d-flex align-items-center border-bottom">
                                                <span className="avatar text-bg-primary avatar-lg fs-5">{item?.emp_name.slice(0, 1).toUpperCase()}</span>
                                                <div className="ms-3">
                                                    <h6 className="mb-0 fs-sm">{item.project_name}</h6>
                                                    <span className="text-muted fs-sm">{item.emp_name}</span>
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
                                                            <a className="dropdown-item" onClick={() => deleteCard(item.id)}>
                                                                <i className="fa fa-trash me-3"></i>Delete
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="#" onClick={(event) => moveOrderToSpecificColumn(event, 'inProgress', item.id)}>
                                                                <i className="fa fa-arrow-right me-3"></i>Move to inProgress
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="#" onClick={(event) => moveOrderToSpecificColumn(event, 'ToDo' ,  item.id)}>
                                                                <i className="fa fa-arrow-left me-3"></i>Move to ToDo
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="#" onClick={(event) => moveOrderToSpecificColumn(event, 'Done' ,  item.id)}>
                                                                <i className="fa fa-check me-3"></i>Move to Done
                                                            </a>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <p className='mb-1 fs-sm'><span className='fw-bold'>Task: </span>{item.project_title}</p>
                                                <p className='mb-1 fs-sm'><span className='fw-bold'>Priority: </span><span className="badge rounded-pill text-bg-danger px-2 py-1">{item.priority}</span></p>
                                                <p className="card-text fs-sm">
                                                    <span className='fw-bold'>Description: </span>{item.description}
                                                </p>
                                                <p className='mb-1 fs-sm'><span className='fw-bold'>Start Date: </span>{formatDate(item.start_date)}</p>
                                                <p className='mb-1 fs-sm'><span className='fw-bold'>End Date: </span>{formatDate(item.end_date)}</p>
                                            </div>
                                            <div className="card-footer d-flex align-items-center">
                                                <p className="mb-0 text-primary p-0 me-auto fw-bold">#{item.id}</p>
                                                <button className="btn btn-danger rounded-5 me-3 removeTask" type="button" onClick={removeCard}>
                                                    <i className="fa fa-remove fa-lg"></i>
                                                </button>
                                                <button className="btn btn-success rounded-5 aproveTask" type="button" onClick={moveOrder}>
                                                    <i className="fa fa-check fa-lg"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                <div className="column boardColumn" id="Done" onDrop={dropIt} onDragOver={allowDrop}>
                    <div className="progress_board_heading d-flex justify-content-between align-items-center p-2 gap-20">
                        <h3 className="mb-0 todo_section fs-6" data-info="Done">Done</h3>
                    </div>
                    {
                        done?.map((item, index) => {
                            return (
                                <>
                                    <div id={`${item.id}`} key={index} className="task-card task_status_card" draggable="true" onDragStart={dragStart}>
                                        <div className="card border-0">
                                            <div className="card-header d-flex align-items-center border-bottom">
                                                <span className="avatar text-bg-primary avatar-lg fs-5">{item?.emp_name.slice(0, 1).toUpperCase()}</span>
                                                <div className="ms-3">
                                                    <h6 className="mb-0 fs-sm">{item.project_name}</h6>
                                                    <span className="text-muted fs-sm">{item.emp_name}</span>
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
                                                            <a className="dropdown-item" onClick={() => deleteCard(item.id)}>
                                                                <i className="fa fa-trash me-3"></i>Delete
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="#" onClick={(event) => moveOrderToSpecificColumn(event, 'inProgress', item.id)}>
                                                                <i className="fa fa-arrow-right me-3"></i>Move to inProgress
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="#" onClick={(event) => moveOrderToSpecificColumn(event, 'ToDo', item.id)}>
                                                                <i className="fa fa-arrow-left me-3"></i>Move to To-Do
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="#" onClick={(event) => moveOrderToSpecificColumn(event, 'Done' , item.id)}>
                                                                <i className="fa fa-check me-3"></i>Move to Done
                                                            </a>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <p className='mb-1 fs-sm'><span className='fw-bold'>Task: </span>{item.project_title}</p>
                                                <p className='mb-1 fs-sm'><span className='fw-bold'>Priority: </span><span className="badge rounded-pill text-bg-danger px-2 py-1">{item.priority}</span></p>
                                                <p className="card-text fs-sm">
                                                    <span className='fw-bold'>Description: </span>{item.description}
                                                </p>
                                                <p className='mb-1 fs-sm'><span className='fw-bold'>Start Date: </span>{formatDate(item.start_date)}</p>
                                                <p className='mb-1 fs-sm'><span className='fw-bold'>End Date: </span>{formatDate(item.end_date)}</p>
                                            </div>
                                            <div className="card-footer d-flex align-items-center">
                                                <p className="mb-0 text-primary p-0 me-auto fw-bold">#{item.id}</p>
                                                <button className="btn btn-danger rounded-5 me-3 removeTask" type="button" onClick={removeCard}>
                                                    <i className="fa fa-remove fa-lg"></i>
                                                </button>
                                                <button className="btn btn-success rounded-5 aproveTask" type="button" onClick={moveOrder}>
                                                    <i className="fa fa-check fa-lg"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

// Drag and drop functions

function allowDrop(ev) {
    ev.preventDefault();
}

function dragStart(ev) {
    ev.dataTransfer.setData("text/plain", ev.target.id);
}

function dropIt(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text/plain"); 
    const draggedElement = document.getElementById(data);
    let columnHeading;
    if (ev.target.className.includes("column")) {
        ev.target.appendChild(draggedElement);
        columnHeading = ev.target.querySelector(".progress_board_heading h3").dataset.info;
        axios.patch(`${myurl}/api/myupdate/${data}`, { status: columnHeading })
        .then(response => { console.log(`Task moved to "${columnHeading}" successful` );})
        .catch(error => {   console.error(error);  }); 
    } else if (ev.target.className.includes("task-card")) {
        ev.target.parentElement.appendChild(draggedElement);
        columnHeading = ev.target.parentElement.querySelector(".progress_board_heading h3").dataset.info;
        axios.patch(`${myurl}/api/myupdate/${data}`, { status: columnHeading })
        .then(response => {   console.log(`Task moved to "${columnHeading}" successful`);})
        .catch(error => {   console.error(error);  }); 
    }

    const moveButton = draggedElement.querySelector('.btn-success');
    const currentColumn = draggedElement.closest('.boardColumn').id;
    if (currentColumn !== 'Done') {
        moveButton.removeAttribute('disabled');
        moveButton.classList.remove('disabled');
        console.log(`Moved task to "${columnHeading}" and re-enabled the button`);
    } else {
        console.log(`Task moved to "${columnHeading}"`);
    }
}

// Move card from one section to another
function moveOrder(event) {
    const button = event.currentTarget;
    const taskCard = button.closest('.task-card');
    const currentColumn = taskCard.closest('.boardColumn');
    const currentMoveValue = currentColumn.id;
    console.log(currentMoveValue , currentColumn)
    const moveOrder = ['ToDo', 'inProgress', 'Done'];
    const currentIndex = moveOrder.indexOf(currentMoveValue);
    let targetIndex = currentIndex + 1;

    if (targetIndex < moveOrder.length) {
        const targetState = moveOrder[targetIndex];
        const destinationElement = document.getElementById(targetState);

        if (destinationElement) {
            destinationElement.appendChild(taskCard);
            console.log(`Moved task from ${currentMoveValue} to ${targetState}`);

            if (targetState === 'Done') {
                button.setAttribute('disabled', 'true');
                button.classList.add('disabled');
            }
        } else {
            console.warn(`Destination with ID ${targetState} not found.`);
        }
    } else {
        console.warn(`Cannot move from ${currentMoveValue} to any further state.`);
    }
}

function moveOrderToSpecificColumn(event, targetState, id) {
    event.preventDefault();
    const taskCard = event.currentTarget.closest('.task-card');
    const destinationElement = document.getElementById(targetState);
    axios.patch(`${myurl}/api/myupdate/${id}`, { status: targetState })
        .then(response => {
            if (response.data.Message === "Success") {
                if (destinationElement) {
                    destinationElement.appendChild(taskCard);
                    console.log(`Moved task to ${targetState}`);
                    const moveButton = taskCard.querySelector('.btn-success');
                    if (targetState === 'Done') {
                        moveButton.setAttribute('disabled', 'true');
                        moveButton.classList.add('disabled');
                    } else {
                        moveButton.removeAttribute('disabled');
                        moveButton.classList.remove('disabled');
                    }
                } else {
                    console.warn(`Destination with ID ${targetState} not found.`);
                }
            }
            else {
                console.log(response.data.Error);
            }
        })
        .catch(error => {
            console.error(error);
        });


}
// function moveOrderToSpecificColumn(event, targetState) {
//     event.preventDefault();
//     const taskCard = event.currentTarget.closest('.task-card');
//     const destinationElement = document.getElementById(targetState);

//     if (destinationElement) {
//         destinationElement.appendChild(taskCard);
//         console.log(`Moved task to ${targetState}`);

//         const moveButton = taskCard.querySelector('.btn-success');

//         if (targetState === 'done') {
//             moveButton.setAttribute('disabled', 'true');
//             moveButton.classList.add('disabled');
//         } else {
//             moveButton.removeAttribute('disabled');
//             moveButton.classList.remove('disabled');
//         }
//     } else {
//         console.warn(`Destination with ID ${targetState} not found.`);
//     }
// }

function removeCard(event) {
    const taskCard = event.currentTarget.closest('.task-card');
    if (taskCard) {
        taskCard.remove();
        console.log('Item removed');
    }
}

// Delete Task Card
function deleteCard(event) {
    const confirmDel = window.confirm("Are you sure you want to delete?")
    if (confirmDel) {
        axios.delete(`${myurl}/api/deletetask/${event}`)
            .then(response => {
                if (response.data.Message === "Success") {
                    window.location.reload()
                }
                else {
                    console.log(response.data.Error);
                }
            })
            .catch(error => {
                console.error(error);
            });
    }
}

export default Dnd;
