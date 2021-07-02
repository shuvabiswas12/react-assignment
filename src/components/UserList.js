import React, {useContext, useEffect, useState} from "react"
import axios from "axios";
import Message from "./Message";
import DispatchContext from "../DispatchContext";

function UserList() {
    const appDispatch = useContext(DispatchContext)
    const [isUpdateModalShowing, setShowUpdateModal] = useState(false)
    const [users, setUsers] = useState([])
    const [pageNo, setPageNo] = useState(1)
    const [first_name, setFirstName] = useState()
    const [last_name, setLastName] = useState()
    const [email, setEmail] = useState()
    const [userId, setUserId] = useState(0)

    async function getUsers() {
        let response = await axios.get(`https://reqres.in/api/users/?page=${pageNo}`)
        setUsers(response.data.data)
    }

    async function handleUpdate(e) {
        e.preventDefault()
        const url = "https://reqres.in/api/users"
        let response = await axios.put(url, {first_name, last_name, email})
        if (response.status === 200) {
            let dummyUsers = users
            for (let i = 0; i < users.length; i++) {
                if (users[i].id == userId) {
                    dummyUsers[i] = {
                        ...dummyUsers[i],
                        first_name: first_name,
                        last_name: last_name,
                        email: email,
                    }
                    break
                }
            }
            setUsers(dummyUsers)
        }
        setShowUpdateModal(false)
        appDispatch({type: "message", value: "Update is Done."})
    }

    function openUpdateModal(user) {
        setFirstName(user.first_name)
        setLastName(user.last_name)
        setEmail(user.email)
        setUserId(user.id)
        setShowUpdateModal(true)
    }

    function closeModal() {
        setShowUpdateModal(false)
    }

    useEffect(() => {
        getUsers()
    }, [pageNo])

    return (
        <>
            <Message/>
            <section id="userList">
                <div className="pagination-btns">
                    <button onClick={() => setPageNo(1)}>1</button>
                    <button onClick={() => setPageNo(2)}>2</button>
                </div>
                <div className="user-list--container">
                    {/* update modal starts */}
                    <div
                        style={{
                            display: isUpdateModalShowing ? 'block' : 'none'
                        }} className="modal" id="updateModal">
                        <div className="modal-container">
                            <p className="close">
                                <button className="closeBtn btn" onClick={() => closeModal()}>&times;</button>
                            </p>
                            <div className="user--form_container">
                                <p className="form-title">Update User</p>
                                <hr/>
                                <div className="divider"></div>
                                <form onSubmit={handleUpdate}>
                                    <div className="form-group">
                                        <label id="firstname" className="from-label">First Name</label>
                                        <input value={first_name}
                                               onChange={(e) => setFirstName(e.target.value)} type="text"
                                               htmlFor="firstname" className="form-control" name="firstname"
                                               autoComplete="off" autoCapitalize="on"/>

                                    </div>
                                    <div className="form-group">
                                        <label id="lastname" className="from-label">Last Name</label>
                                        <input value={last_name} onChange={(e) => setLastName(e.target.value)}
                                               type="text"
                                               htmlFor="lastname" className="form-control" name="lastname"
                                               autoComplete="off" autoCapitalize="on"/>
                                    </div>
                                    <div className="form-group">
                                        <label id="email" className="from-label">Email</label>
                                        <input value={email}
                                               onChange={(e) => setEmail(e.target.value)}
                                               type="text" htmlFor="email"
                                               className="form-control" name="email" autoCapitalize="off"
                                               autoComplete="off"/>
                                    </div>
                                    <button type="submit" className="btn">Update</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* update modal ends */}
                    <table>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Avatar</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map((user, index) => {
                            return <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.email}</td>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>
                                    <img src={user.avatar} alt="..." style={{width: "40%", borderRadius: "50%"}}/>
                                </td>
                                <td className="actions">
                                    <div className="btns">
                                        <button className="btn update-btn" onClick={() => openUpdateModal(user)}>Update
                                        </button>
                                        <button onClick={()=> {
                                            let dummyUsers = users.filter((item, index2)=> {
                                                return index !== index2
                                            })

                                            setUsers(dummyUsers)
                                        }} className="btn delete-btn">Delete</button>
                                    </div>
                                </td>
                            </tr>
                        })}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

export default UserList
