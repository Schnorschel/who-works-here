import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

const EmployeePreview = props => {
  return (
    // prettier-ignore
    <div className="employeePreviewCont">
        <img src={props.profileImage} alt="" /> <Link to={`/employee/${props.id}`}>{props.firstName} {props.lastName}</Link>, {props.jobTitle}
    </div>
  )
}

export default EmployeePreview
