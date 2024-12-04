import React, { useEffect, useState } from 'react'
import axios from 'axios' 
import Projects from '../../components/home/projects/Projects'
import Notifications from '../../components/home/notifications/Notifications'
import Dnd from '../../components/home/dnd/Dnd' 
let myurl = process.env.REACT_APP_COMMONURL

const Dashboard = () => {


  const [auth, setAuth] = useState(false)
  const [message, setMessage] = useState([])
  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.get(`${myurl}/api`)
      .then((response) => {
        if (response.data.Status === "Success") {
          setAuth(true)
          setMessage(response.data.payload)
        }
        else {
          setAuth(false)
          setMessage(response.data.Error)
        }
      })
      .catch((error) => {
        setMessage(error.message)
      })
  }, [])

  const handleLogout = () => {
    axios.get(`${myurl}/api/logout`)
      .then(res => {
        console.log(res.data)
        if (res.data.Status === "Success") {
          setAuth(false)
          setMessage(res.data.payload)
        }
      })
      .catch(err => console.log(err))
  }


  const renderDayContent = () => {
    let designation = (message.user.designation).toLowerCase()
    switch (designation) {
      case 'intern':
        return <Interns />
      case "junior":
        return <Employee />
      case "mid":
        return <Employee />
      case "senior":
        return <Employee />
      case "tr":
        return <TRs />
      case "team lead":
        return <TLead />
      case "hod":
        return <HODs />
      default:
        return "Not Found";
    }
  };


  return (
    <>
      {
        auth ?
          <>
            <br />
            {/* <h2>Hi  {message.user.emp_name}</h2> */}
            {renderDayContent()}
            {/* <p>{JSON.stringify(message)}</p> */}
            {/* <button className='logoutbtn' onClick={handleLogout}>Logout</button> */}
          </>
          :
          <>
            <p>You Are Not Authorised {JSON.stringify(message)}</p>
          </>
      }
    </>
  )
}


// For Employee Access
const Employee = () => {
  return (
    <>
      <div className='Employee_Desk Viewer'>
        <div className="container-fluid px-3 ">
          <div className="row" >
            <Dnd />
          </div>
        </div>
      </div>
    </>
  );
};

// For TL Access
const TLead = () => {
  return (
    <>
      <div className="TL_Desk auther">
        <div className="container-fluid px-3">
          <div className="my-3">
            <div className="row">
              <Projects />
              <Notifications />
            </div>
          </div>
        </div>
        <div className="container-fluid px-3">
          <div className="row">
            <Dnd />
          </div>
        </div>
      </div>
    </>
  );
};


// For Hod Access
const HODs = () => {
  return (
    <>
      <div className="HOd_Desk auther">
        <div className="container-fluid px-3 HOd_Desk">
          <div className="my-3">
            <div className="row">
              <Projects />
              <Notifications />
            </div>
          </div>
        </div>
        <div className="container-fluid px-3">
          <div className="row">
            <Dnd />
          </div>
        </div>
      </div>
    </>
  );
};

// For TR Access

const TRs = () => {
  return (
    <>
      <div className="TRs_Desk auther">
        <div className="container-fluid px-3 ">
          <div className="my-3">
            <div className="row">
              <Projects />
              <Notifications />
            </div>
          </div>
        </div>
        <div className="container-fluid px-3">
          <div className="row">
            <Dnd />
          </div>
        </div>
      </div>
    </>
  );
};

// For Intern Access
const Interns = () => {
  return (
    <>
      <div className="Interns_Desk Viewer">
        <div className="container-fluid px-3">
          <div className="row">
            <Dnd />
          </div>
        </div>
      </div>
    </>
  );
};



export default Dashboard










