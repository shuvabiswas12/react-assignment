import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter, Switch, Route} from "react-router-dom";
import CreateUser from "./components/CreateUser";
import Navbar from "./components/Navbar";
import UserList from "./components/UserList";


function Main() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path={"/"}>
            <CreateUser/>
          </Route>
          <Route path={"/users-list"}>
            <UserList/>
          </Route>
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  )
}

ReactDOM.render(<Main />, document.getElementById("root"))
