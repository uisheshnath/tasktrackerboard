import React, { useContext } from 'react';
import UserContext from './UserContext';

const UserProfile = () => {
    const { user } = useContext(UserContext);

    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2>User Profile</h2>
            <p>Name: {user.emp_name}</p>
            <p>ID: {user.emp_id}</p>
            <p>Email: {user.emp_email}</p>
            <p>Reporting To: {user.reporting_to}</p>
            <p>Designation: {user.designation}</p>
            <p>Department: {user.department}</p>
        </div>
    );
};

export default UserProfile;
