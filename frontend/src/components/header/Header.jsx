import React, { useContext } from 'react'
import { NavLink , useNavigate } from 'react-router-dom'
import UserContext from '../../usermodel/UserContext'
import './header.css'
import axios from 'axios'
let myurl = process.env.REACT_APP_COMMONURL


const Header = () => {
    let navigate = useNavigate()
    const handleLogout = () => {
        axios.get(`${myurl}/api/logout`)
          .then(res => {
            console.log(res.data)
            if (res.data.Status === "Success") {
                navigate('/')
            }
          })
          .catch(err => console.log(err))
      }
      const { user } = useContext(UserContext);
 
    return (
        <>
            <div className='top'>
                <nav className="navbar navbar-expand-lg" data-bs-theme="light">
                    <div className="container-fluid">
                    <NavLink className="navbar-brand fw-bold" to="/dashboard">
                        <img className="task_tracker_board" src="/assets/img/task_tracker_board.svg" alt="logo" />
                    </NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="mainNav">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link header-nav-links" to={'/dashboard'}>Daily Updates</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link header-nav-links" to={'/'}>Login</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link header-nav-links" to={'/signup'}>Sign Up</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link header-nav-links"to={'/heirarchy'}>Heirarchy</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link header-nav-links">Initiatives</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link header-nav-links">Recognition</NavLink>
                                </li>
                            </ul>
                            <div className="profile_notification">
                                <div className="dropdown">
                                    <img src={process.env.PUBLIC_URL + 'assets/img/dummy/displaypic.jpeg'} alt="Jhon Doe" className='dropdown-toggle header-profile-pic rounded-5' data-bs-toggle="dropdown" aria-expanded="false" />
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <li><NavLink className="dropdown-item" to={'/dashboard'}>{user?.emp_name}</NavLink></li>
                                        <li><NavLink className="dropdown-item" to={'/profile'}>Settings</NavLink></li>
                                        <li><NavLink className="dropdown-item" onClick={handleLogout}>Sign Out</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Header