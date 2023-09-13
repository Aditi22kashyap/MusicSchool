import React from 'react'
import Table from './Table'
function Dashboard() {
  return (
    <>
    <h1>Overview</h1>
    <div className='parent '>
         <div className='overview-card'>
            <div className='logo '>
                <img src="https://cdn-icons-png.flaticon.com/512/5363/5363451.png" alt="people" width="40px" />
            </div>
            <div className='content'>
                <p>164</p>
                <p className='c'>total number of students </p>
                
            </div>
            </div>
            <div className='overview-card'>
            <div className='logo '>
                <img src="https://cdn-icons-png.flaticon.com/512/5363/5363451.png" alt="people" width="40px"/>
            </div>
            <div className='content'>
                <p>12</p>
                <p className='c'>total number of courses</p>     
            </div>
            </div>

            <div className='overview-card'>
            <div className='logo '>
                <img src="https://cdn-icons-png.flaticon.com/512/5363/5363451.png" alt="people" width="40px"/>
            </div>
            <div className='content'>
                <p>$2000</p>
                <p className='c'>total amount earned</p>     
            </div>
            </div>

            <div className='overview-card'>
            <div className='logo '>
                <img src="https://cdn-icons-png.flaticon.com/512/5363/5363451.png" alt="people" width="40px"/>
            </div>
            <div className='content'>
                <p>Guitar</p>
                <p className='c'>Best performance course</p>     
            </div>
            </div>

            <div className='overview-card'>
            <div className='logo '>
                <img src="https://cdn-icons-png.flaticon.com/512/5363/5363451.png" alt="people" width="40px"/>
            </div>
            <div className='content'>
                <p>Flute</p>
                <p className='c'>worst perfformance course</p>     
            </div>
            </div>
    </div>
    <br></br>
    <h3 className='h-e'>LATEST ENROLLMENTS</h3>
    <br></br>
   <Table/>
    </>
  )
}

export default Dashboard