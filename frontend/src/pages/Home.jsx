import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
let myurl = process.env.REACT_APP_COMMONURL
function Home() {
    const [auth, setAuth] = useState(false)
    const [message, setMessage] = useState()
    axios.defaults.withCredentials=true;

    useEffect(() => {
        axios.get(`${myurl}/api`)
            .then((response) => {
                if (response.data.Status === "Success") {
                    setAuth(true)
                    setMessage(response.data.payload)
                }
                else {
                    setAuth(false)
                    setMessage(response.data)
                }
            })
            .catch((error) => {
                console.error(error)
            })
    },[])

    const handleLogout = () =>{

        axios.get(`${myurl}/api/logout`)
        .then(res => {
            console.log(res.data)
         if(res.data.Status === "Success"){
            setAuth(false)
            setMessage(res.data.payload)
            }
        })
        .catch(err => console.log(err))

    }

    


    return (
        <>
            {
                auth ?
                    <>
                      <p>You Are Authorised <br /> {JSON.stringify(message)}</p>  
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

export default Home