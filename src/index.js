import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {useImmerReducer} from "use-immer";
import CreateUser from "./components/CreateUser";
import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
import StateContext from "./StateContext";
import DispatchContext from "./DispatchContext";

function Main() {
    const initialState = {
        message: null,
    }

    function ourReducer(draft, action) {
        switch (action.type) {
            case "message":
                draft.message = action.value
                return
            default:
                return
        }
    }

    const [state, dispatch] = useImmerReducer(ourReducer, initialState)

    return (
        <React.StrictMode>
            <StateContext.Provider value={state}>
                <DispatchContext.Provider value={dispatch}>
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
                </DispatchContext.Provider>
            </StateContext.Provider>
        </React.StrictMode>
    )
}

ReactDOM.render(<Main/>, document.getElementById("root"))
