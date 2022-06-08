import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser }) => {
  const [error, setError] = useState([])
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })
  
  console.log('loginData: ', loginData);
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
    <div className='login-form-box'>
            <form onSubmit={handleSubmit}>
                <label>Email:
                <input type='text' name='email' onChange={handleChange} value={loginData.email}></input>
                </label>
                <label>Password:
                <input type='password' name='password' onChange={handleChange} value={loginData.password}></input>
                </label>
                <input type="submit" value='Login'/>
            </form>
            {error ? <p className='error'>{error}</p> : null }
        </div>
  )
}

export default Login