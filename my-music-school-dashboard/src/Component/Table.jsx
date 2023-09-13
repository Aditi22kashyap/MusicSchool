import React from 'react'
import studentData from './studentData.json'; 
function Table() {
    const data = studentData; 
  return (
    <>
    
    <table>
      <thead>
        <tr>
          <th>Enr.no</th>
          <th>S.Name</th>
          <th>C.Name</th>
          <th>Fees</th>
          <th>Enr.Date</th>
        </tr>
      </thead>
      
      <tbody>
        <tr>
          <td>1</td>
          <td>John Doe</td>
          <td>Guitar</td>
          <td>$1000</td>
          <td>2023-09-13</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jane Smith</td>
          <td>Guitar</td>
          <td>$900</td>
          <td>2023-09-14</td>
        </tr>
        
        <tr>
          <td>3</td>
          <td>Jhone Smith</td>
          <td>Piano</td>
          <td>$1100</td>
          <td>2023-09-15</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Sarah Brown</td>
          <td>Flute</td>
          <td>$950</td>
          <td>2023-09-16</td>
        </tr>
        <tr>
          <td>5</td>
          <td>David Lee</td>
          <td>Guitar</td>
          <td>$1200</td>
          <td>2023-09-17</td>
        </tr>
      </tbody>
    </table>
    <br></br>
    
    <h3 className='b-e'>BEST STUDENTS</h3>
    <br></br>
   
    <table>
        <thead>
          <tr>
            <th>Reg. No</th>
            <th>F. Name</th>
            <th>L. Name</th>
            <th>Course #</th>
            <th>Total Fees</th>
            <th>Registration Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.regNo}</td>
              <td>{row.firstName}</td>
              <td>{row.lastName}</td>
              <td>{row.course}</td>
              <td>{row.totalFees}</td>
              <td>{row.regDate}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </>
  )
}

export default Table