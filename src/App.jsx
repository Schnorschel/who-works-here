import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import EmployeeDetail from './components/EmployeeDetail'
import AddEmployee from './components/AddEmployee'
import Employees from './components/Employees'
import NotFound from './pages/NotFound'

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
              <Link to="/add-employees">Add Employee</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={Employees}></Route>
        <Route exact path="/employee/:id" component={EmployeeDetail}></Route>
        <Route exact path="/add-employees" component={AddEmployee}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
