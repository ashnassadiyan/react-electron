import React from 'react';
import './App.css';
import Layout from '../src/components/Layout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from '../src/pages/Dashboard'
import DepartmentIndex from './pages/Departments/DepartmentIndex'
import DepartmentCreate from './pages/Departments/CreateDeparment'
import { useSelector } from 'react-redux'
import { State } from '../src/store/index'
import Login from './pages/Login'
import RegisterScreen from './pages/Register'
import About from './pages/About'


function App() {
  const user = useSelector((state: State) => state.user)

  return (

    <div className="App">
      <>
        <Router>
          <Switch>
            {
              user !== 'guest' && user ?
                <Layout>
                  <Route path="/" exact component={Dashboard} />
                  <Route path="/department" component={DepartmentIndex} />
                  <Route path="/departmentcreate" component={DepartmentCreate} />
                </Layout>
                :
                <>
                  {
                    user === 'guest' ?
                      <RegisterScreen />
                      :
                      <Login />
                  }


                </>

            }
          </Switch>
        </Router>
      </>
    </div>
  );
}

export default App;
