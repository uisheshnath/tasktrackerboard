import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../../components/header/Header'
import Dashboard from '../dashboard/Dashboard'
let myurls = process.env.REACT_APP_COMMONURL

const Main = () => {
  return (
    <>
      <Header />
      <Dashboard />
    </>
  )
}

export default Main