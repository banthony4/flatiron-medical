import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const [error, setError] = useState([])
  const [errors, setErrors] = useState([])
  const [confirmPassword, setConfirmPassword] = useState('')
  const [docLogin, setDocLogin] = useState(true)
  const [patLogin, setPatLogin] = useState(false)
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
    birthdate: '',
    age: '',
    doc: false
  })
  
  
  const handleChange = (e) => {
    const {name, value} = e.target
    setLoginData(loginData => ({...loginData, [name]: value}) )
  }
  const handleSignUpChange = (e) => {
    const { name, value } = e.target
    setSignupData(signupData => ({...signupData, [name]: value}))
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    setError([])
    fetch(docLogin ? '/doclogin' : '/patientlogin', {
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

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    setErrors([])
    if(confirmPassword !== signupData.password){
      alert("Passwords dont' match!")
    }
    fetch('/patients',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body:JSON.stringify(signupData)
    })
    .then(r => {
      if(r.ok){
        r.json()
        .then(user => {
          setUser(user)
        }).then(() => navigate('/'))
      } else{
        r.json()
        .then(json => setErrors(json.errors))
      }
    })
  }
  
  const handleDocClick = () => {
    setDocLogin(true)
    setPatLogin(false)
    setLoginData({email: '', password: ''})
    setError([])
  }
  const handlePatClick = () => {
    setDocLogin(false)
    setPatLogin(true)
    setLoginData({email: '', password: ''})
    setError([])
  }
  const handleSignupClick = () => {
    setDocLogin(false)
    setPatLogin(false)
    setLoginData({name: '', email: '', password: '', birthdate: ''})
    setErrors([])
  }

  return (
    <div className='login'>
      <figure className='login-form-box'>
        <div className='selector'>
          <button className={docLogin ? 'active' : null} onClick={handleDocClick}>Doctor</button>
          <button className={patLogin ? 'active' : null} onClick={handlePatClick}>Patient</button>
          <button className={docLogin || patLogin ? null : 'active'} onClick={handleSignupClick}>SignUp </button>
        </div>
        {docLogin || patLogin ? 
          <form className='input-group' onSubmit={handleLoginSubmit}>
              <label className='input-label'>{docLogin ? 'Employee ' : 'Patient '}Email:</label>
              <input className='input' type='text' name='email' id='email' onChange={handleChange} value={loginData.email}></input>
              <br></br>
              <br></br>
              <br></br>
              <label className='input-label'>Password:</label>
              <input className='input' type='password' name='password' id='password' onChange={handleChange} value={loginData.password}></input>
              <br></br>
              {error ? <p className='error'>{error}</p> : null }
              <br></br>
              <a href='#' onClick={handleLoginSubmit}  value='Login' className='button'>Login</a>
              <br></br>
              <br></br>
              <br></br>
          </form>
        :
          <form className='input-group' >
            <label className='input-label'>Name:</label>
            <input className='input' type='text' name='name' id='name' onChange={handleSignUpChange} value={signupData.name}></input>
            <br></br>
            <br></br>
            <label className='input-label'>Email:</label>
            <input className='input' type='text' name='email' id='email' onChange={handleSignUpChange} value={signupData.email}></input>
            <br></br>
            <br></br>
            <label className='input-label'>Age:</label>
            <input className='input' type='text' name='age' id='age' onChange={handleSignUpChange} value={signupData.age}></input>
            <br></br>
            <br></br>
            <label className='input-label'>Birthdate:</label>
            <input className='input' type='text' placeholder='mm/dd/yyyy' name='birthdate' id='birthdate' onChange={handleSignUpChange} value={signupData.birthdate}></input>
            <br></br>
            <br></br>
            <label className='input-label'>Password:</label>
            <input className='input' type='password' name='password' id='password' onChange={handleSignUpChange} value={signupData.password}></input>
            <br></br>
            <br></br>
            <label className='input-label'>Confirm Password:</label>
            <input className='input' type='password' onChange={e => setConfirmPassword(e.target.value)}></input>
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