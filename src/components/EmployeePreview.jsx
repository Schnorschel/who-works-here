import React from 'react'
import { Link } from 'react-router-dom'

const EmployeePreview = props => {
  return (
    // prettier-ignore
    <div className="employeePreviewCont">
        <img src={props.profileImage} alt="" /> <Link to={{pathname: `/company/${props.bizName}/employee/${props.id}`, state: {bizName: props.bizName}}}>{props.firstName} {props.lastName}</Link>, {props.jobTitle}
    </div>
  )
}

export default EmployeePreview
