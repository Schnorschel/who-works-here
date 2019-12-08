import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import EmployeeDetail from './components/EmployeeDetail'
import AddEmployee from './components/AddEmployee'
import Employees from './components/Employees'
import NotFound from './pages/NotFound'
import DeleteEmployee from './components/DeleteEmployee'
import UpdateEmployee from './components/UpdateEmployee'

const App = () => {
  const [currentBusiness, setCurrentBusiness] = useState('oilers')

  const updateCurrentBusiness = e => {
    setCurrentBusiness(e.target.value)
  }

  //Capitalizes the first letter of string s
  const toSentenceCase = s => {
    return s
      .split('')
      .map((str, index) => {
        return index === 0 ? str.toUpperCase() : str
      })
      .join('')
  }

  // prettier-ignore
  return (
    <Router>
      <header>
          <h1>The {toSentenceCase(currentBusiness)} Employee Directory</h1>
        <nav>
          <ul className="navCont">
            <li className="navElem">
              <Link to="/">All Employees</Link>
            </li>
            <li className="navElem">
              <Link to="/add-employee">Add Employee</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        {/* <Route exact path="/" component={Employees}></Route> */}
        <Route exact path="/" render={() => { return <Employees bizName={currentBusiness} handleUpdateBizName={updateCurrentBusiness} />}}></Route>
        <Route exact path="/company/:bizName/employee/:id" component={EmployeeDetail}></Route>
        {/* <Route exact path="/employee/:id" render={() => { return <EmployeeDetail bizName={currentBusiness} />}}></Route> */}
        <Route exact path="/company/:bizName/del-employee/:id" component={DeleteEmployee}></Route>
        {/* <Route exact path="/add-employee" component={AddEmployee}></Route> */}
        <Route exact path="/add-employee" render={() => { return <AddEmployee bizName={currentBusiness} />}}></Route>
        <Route exact path="/company/:bizName/upd-employee/:id" component={UpdateEmployee}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
