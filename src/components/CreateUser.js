import React from "react"

function CreateUser() {
  return (
      <section id="createUser">
        <div className="user--form_container">
          <p className="form-title">Create User</p>
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
            <button type="submit" className="btn">Submit</button>
          </form>
        </div>
      </section>
  )
}

export default CreateUser
