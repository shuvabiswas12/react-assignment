import React from "react"
import {useForm} from "react-hook-form";

function CreateUser() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
      <section id="createUser">
        <div className="user--form_container">
          <p className="form-title">Create User</p>
          <hr/>
          <div className="divider"></div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label id="name" className="from-label">Name</label>

              <input {...register("name", {required: true, minLength: 4})} type="text" htmlFor="name" className="form-control" name="name" autoComplete="off" autoCapitalize="on"/>
              {errors.name?.type === 'required' && "Name is required"}
              {errors.name?.type === 'minLength' && "minimum name's length is 4 characters."}

            </div>
            <div className="form-group">
              <label id="job" className="from-label">Job</label>

              <input defaultValue={"Software Developer"} {...register("job", {required: true})} type="text" htmlFor="job" className="form-control" name="job" autoComplete="off" autoCapitalize="on"/>
              {errors.job && <span>This field is required</span>}

            </div>
            <button type="submit" className="btn">Submit</button>
          </form>
        </div>
      </section>
  )
}

export default CreateUser
