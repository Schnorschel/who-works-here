import React, { useState, useEffect } from 'react'
import axios from 'axios'
import EmployeePreview from './EmployeePreview'

const Employees = () => {
  const [employeesData, setEmployeesData] = useState([])

  const getEmployees = async () => {
    // prettier-ignore
    const apiURL = 'https://sdg-staff-directory-app.herokuapp.com/api/oilers/Employees'
    const resp = await axios.get(apiURL)
    console.log(resp.data)
    setEmployeesData(resp.data)
  }

  useEffect(() => {
    getEmployees()
  }, [])

  return (
    // prettier-ignore
    <section className="allEmployeesCont">
        {employeesData.map((employee, index) =>  {
          return (
            <EmployeePreview 
              key={index} 
              id={employee.id} 
              firstName={employee.firstName} 
              lastName={employee.lastName} 
              jobTitle={employee.jobTitle} 
              profileImage={employee.profileImage} /> )})}
      </section>
  )
}

export default Employees
