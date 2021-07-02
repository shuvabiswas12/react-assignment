import React, {useEffect, useState} from "react"
import axios from "axios";

function UserList() {
    const [isUpdateModalShowing, setShowUpdateModal] = useState(false)
    const [users, setUsers] = useState([])
    const [pageNo, setPageNo] = useState(1)

    async function getUsers() {
        let response = await axios.get(`https://reqres.in/api/users/?page=${pageNo}`)
        setUsers(response.data.data)
    }

    function openUpdateModal() {
        setShowUpdateModal(true)
    }

    function closeModel() {
        setShowUpdateModal(false)
    }

    function closeModalOnOutsideClick() {
        if (isUpdateModalShowing) {
            setShowUpdateModal(false)
        }
    }

    useEffect(() => {
        getUsers()
    })

    return (
        <section id="userList">
            <div className="pagination-btns">
                <button onClick={() => setPageNo(1)}>1</button>
                <button onClick={() => setPageNo(2)}>2</button>
            </div>
            <div className="user-list--container" >

                {/* update modal starts */}
                <div
                    style={{
                        display: isUpdateModalShowing ? 'block' : 'none'
                    }} className="modal" id="updateModal">
                    <div className="modal-container">
                        <p className="close">
                            <button className="closeBtn btn" onClick={() => closeModel()}>&times;</button>
                        </p>
                        <div className="user--form_container">
                            <p className="form-title">Update User</p>
                            <hr/>
                            <div className="divider"></div>
                            <form>
                                <div className="form-group">
                                    <label id="name" className="from-label">Name</label>
                                    <input type="text" htmlFor="name" className="form-control" name="name"/>
                                </div>
                                <div className="form-group">
                                    <label id="job" className="from-label">Job</label>
                                    <input type="text" htmlFor="job" className="form-control" name="job"/>
                                </div>
                                <div className="form-group">
                                    <label id="email" className="from-label">Email</label>
                                    <input type="text" htmlFor="email" className="form-control" name="email"/>
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
                    {users.map((item, index) => {
                        return <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.email}</td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>
                                <img src={item.avatar} alt="..." style={{width: "40%", borderRadius: "50%"}}/>
                            </td>
                            <td className="actions">
                                <div className="btns">
                                    <button className="btn update-btn" onClick={() => openUpdateModal()}>Update</button>
                                    <button className="btn delete-btn">Delete</button>
                                </div>
                            </td>
                        </tr>
                    })}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default UserList
