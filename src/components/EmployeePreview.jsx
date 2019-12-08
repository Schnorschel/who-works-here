import React from 'react'
import { Link } from 'react-router-dom'

const EmployeePreview = props => {
  return (
    // prettier-ignore
    <div className="employeePreviewCont">
      <section className="imgCont">
        <img src={props.profileImage} alt="" /> 
      </section>
      <section className="nameCont">
        <span className="emplName"><Link to={{pathname: `/company/` + encodeURIComponent(props.bizName) + `/employee/${props.id}`, state: {bizName: props.bizName}}}>{props.firstName} {props.lastName}</Link></span><span className="emplId">#{props.id}</span>
        <span className="previewLabel">Job Title:</span><span className="previewValue jobTitle">{props.jobTitle}</span>
        <span className="previewLabel">Full Time:</span><span className="previewValue isFullTime">{props.isFullTime ? 'Yes' : 'No'}</span>
        {/* <span className="previewLabel">Job Title:</span><span className="previewValue jobTitle">{props.jobTitle}</span> */}
      </section>
    </div>
  )
}

export default EmployeePreview
