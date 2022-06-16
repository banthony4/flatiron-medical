import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const [error, setError] = useState([])
  const [errors, setErrors] = useState([])
  const [docLogin, setDocLogin] = useState(true)
  const [patLogin, setPatLogin] = useState(true)
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
    birthdate: '',
  })
  
  
  const handleChange = (e) => {
    const {name, value} = e.target
    setLoginData(loginData => ({...loginData, [name]: value}) )
  }
  const handleSignUpChange = (e) => {
    const { name, value } = e.target
    setSignupData(signupData => ({...signupData, [name]: value}))
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

  const handleSignUpSubmit = () => {
    console.log('submit')
  }
  
  const handleDocClick = () => {
    setDocLogin(true)
  }
  const handlePatClick = () => {
    setDocLogin(false)
    setPatLogin(true)
  }
  const handleSignupClick = () => {
    setDocLogin(false)
    setPatLogin(false)
  }

  return (
    <div className='login'>
      <figure className='login-form-box'>
        <div className='selector'>
          <button onClick={handleDocClick}>Doctor</button>
          <button onClick={handlePatClick}>Patient</button>
          <button onClick={handleSignupClick}>SignUp </button>
        </div>
        {docLogin || patLogin ? 
          <form onSubmit={handleSubmit} className='input-group'>
              <label for='email' className='input-label'>{docLogin ? 'Employee ' : 'Patient '}Email:</label>
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
        :
          <form className='input-group'>
            <label className='input-label'>Name:</label>
            <input className='input' type='text' name='name' id='name' onChange={handleSignUpChange} value={signupData.name}></input>
            <br></br>
            <br></br>
            <label className='input-label'>Email:</label>
            <input className='input' type='text' name='email' id='email' onChange={handleSignUpChange} value={signupData.email}></input>
            <br></br>
            <br></br>
            <label className='input-label'>Age:</label>
            <input className='input' type='text' name='age' id='email' onChange={handleSignUpChange} value={signupData.age}></input>
            <br></br>
            <br></br>
            <label className='input-label'>Birthdate:</label>
            <input className='input' type='text' name='birthdate' id='email' onChange={handleSignUpChange} value={signupData.birthdate}></input>
            <br></br>
            <br></br>
            <label for='password' className='input-label'>Password:</label>
            <input className='input' type='password' name='password' id='password' onChange={handleSignUpChange} value={signupData.password}></input>
            <br></br>
            <br></br>
            <label for='password' className='input-label'>Confirm Password:</label>
            <input className='input' type='password' name='password' id='password' onChange={handleSignUpChange} value={signupData.password}></input>
            {errors ? errors.map(e => <p className='error'>{e}</p> ) : null}
            <br></br>
            <br></br>
            <br></br>
            <a href='#' onClick={handleSignUpSubmit} className='button'>Sign Up</a>
            <br></br>
            <br></br>
            <br></br>
          </form>
        }
      </figure>
    </div>
  )
}

export default Login