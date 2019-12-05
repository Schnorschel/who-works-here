import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

const AddEmployee = props => {
  const [employeeData, setEmployeeData] = useState({ id: 0, isFullTime: true })
  const [employeeId, setEmployeeId] = useState()
  const [toEmployeeDetail, setToEmployeeDetail] = useState(false)
  const [currentBusinessName, setCurrentBusinessName] = useState()

  //prettier-ignore
  const addNewEmployee = async () => {
    const apiURL = `https://sdg-staff-directory-app.herokuapp.com/api/${props.bizName}/Employees/`
    console.log('Attempting to call: ' + apiURL)
    const resp = await axios.post(apiURL,employeeData)
    if (resp.status !== 200) {
      console.log('status: ' + resp.status)
      return
    }
    setEmployeeId(resp.data.id)
    setToEmployeeDetail(true)
  }

  const handleUpdateTextField = e => {
    e.persist()
    console.log(e.target.name + ': ' + e.target.value)
    setEmployeeData(prev => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
  }

  const handleFormSubmission = e => {
    addNewEmployee()
  }

  useEffect(() => {
    setCurrentBusinessName(props.bizName)
  }, [])

  //prettier-ignore
  return (
    <>
      {toEmployeeDetail ? <Redirect to={`/company/${currentBusinessName}/employee/${employeeId}`} /> : typeof employeeId === 'undefined' ? null : <div>An error occurred.</div>}
      <form onSubmit={handleSubmit}>
          Business Name: {props.bizName}
        <div className="employeeDetailCont">
          {/* <section className="dataLabel dataItem">Employee Id:</section><section className="dataValue dataItem">{employeeData.id}</section> */}
          <section className="dataLabel dataItem">First name:</section><section className="dataValue dataItem"><input type="text" onChange={handleUpdateTextField} name="firstName" value={employeeData.firstName} /></section>
          <section className="dataLabel dataItem">Last name:</section><section className="dataValue dataItem"><input type="text" onChange={handleUpdateTextField} name="lastName" value={employeeData.lastName} /></section>
          <section className="dataLabel dataItem">Full time:</section><section className="dataValue dataItem"><select name="isFullTime" onChange={handleUpdateTextField} value={employeeData.isFullTime}><option value="true">Yes</option><option value="false">No</option></select></section>
          <section className="dataLabel dataItem">Birthday:</section><section className="dataValue dataItem"><input type="text" onChange={handleUpdateTextField} name="birthday" value={employeeData.birthday} /></section>
          <section className="dataLabel dataItem">Hired date:</section><section className="dataValue dataItem"><input type="text" onChange={handleUpdateTextField} name="hiredDate" value={employeeData.hiredDate} /></section>
          <section className="dataLabel dataItem">Job title:</section><section className="dataValue dataItem"><input type="text" onChange={handleUpdateTextField} name="jobTitle" value={employeeData.jobTitle} /></section>
          <section className="dataLabel dataItem">Job description:</section><section className="dataValue dataItem"><input type="text" onChange={handleUpdateTextField} name="jobDescription" value={employeeData.jobDescription} /></section>
          <section className="dataLabel dataItem">Phone number:</section><section className="dataValue dataItem"><input type="text" onChange={handleUpdateTextField} name="phoneNumber" value={employeeData.phoneNumber} /></section>
          <section className="dataLabel dataItem">Interesting fact:</section><section className="dataValue dataItem"><input type="text" onChange={handleUpdateTextField} name="interestingFact" value={employeeData.interestingFact} /></section>
          <section className="dataLabel dataItem">Street:</section><section className="dataValue dataItem"><input type="text" onChange={handleUpdateTextField} name="address" value={employeeData.address} /></section>
          <section className="dataLabel dataItem">City:</section><section className="dataValue dataItem"><input type="text" onChange={handleUpdateTextField} name="city" value={employeeData.city} /></section>
          <section className="dataLabel dataItem">State:</section><section className="dataValue dataItem"><input type="text" onChange={handleUpdateTextField} name="state" value={employeeData.state} /></section>
          <section className="dataLabel dataItem">Zip:</section><section className="dataValue dataItem"><input type="text" onChange={handleUpdateTextField} name="zip" value={employeeData.zip} /></section>
          <section className="dataLabel dataItem">Salary:</section><section className="dataValue dataItem"><input type="text" onChange={handleUpdateTextField} name="salary" value={employeeData.salary} /></section>
          <section className="dataLabel dataItem">Gender:</section><section className="dataValue dataItem"><input type="text" onChange={handleUpdateTextField} name="gender" value={employeeData.gender} /></section>
          <section className="dataLabel dataItem">Email:</section><section className="dataValue dataItem"><input type="text" onChange={handleUpdateTextField} name="email" value={employeeData.email} /></section>
          <section className="dataLabel dataItem">Emergency contact:</section><section className="dataValue dataItem"><input type="text" onChange={handleUpdateTextField} name="emergencyContactPerson" value={employeeData.emergencyContactPerson} /></section>
          <section className="dataLabel dataItem">Emergency contact phone:</section><section className="dataValue dataItem"><input type="text" onChange={handleUpdateTextField} name="emergencyContactPhone" value={employeeData.emergencyContactPhone} /></section>
          <section className="dataLabel dataItem">Emergency contact address:</section><section className="dataValue dataItem"><input type="text" onChange={handleUpdateTextField} name="emergencyContactAddress" value={employeeData.emergencyContactAddress} /></section>
          <section className="dataLabel dataItem">PTO hours:</section><section className="dataValue dataItem"><input type="text" onChange={handleUpdateTextField} name="ptoHours" value={employeeData.ptoHours} /></section>
          <section className="dataLabel dataItem">Profile image URL:</section><section className="dataValue dataItem"><input type="text" onChange={handleUpdateTextField} name="profileImage" value={employeeData.profileImage} /></section>
          <section className="dataLabel dataItem"></section><section className="dataValue dataItem"><button name="addNewEmployee" onClick={handleFormSubmission}>Add New Employee</button></section>
        </div>
      </form>
    </>
      )
}

export default AddEmployee
