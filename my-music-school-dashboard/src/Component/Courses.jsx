import React from 'react'
import Cours from "./Cours.json"; 
function Courses() {
    const courses =Cours; 
  return (
    <>
    <h1>Courses</h1>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Instructor</th>
          <th>Instrument</th>
          <th>Total Students</th>
          <th>Price</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course, index) => (
          <tr key={index}>
            <td>{course.Name}</td>
            <td>{course.Instructor}</td>
            <td>{course.Instrument}</td>
            <td>{course["Total Students"]}</td>
            <td>${course.Price.toFixed(2)}</td>
            <td>{course.Status}</td>
            <td><button>Edit</button></td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
   
  )
}

export default Courses