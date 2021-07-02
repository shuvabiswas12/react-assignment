import React, {useContext, useEffect} from "react"
import StateContext from "../StateContext";
import DispatchContext from "../DispatchContext";

function Message() {
    const appState = useContext(StateContext)
    const appDispatch = useContext(DispatchContext)

    function clearMessageAfterThreeSeconds() {
        setTimeout(
            function () {
                appDispatch({type: "message", value: null})
            }, 3000);
    }

    useEffect(() => {
        if (appState.message) {
            clearMessageAfterThreeSeconds()
            console.log("Hello")
        }
    })

    return (
        <div className="message-box" style={appState.message ? {display: "block"} : {display: "none"}}>
            <p className="text-blue message text-center">{appState.message}</p>
        </div>
    )
}

export default Message