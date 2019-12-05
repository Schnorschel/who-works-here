import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DeleteEmployee = props => {
  const [isDeleted, setIsDeleted] = useState()

  const delEmployee = async () => {
    // prettier-ignore
    const apiURL = `https://sdg-staff-directory-app.herokuapp.com/api/oilers/Employees/${props.match.params.id}`
    const resp = await axios.delete(apiURL)
    if (resp.status !== 200) {
      console.log('status: ' + resp.status)
      setIsDeleted(false)
      return
    }
    setIsDeleted(true)
  }

  useEffect(() => {
    delEmployee()
  }, [])

  return (
    // prettier-ignore
    <div>
      {typeof isDeleted === 'undefined' ? <div>Deleting employee {props.match.params.id}</div> : 
       isDeleted ? <div>Employee {props.match.params.id} was successfully deleted</div> : <div>An error occurred attempting to delete {props.match.params.id}</div>}
    </div>
  )
}

export default DeleteEmployee
