import React, { useContext } from 'react';
import UserContext from './UserContext';
import Header from '../components/header/Header';
const UserProfile = () => {
    const { user } = useContext(UserContext);

    // console.log(user)

    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <div>
           <Header />
            <h2>User Profile</h2>
            <p><b>Name :</b> {user.emp_name}</p>
            <p><b> ID :</b> {user.emp_id}</p>
            <p><b> Email :</b> {user.emp_email}</p>
            <p><b> Reporting To :</b> {user.reporting_to}</p>
            <p><b> Designation :</b> {user.designation}</p>
            <p><b>Department :</b> {user.department}</p>
        </div>
    );
};

export default UserProfile;
