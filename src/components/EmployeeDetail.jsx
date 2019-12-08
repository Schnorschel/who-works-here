import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'

const EmployeeDetail = props => {
  const [employeeData, setEmployeeData] = useState()
  const [toDeleteEmployee, setToDeleteEmployee] = useState(false)
  const [toUpdateEmployee, setToUpdateEmployee] = useState(false)

  const getEmployee = async () => {
    // prettier-ignore
    const apiURL = `https://sdg-staff-directory-app.herokuapp.com/api/${props.match.params.bizName}/Employees/${props.match.params.id}`
    console.log('Attempting to get: ' + apiURL)
    const resp = await axios.get(apiURL)
    console.log(resp.data)
    setEmployeeData(resp.data)
  }

  useEffect(() => {
    getEmployee()
  }, [])

  const handleDelete = e => {
    setToDeleteEmployee(true)
  }

  const handleUpdate = e => {
    setToUpdateEmployee(true)
  }

  const doesExist = obj => {
    if (typeof obj === 'undefined') return false
    if (obj == null) return false
    if (obj === '') return false
    return true
  }

  // prettier-ignore
  return <>
      {toDeleteEmployee ? <Redirect to={`/company/` + encodeURIComponent(props.match.params.bizName) + `/del-employee/${props.match.params.id}`} /> : null }
      {toUpdateEmployee ? <Redirect to={`/company/` + encodeURIComponent(props.match.params.bizName) + `/upd-employee/${props.match.params.id}`} /> : null}
      {employeeData && 
      <div className="employeeDetailCont">
        <section className="dataLabel dataItem">Employee Id:</section><section className="dataValue dataItem">{employeeData.id}</section>
        <section className="dataLabel dataItem">Name:</section><section className="dataValue dataItem">{employeeData.firstName} {employeeData.lastName}</section>
        <section className="dataLabel dataItem">Full time:</section><section className="dataValue dataItem">{ employeeData.isFullTime ? 'Yes' : 'No'}</section>
        <section className="dataLabel dataItem">Birthday:</section><section className="dataValue dataItem">{moment(employeeData.birthday).format('MMMM Do, YYYY')}</section>
        <section className="dataLabel dataItem">Hired date:</section><section className="dataValue dataItem">{moment(employeeData.hiredDate).format('MMMM Do, YYYY')}</section>
        <section className="dataLabel dataItem">Job title:</section><section className="dataValue dataItem">{employeeData.jobTitle}</section>
        <section className="dataLabel dataItem">Job description:</section><section className="dataValue dataItem">{employeeData.jobDescription}</section>
        <section className="dataLabel dataItem">Phone number:</section><section className="dataValue dataItem">{employeeData.phoneNumber}</section>
        <section className="dataLabel dataItem">Interesting fact:</section><section className="dataValue dataItem">{employeeData.interestingFact}</section>
        <section className="dataLabel dataItem">Address:</section><section className="dataValue dataItem">{employeeData.address}{ doesExist(employeeData.address) ? ', ' : '' }{employeeData.city}{doesExist(employeeData.city) ? ', ' : '' }{employeeData.state} {employeeData.zip} </section>
        <section className="dataLabel dataItem">Salary:</section><section className="dataValue dataItem">{employeeData.salary}</section>
        <section className="dataLabel dataItem">Gender:</section><section className="dataValue dataItem">{employeeData.gender}</section>
        <section className="dataLabel dataItem">Email:</section><section className="dataValue dataItem">{employeeData.email}</section>
        <section className="dataLabel dataItem">Emergency contact:</section><section className="dataValue dataItem">{employeeData.emergencyContactPerson}</section>
        <section className="dataLabel dataItem">Emergency contact phone:</section><section className="dataValue dataItem">{employeeData.emergencyContactPhone}</section>
        <section className="dataLabel dataItem">Emergency contact address:</section><section className="dataValue dataItem">{employeeData.emergencyContactAddress}</section>
        <section className="dataLabel dataItem">PTO hours:</section><section className="dataValue dataItem">{employeeData.ptoHours}</section>
        <section className="dataLabel dataItem">Profile image URL:</section><section className="dataValue dataItem">{employeeData.profileImage}</section>
        <section className="dataLabel dataItem"><button onClick={handleDelete}>Delete employee</button></section><section className="dataValue dataItem"><button onClick={handleUpdate}>Edit employee</button></section>
      </div>}
    </>
}

export default EmployeeDetail
