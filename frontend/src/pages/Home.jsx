import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
let myurl = process.env.REACT_APP_COMMONURL

function Home() {
    const [auth, setAuth] = useState(false)
    const [message, setMessage] = useState()
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
                return <Emploee />
            case "junior":
                return <Emploee />
            case "mid":
                return <Emploee />
            case "senior":
                return <Emploee />
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
                        {renderDayContent()}
                        <p>You Are Authorised <br /> </p>
                        <p>{JSON.stringify(message)}</p>   
                        <button className='logoutbtn' onClick={handleLogout}>Logout</button>
                    </>
                    :
                    <>
                        <p>You Are Not Authorised {JSON.stringify(message)}</p>
                    </>
            }
        </>
    )
}


const Emploee = () => {
    return <h3>Emploee content</h3>;
};

const TLead = () => {
    return <h3>TLead content</h3>;
};

const HODs = () => {
    return <h3>HODs content</h3>;
};

const TRs = () => {
    return <h3>TRs content</h3>;
};
const Interns = () => {
    return <h3>Interns content</h3>;
};





export default Home

