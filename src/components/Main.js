import React, { createContext, useState } from 'react'
import Home from './Home/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, Redirect
} from "react-router-dom"
import Login from './Login/Login'
import PrivateRoute from './PrivateRoute/PrivateRoute'

export const loginContexApi = createContext()
const Main = () => {
  const [loginUser, setLoginUser] = useState({ isSignIn: false, name: '', email: '', photo: '' })
  return (
            <loginContexApi.Provider value={[loginUser, setLoginUser]}>
              <Router>
                <Switch>
                      <Route exact path='/'>
                        <Home></Home>
                      </Route>

                      <Route path='/login'>
                        <Login></Login>
                      </Route>

                      <PrivateRoute path='/resister/:key'>
                        <ResisterEvent></ResisterEvent>
                      </PrivateRoute>

                      

                      <PrivateRoute path='/tasks'>
                        <EventTasks></EventTasks>
                      </PrivateRoute>

                      <Route path='/adminDashboard'>
                        <AdminDashboard></AdminDashboard>
                      </Route>

                      <Route path='/adminAddEvent'>
                        <AdminAddEvent></AdminAddEvent>
                      </Route>

                      <Route path='*'>
                        <Redirect to="/" />
                      </Route>
                  </Switch>
              </Router>
            </loginContexApi.Provider>
  )
}

export default Main;