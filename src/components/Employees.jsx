import React, { useState, useEffect } from 'react'
import axios from 'axios'
import EmployeePreview from './EmployeePreview'

const Employees = props => {
  const [employeesData, setEmployeesData] = useState([])
  // prettier-ignore
  const [businesses, setBusinesses] = useState([{ name: props.bizName }])

  // Get the data structure of all businesses
  const getBusinesses = async () => {
    const apiURL = 'https://sdg-staff-directory-app.herokuapp.com/api/Company'
    const resp = await axios.get(apiURL)
    setBusinesses(resp.data)
  }

  // Get the data structure of all employees of the selected company
  const getEmployees = async () => {
    // prettier-ignore
    const apiURL = `https://sdg-staff-directory-app.herokuapp.com/api/${props.bizName}/Employees`
    const resp = await axios.get(apiURL)
    console.log(resp.data)
    setEmployeesData(resp.data)
  }

  useEffect(() => {
    getBusinesses()
    getEmployees()
  }, [])

  useEffect(() => {
    getEmployees()
  }, [props.bizName])

  return (
    // prettier-ignore
    <>
        <section className="businessesCont">
          <span>Company: </span>
          <select name="businesses" value={props.bizName} onChange={props.handleUpdateBizName}>
                      {businesses.map((biz, index) => {
                        return (
                          <option key={index} value={biz.name}>{biz.name} ({biz.numberOfEmployees})</option>
                        )
                      })}
          </select>
        </section>
        <section className="allEmployeesCont">
            {employeesData.map((employee, index) =>  {
              return (
                <EmployeePreview 
                key={index} 
                id={employee.id} 
                firstName={employee.firstName} 
                lastName={employee.lastName} 
                isFullTime={employee.isFullTime}
                jobTitle={employee.jobTitle} 
                profileImage={employee.profileImage}
                bizName={props.bizName} /> )})}
        </section>
    </>
  )
}

export default Employees
