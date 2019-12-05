import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import EmployeeDetail from './components/EmployeeDetail'
import AddEmployee from './components/AddEmployee'
import Employees from './components/Employees'
import NotFound from './pages/NotFound'
import DeleteEmployee from './components/DeleteEmployee'
import UpdateEmployee from './components/UpdateEmployee'

const App = () => {
  return (
    <Router>
      <header>
        <h1>Welcome to the Oilers Employee Directory</h1>
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
      {/* prettier-ignore */}
      <Switch>
        <Route exact path="/" component={Employees}></Route>
        <Route exact path="/employee/:id" component={EmployeeDetail}></Route>
        <Route exact path="/del-employee/:id" component={DeleteEmployee} ></Route>
        <Route exact path="/add-employee" component={AddEmployee}></Route>
        <Route exact path="/upd-employee/:id" component={UpdateEmployee} ></Route>
        }<Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
