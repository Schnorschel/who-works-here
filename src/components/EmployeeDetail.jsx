import React, { useState, useEffect } from 'react'
import axios from 'axios'

const EmployeeDetail = props => {
  const [employeeData, setEmployeeData] = useState()

  const getEmployee = async () => {
    // prettier-ignore
    const apiURL = `https://sdg-staff-directory-app.herokuapp.com/api/oilers/Employees/${props.match.params.id}`
    const resp = await axios.get(apiURL)
    console.log(resp.data)
    setEmployeeData(resp.data)
  }

  useEffect(() => {
    getEmployee()
  }, [])

  // prettier-ignore
  return <>
     {employeeData && <div className="employeeDetailCont">
     <section className="dataLabel dataItem">Employee Id:</section><section className="dataValue dataItem">{employeeData.id}</section>
      <section className="dataLabel dataItem">Name:</section><section className="dataValue dataItem">{employeeData.firstName} {employeeData.lastName}</section>
      <section className="dataLabel dataItem">Full time:</section><section className="dataValue dataItem">{ employeeData.isFullTime ? 'Yes' : 'No'}</section>
      <section className="dataLabel dataItem">Birthday:</section><section className="dataValue dataItem">{employeeData.birthday}</section>
      <section className="dataLabel dataItem">Hired date:</section><section className="dataValue dataItem">{employeeData.hiredDate}</section>
      <section className="dataLabel dataItem">Job title:</section><section className="dataValue dataItem">{employeeData.jobTitle}</section>
      <section className="dataLabel dataItem">Job description:</section><section className="dataValue dataItem">{employeeData.jobDescription}</section>
      <section className="dataLabel dataItem">Phone number:</section><section className="dataValue dataItem">{employeeData.phoneNumber}</section>
      <section className="dataLabel dataItem">Interesting fact:</section><section className="dataValue dataItem">{employeeData.interestingFact}</section>
      <section className="dataLabel dataItem">Address:</section><section className="dataValue dataItem">{employeeData.address}, {employeeData.city}, {employeeData.state} {employeeData.zip} </section>
      <section className="dataLabel dataItem">Salary:</section><section className="dataValue dataItem">{employeeData.salary}</section>
      <section className="dataLabel dataItem">Gender:</section><section className="dataValue dataItem">{employeeData.gender}</section>
      <section className="dataLabel dataItem">Email:</section><section className="dataValue dataItem">{employeeData.email}</section>
      <section className="dataLabel dataItem">Emergency contact:</section><section className="dataValue dataItem">{employeeData.emergencyContactPerson}</section>
      <section className="dataLabel dataItem">Emergency contact phone:</section><section className="dataValue dataItem">{employeeData.emergencyContactPhone}</section>
      <section className="dataLabel dataItem">Emergency contact address:</section><section className="dataValue dataItem">{employeeData.emergencyContactAddress}</section>
      <section className="dataLabel dataItem">PTO hours:</section><section className="dataValue dataItem">{employeeData.ptoHours}</section>
      <section className="dataLabel dataItem">Profile image URL:</section><section className="dataValue dataItem">{employeeData.profileImage}</section>
  </div>}
  </>
}

export default EmployeeDetail
