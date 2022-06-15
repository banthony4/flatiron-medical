import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = ({ setUser }) => {
  const [error, setError] = useState([])
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })
  
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const {name, value} = e.target
    setLoginData(loginData => ({...loginData, [name]: value}) )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError([])
    fetch('/login', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body:JSON.stringify(loginData),
    })
    .then(r => {
      if(r.ok){
        r.json()
        .then(user => {
          setUser(user)
        }).then(() => navigate('/'))
      } else{
        r.json()
        .then(json => setError(json.error))
      }
    })
  }
  
  return (
    <div className='login'>
      <figure className='login-form-box'>
        <form onSubmit={handleSubmit} className='input-group'>
            <label for='email' className='input-label'>Email:</label>
            <input className='input' type='text' name='email' id='email' onChange={handleChange} value={loginData.email}></input>
            <br></br>
            <br></br>
            <br></br>
            <label for='password' className='input-label'>Password:</label>
            <input className='input' type='password' name='password' id='password' onChange={handleChange} value={loginData.password}></input>
            <br></br>
            {error ? <p className='error'>{error}</p> : null }
            <br></br>
            <a href='#' onClick={handleSubmit}  value='Login' className='button'>Login</a>
            <br></br>
            <br></br>
            <br></br>
        </form>
      </figure>
    </div>
  )
}

export default Login