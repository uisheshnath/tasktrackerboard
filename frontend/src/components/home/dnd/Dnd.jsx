import React from 'react';
import './dnd.css';

const Dnd = () => {
    return (
        <div className="board">
            <div className="column" id="todo" onDrop={dropIt} onDragOver={allowDrop}>
            <div className="progress_board_heading d-flex justify-content-between align-items-center p-2 gap-20">
                <h3 className="mb-0 todo_section fs-6">To Do</h3>
                <a data-bs-toggle="modal" data-bs-target="#addTodo" aria-current="page" className="progress-area-add-section active" href="#">
                    <i className="fa fa-plus-circle fs-1"></i>
                </a>
            </div>
            <div className="modal fade" id="addTodo" tabindex="-1" aria-labelledby="addTodoLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addTodoLabel">Add New Task</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label for="employeeName" className="form-label">Employee Name</label>
                                    <input type="text" className="form-control" id="employeeName" placeholder="Enter Employee Name"></input>
                                </div>
                                <div className="mb-3">
                                    <label for="projectName" className="form-label">Project Name</label>
                                    <input type="text" className="form-control" id="projectName" placeholder="Enter Project Name"></input>
                                </div>
                                <div className="mb-3">
                                    <label for="taskTitle" className="form-label">Task Title</label>
                                    <input type="text" className="form-control" id="taskTitle" placeholder="Enter task title"></input>
                                </div>
                                <div className="mb-3">
                                    <label for="taskDescription" className="form-label">Task Description</label>
                                    <textarea className="form-control" id="taskDescription" rows="3" placeholder="Enter task description"></textarea>
                                </div>
                                <div className="mb-3">
                                    <label for="taskPriority" className="form-label">Priority</label>
                                    <select className="form-select" id="taskPriority">
                                        <option value="low">Low</option>
                                        <option value="medium">Medium</option>
                                        <option value="high">High</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label for="startDate" className="form-label">Start Date</label>
                                    <input type="date" className="form-control" id="startDate"></input>
                                </div>
                                <div className="mb-3">
                                    <label for="endDate" className="form-label">End Date</label>
                                    <input type="date" className="form-control" id="endDate"></input>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
                <div id="task-1" className="task-card task_status_card" draggable="true" onDragStart={dragStart}>
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
                                        <a className="dropdown-item" href="#"><i className="fa fa-trash me-3"></i>Move to In Progress</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#"><i className="fa fa-trash me-3"></i>Move to To-Do</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#"><i className="fa fa-trash me-3"></i>Move to Done</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="card-body">
                            <p className='mb-1 fs-sm'><span className='fw-bold'>Task: </span>Blog Page Layout</p>
                            <p className='mb-1 fs-sm'><span className='fw-bold'>Priority: </span><span className="badge rounded-pill text-bg-danger px-2 py-1">High</span></p>
                            <p className="card-text fs-sm">
                                <span className='fw-bold'>Description: </span>This impressive paella is a perfect party dish and a fun meal.
                            </p>
                            <p className='mb-1 fs-sm'><span className='fw-bold'>Start Date: </span>23 July 2024</p>
                            <p className='mb-1 fs-sm'><span className='fw-bold'>End Date: </span>23 July 2024</p>
                        </div>
                        <div className="card-footer d-flex align-items-center">
                            <button className="btn btn-link p-0 me-auto fw-bold" href="#">Remarks</button>
                            <button className="btn btn-danger rounded-5 me-3" type="button">
                                <i className="fa fa-remove fa-lg"></i>
                            </button>
                            <button className="btn btn-success rounded-5" type="button">
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
                                        <a className="dropdown-item" href="#"><i className="fa fa-trash me-3"></i>Move to In Progress</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#"><i className="fa fa-trash me-3"></i>Move to To-Do</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#"><i className="fa fa-trash me-3"></i>Move to Done</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="card-body">
                            <p className='mb-1 fs-sm'><span className='fw-bold'>Task: </span>Blog Page Layout</p>
                            <p className='mb-1 fs-sm'><span className='fw-bold'>Priority: </span><span className="badge rounded-pill text-bg-danger px-2 py-1">Medium</span></p>
                            <p className="card-text fs-sm">
                                <span className='fw-bold'>Description: </span>This impressive paella is a perfect party dish and a fun meal.
                            </p>
                            <p className='mb-1 fs-sm'><span className='fw-bold'>Start Date: </span>23 July 2024</p>
                            <p className='mb-1 fs-sm'><span className='fw-bold'>End Date: </span>23 July 2024</p>
                        </div>
                        <div className="card-footer d-flex align-items-center">
                            <button className="btn btn-link p-0 me-auto fw-bold" href="#">Remarks</button>
                            <button className="btn btn-danger rounded-5 me-3" type="button">
                                <i className="fa fa-remove fa-lg"></i>
                            </button>
                            <button className="btn btn-success rounded-5" type="button">
                                <i className="fa fa-check fa-lg"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column" id="in-progress" onDrop={dropIt} onDragOver={allowDrop}>
                <div className="progress_board_heading d-flex justify-content-between align-items-center p-2 gap-20">
                    <h3 className="mb-0 todo_section fs-6">In Progress</h3>
                    <a data-bs-toggle="modal" data-bs-target="#addInProgress" aria-current="page" className="progress-area-add-section active" href="#">
                        <i className="fa fa-plus-circle fs-1"></i>
                    </a>
                </div>
                <div className="modal fade" id="addInProgress" tabindex="-1" aria-labelledby="addInProgressLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="addTodoLabel">Add New Task</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label for="projectName" className="form-label">Project Name</label>
                                        <input type="text" className="form-control" id="projectName" placeholder="Enter Project Name"></input>
                                    </div>
                                    <div className="mb-3">
                                        <label for="taskTitle" className="form-label">Task Title</label>
                                        <input type="text" className="form-control" id="taskTitle" placeholder="Enter task title"></input>
                                    </div>
                                    <div className="mb-3">
                                        <label for="taskDescription" className="form-label">Task Description</label>
                                        <textarea className="form-control" id="taskDescription" rows="3" placeholder="Enter task description"></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label for="taskPriority" className="form-label">Priority</label>
                                        <select className="form-select" id="taskPriority">
                                            <option value="low">Low</option>
                                            <option value="medium">Medium</option>
                                            <option value="high">High</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label for="startDate" className="form-label">Start Date</label>
                                        <input type="date" className="form-control" id="startDate"></input>
                                    </div>
                                    <div className="mb-3">
                                        <label for="endDate" className="form-label">End Date</label>
                                        <input type="date" className="form-control" id="endDate"></input>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="task-3" className="task-card task_status_card" draggable="true" onDragStart={dragStart}>
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
                                        <a  href="#" className="dropdown-item"><i className="fa fa-pencil me-3"></i>Edit</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#"><i className="fa fa-trash me-3"></i>Delete</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#"><i className="fa fa-trash me-3"></i>Move to In Progress</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#"><i className="fa fa-trash me-3"></i>Move to To-Do</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#"><i className="fa fa-trash me-3"></i>Move to Done</a>
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
                            <button className="btn btn-danger rounded-5 me-3" type="button">
                                <i className="fa fa-remove fa-lg"></i>
                            </button>
                            <button className="btn btn-success rounded-5" type="button">
                                <i className="fa fa-check fa-lg"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column" id="done" onDrop={dropIt} onDragOver={allowDrop}>
            <div className="progress_board_heading d-flex justify-content-between align-items-center p-2 gap-20">
                    <h3 className="mb-0 todo_section fs-6">Done</h3>
                    <a data-bs-toggle="modal" data-bs-target="#doneState" aria-current="page" className="progress-area-add-section active" href="#">
                        <i className="fa fa-plus-circle fs-1"></i>
                    </a>
                </div>
                <div className="modal fade" id="doneState" tabindex="-1" aria-labelledby="doneStateLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="addTodoLabel">Add New Task</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label for="projectName" className="form-label">Project Name</label>
                                        <input type="text" className="form-control" id="projectName" placeholder="Enter Project Name"></input>
                                    </div>
                                    <div className="mb-3">
                                        <label for="taskTitle" className="form-label">Task Title</label>
                                        <input type="text" className="form-control" id="taskTitle" placeholder="Enter task title"></input>
                                    </div>
                                    <div className="mb-3">
                                        <label for="taskDescription" className="form-label">Task Description</label>
                                        <textarea className="form-control" id="taskDescription" rows="3" placeholder="Enter task description"></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label for="taskPriority" className="form-label">Priority</label>
                                        <select className="form-select" id="taskPriority">
                                            <option value="low">Low</option>
                                            <option value="medium">Medium</option>
                                            <option value="high">High</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label for="startDate" className="form-label">Start Date</label>
                                        <input type="date" className="form-control" id="startDate"></input>
                                    </div>
                                    <div className="mb-3">
                                        <label for="endDate" className="form-label">End Date</label>
                                        <input type="date" className="form-control" id="endDate"></input>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
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
        columnHeading = ev.target.querySelector(".progress_board_heading h3").textContent.trim();
        alert(`Task moved to "${columnHeading}"`);
    } else if (ev.target.className.includes("task-card")) {
        ev.target.parentElement.appendChild(draggedElement);
        columnHeading = ev.target.parentElement.querySelector(".progress_board_heading h3").textContent.trim();
        alert(`Task moved to "${columnHeading}"`);
    }
}


export default Dnd;
