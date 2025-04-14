import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
  const navigate = useNavigate();
  const [creds, setCreds] = useState({ name: "", email: "", password: "" })
  const handleChange = (e) => {
    setCreds({ ...creds, [e.target.id]: e.target.value })
  }
  const onSubmit = (e) => {
    e.preventDefault();
    fetch('https://inotebook-backend-6rp9.onrender.com/api/auth/createuser', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(creds)
    })
    .then(res => res.json())
    .then((res) => {
      if (res.success === true) {
        props.showAlert("Account Created Successfully","success")
        setTimeout(()=>{
          navigate('/login');
        },1000)
      } else {
      props.showAlert("Error: " + res.errors[0].msg, "error");
    }
    })
  }
  return (
    <div>
      {!localStorage.getItem('token') && <form onSubmit={onSubmit}>
        <div className="form-group my-3">
          <label>Name</label>
          <input type="text" className="form-control my-1 w-50" id="name" value={creds.name} required onChange={handleChange} placeholder="Enter name" />
        </div>
        <div className="form-group my-3">
          <label>Email address</label>
          <input type="email" className="form-control my-1 w-50" id="email" aria-describedby="emailHelp" value={creds.email} required onChange={handleChange} placeholder="Enter email" />
        </div>
        <div className="form-group my-3">
          <label>Password</label>
          <input type="password" className="form-control my-1 w-50" id="password" value={creds.password} required minLength={5} onChange={handleChange} placeholder="Enter password" />
        </div>
        <button type="submit" className="btn btn-primary">Signup</button>
      </form>}
      {localStorage.getItem('token') && <div>You are already logged in. Please logout to Create a new user.</div>}
    </div>
  )
}

export default Signup
