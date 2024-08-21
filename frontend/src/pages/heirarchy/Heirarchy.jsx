import React from 'react'

import './heirarchy.css'

const Heirarchy = () => {
  return (
    <div className="container my-5">
      <h1 className="level-1 rectangle text-center">DIRECTOR</h1>
      <ol className="level-2-wrapper list-unstyled">
        <li>
          <h2 className="level-2 rectangle text-center text-white">UI HOD</h2>
          <ol className="level-3-wrapper list-unstyled">
            <li className="team_lead">
              <h3 className="level-3 rectangle text-center text-white" id="teamLead">Koustav Kumar Das</h3>
              <ol className="level-4-wrapper list-unstyled">
                <li>
                  <h4 className="level-4 rectangle text-center text-white trainee">Seshnath<span className="t_r">TR</span></h4>
                  <ol className="level-5-wrapper list-unstyled">
                    <li>
                      <h5 className="level-5 rectangle text-center text-white">Sarath</h5>
                    </li>
                  </ol>
                </li>
                <li>
                  <h4 className="level-4 rectangle text-center text-white">Ujjwal</h4>
                </li>
                <li>
                  <h4 className="level-4 rectangle text-center text-white">Pradeep</h4>
                </li>
                <li>
                  <h4 className="level-4 rectangle text-center text-white">Vishnu</h4>
                </li>
                <li>
                  <h4 className="level-4 rectangle text-center text-white">Prasad</h4>
                </li>
              </ol>
            </li>

            <li className="team_lead">
              <h3 className="level-3 rectangle text-center text-white" id="teamLead2">Koustav Kumar Das</h3>
              <ol className="level-4-wrapper list-unstyled">
                <li>
                  <h4 className="level-4 rectangle text-center text-white trainee">Seshnath<span className="t_r">TR</span></h4>
                  <ol className="level-5-wrapper list-unstyled">
                    <li>
                      <h5 className="level-5 rectangle text-center text-white">Sarath</h5>
                    </li>
                  </ol>
                </li>
                <li>
                  <h4 className="level-4 rectangle text-center text-white">Ujjwal</h4>
                </li>
                <li>
                  <h4 className="level-4 rectangle text-center text-white">Pradeep</h4>
                </li>
                <li>
                  <h4 className="level-4 rectangle text-center text-white">Vishnu</h4>
                </li>
                <li>
                  <h4 className="level-4 rectangle text-center text-white">Prasad</h4>
                </li>
              </ol>
            </li>
          </ol>
        </li>
        <li>
          <h2 className="level-2 rectangle text-center text-white">Backend HOD</h2>
          <ol className="level-3-wrapper list-unstyled">
            <li className="team_lead">
              <h3 className="level-3 rectangle text-center text-white">Manager C</h3>
              <ol className="level-4-wrapper list-unstyled">
                <li>
                  <h4 className="level-4 rectangle text-center text-white">Person A</h4>
                </li>
                <li>
                  <h4 className="level-4 rectangle text-center text-white">Person B</h4>
                </li>
                <li>
                  <h4 className="level-4 rectangle text-center text-white">Person C</h4>
                </li>
                <li>
                  <h4 className="level-4 rectangle text-center text-white">Person D</h4>
                </li>
              </ol>
            </li>
            <li className="team_lead">
              <h3 className="level-3 rectangle text-center text-white">Manager D</h3>
              <ol className="level-4-wrapper list-unstyled">
                <li>
                  <h4 className="level-4 rectangle text-center text-white">Person A</h4>
                </li>
                <li>
                  <h4 className="level-4 rectangle text-center text-white">Person B</h4>
                </li>
                <li>
                  <h4 className="level-4 rectangle text-center text-white">Person C</h4>
                </li>
                <li>
                  <h4 className="level-4 rectangle text-center text-white">Person D</h4>
                </li>
              </ol>
            </li>
          </ol>
        </li>
      </ol>
    </div>
  )
}
export default Heirarchy