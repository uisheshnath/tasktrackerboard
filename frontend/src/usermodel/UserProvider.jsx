import React, { useState, useEffect } from 'react';
import UserContext from './UserContext';
import axios from 'axios';
let myurl = process.env.REACT_APP_COMMONURL

const UserProvider = ({ children }) => {
    axios.defaults.withCredentials = true;
    const [user, setUser] = useState(null);
    const [message, setMessage] = useState([]) 
    useEffect(() => {
        axios.get(`${myurl}/api`)
          .then((response) => {
            if (response.data.Status === "Success") {
             let feters = response?.data?.payload
              const fetchedUser = {
                id: feters?.user?.id,
                emp_name: feters?.user?.emp_name,
                emp_id: feters?.user?.emp_id,
                emp_email: feters?.user?.emp_email,
                emp_password: feters?.user?.emp_password,
                reporting_to: feters?.user?.reporting_to,
                reporting_to_id: feters?.user?.reporting_to_id,
                designation: feters?.user?.designation,
                department: feters?.user?.department
            };
            setUser(fetchedUser);
            }
            else {
              setMessage(response.data.Error)
            }
          })
          .catch((error) => {
            setMessage(error.message)
          })
        
    }, []);

    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    );
};
 

export default UserProvider; 
