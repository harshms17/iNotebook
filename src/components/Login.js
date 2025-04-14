import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const navigate = useNavigate();
    const [creds, setCreds] = useState({ email: '', password: '' })
    const onSubmit = (e) => {
        e.preventDefault()
        fetch(`https://inotebook-backend-6rp9.onrender.com/api/auth/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(creds)
        }).then(res => res.json()).then((res) => {
            if (!res.authToken) {
                props.showAlert('Invalid Credentials', 'danger')
                return ;
            }
            localStorage.setItem("token", res.authToken)
            props.showAlert('Login successful',"success")
            setTimeout(()=> {
                navigate('/');
            },1000)
        })
    }
    const handleChange = (e) => {
        setCreds({ ...creds, [e.target.id]: e.target.value })
    }
    return (
        <div>
            {!localStorage.getItem('token') && <form onSubmit={onSubmit}>
                <div className="form-group my-3">
                    <label>Email address</label>
                    <input type="email" className="form-control my-1 w-50" id="email" aria-describedby="emailHelp" value={creds.email} onChange={handleChange} placeholder="Enter email" />
                </div>
                <div className="form-group my-3">
                    <label>Password</label>
                    <input type="password" className="form-control my-1 w-50" id="password" value={creds.password} onChange={handleChange} placeholder="Enter password" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>}
            {localStorage.getItem('token') && <h4>You are logged in.</h4>}
        </div>
    )
}

export default Login
