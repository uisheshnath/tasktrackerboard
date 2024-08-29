import React, { useState, useEffect } from 'react';
import UserContext from './UserContext';

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Simulated user data fetch
        const fetchedUser = {
            id: 14,
            emp_name: "admin",
            emp_id: "sw-02",
            emp_email: "admin@gmail.com",
            emp_password: "admin@gmail.com",
            reporting_to: "amit kumar",
            reporting_to_id: "sw-676",
            designation: "hod",
            department: "frontend"
        };
        setUser(fetchedUser);
    }, []);

    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
