import React from 'react'
import Projects from '../../components/home/projects/Projects'
import Notifications from '../../components/home/notifications/Notifications'
import Dnd from '../../components/home/dnd/Dnd'
import Heirarchy from '../heirarchy/Heirarchy'

const Dashboard = () => {
  return (
    <>
        <div className="container-fluid px-3">
            <div className="my-3">
                <div className="row">
                    <Projects/>
                    <Notifications/>
                </div>
            </div>
        </div>
        <div className="container-fluid px-3">
          <div className="row">
            <Dnd/>
          </div>
        </div>
    </>
  )
}

export default Dashboard