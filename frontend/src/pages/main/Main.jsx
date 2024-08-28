import React, { useEffect, useState } from 'react'
import axios from 'axios' 
import Header from '../../components/header/Header'
import Dashboard from '../dashboard/Dashboard'
let myurls = process.env.REACT_APP_COMMONURL

const Main = () => {
  const [auth, setAuth] = useState(false)
  // const handleGet = async () =>{
  //   const response = await axios.get(`${myurls}/api`)
  //   console.log("reponse",response.data) 
  //   }
  //   useEffect(() => {
  //       handleGet()
  //       }, [])
        useEffect(() => {
          axios.get(`${myurls}/api`)
            .then(res => {
              console.log("reponse by before",res.data) 
              if (res.data.Status === "Success") {
                console.log("reponse by shesh",res.data) 
                setAuth(true)
              }
              else {
                setAuth(false)
              }
            })
            .catch(err => console.log(err))
        })



        
        const handleDelete = () => {
          axios.get(`${myurls}/api/logout`)
            .then(res => {
              console.log("reponse by ",res.data)  
            })
            .catch(err => console.log(err))
        }


  return (
    <>

{       auth ?
          <div>
             
              <h3 style={{margin:'0'}}>Welcome to dashboard </h3>
           
              
          </div>
          :
          <div>
            <h1>Not Auth</h1>
          </div>
      }

      <button onClick={handleDelete}>Logout</button>

        <Header/>
        <Dashboard/>
    </>
  )
}

export default Main