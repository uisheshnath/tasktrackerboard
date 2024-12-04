import React, { useState } from 'react'
import axios from 'axios';
let myurl = process.env.REACT_APP_COMMONURL

function WithTLtask(props) {
  const [emp_name, setUsername] = useState([]);
  const [emp_id, setUserid] = useState([]);
  const [project_name, setProjectname] = useState([]);
  const [project_title, setProjecttitle] = useState([]);
  const [description, setDescription] = useState([]);
  const [priority, setPriority] = useState([]);
  const [start_date, setStartdate] = useState([]);
  const [end_date, setEnddate] = useState([]);


  let data = props.record
  let project = props.project
  let user = props.user

  // console.log(data)
  // console.log(user)
  // filter Duplicate user
  const handleSubmit = (e) => {
    e.preventDefault();
    let values = {
      emp_name,
      emp_id,
      reporting_to: `${user?.emp_name}`,
      reporting_to_id: `${user?.emp_id}`,
      project_name,
      project_title,
      description,
      priority,
      start_date,
      end_date,
      status: "ToDo" //bydefault it will selected in todo
    }
    axios.post(`${myurl}/api/addtask`, values)
      .then((response) => {
        if (response.data.Message === "Success") {
          console.log(response.data);
          window.location.reload()
        }
        else {
          console.log(response.data.Error);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }


  // filter Duplicate user
  const getUniqueData = (data) => {
    const seen = new Set();
    return data.filter(item => {
      const duplicate = seen.has(item.emp_id);
      seen.add(item.emp_id);
      return !duplicate;
    });
  }
  const uniqueData = getUniqueData(data);


  // Name with id
  const handleChangename = (e) => {
    const selectedValue = e.target.value;
    const selectedItem = uniqueData.find(item => item.emp_id === selectedValue || item.emp_name === selectedValue);
    if (selectedItem) {
      setUserid(selectedItem.emp_id);
      setUsername(selectedItem.emp_name);
    }
  }

  return (
    <>
      <div className="modal-body">
        <form onSubmit={handleSubmit}>
          <h1>With TL/Admin</h1>
          <div className="mb-3">
            <label htmlFor="employeeName" className="form-label">Employee Name</label>
            <select className="form-select" id="employeeName" required onChange={handleChangename} >
              <option value='' >-Select Employee Name-</option>
              {uniqueData?.map((item) => {
                return (
                  < >
                    <option value={item.emp_id}> {item.emp_id} : {item.emp_name} </option>
                  </>
                )
              })
              }
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="projectName" className="form-label">Project Name</label>
            {/* <input type="text" className="form-control" id="projectName" placeholder="Enter Project Name"></input> */}
            <select className="form-select" id="projectName" required onChange={(e) => { setProjectname(e.target.value) }}>
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
            <input type="text" className="form-control" id="taskTitle" placeholder="Enter task title" onChange={(e) => { setProjecttitle(e.target.value) }} required></input>
          </div>
          <div className="mb-3">
            <label htmlFor="taskDescription" className="form-label">Task Description</label>
            <textarea className="form-control" id="taskDescription" rows="3" placeholder="Enter task description" onChange={(e) => { setDescription(e.target.value) }} required></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="taskPriority" className="form-label">Priority</label>
            <select className="form-select" id="taskPriority" onChange={(e) => { setPriority(e.target.value) }} required >
              <option value='' >select priority</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="startDate" className="form-label">Start Date</label>
            <input type="date" className="form-control" id="startDate" onChange={(e) => { setStartdate(e.target.value) }} required></input>
          </div>
          <div className="mb-3">
            <label htmlFor="endDate" className="form-label">End Date</label>
            <input type="date" className="form-control" id="endDate" onChange={(e) => { setEnddate(e.target.value) }} required></input>
          </div>
          <div className="modal-footer">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>

    </>
  )
}

export default WithTLtask