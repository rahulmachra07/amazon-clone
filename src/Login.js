import React, { useState } from 'react'
import './Login.css';
import { Link,useNavigate} from 'react-router-dom';
import {auth} from "./firebase";

function Login() {
  const history=useNavigate();
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');

  const login=event=>{
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email,password)
      .then((auth)=>{
        history.push("/");
      })
      .catch((e)=>alert(e.message));
  };
  const register=event=>{
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email,password)
      .then((auth)=>{
        history.push("/");
      })
      .catch((e)=>alert(e.message));
  };
  return (
    <div className='login'>
      <Link to="/">
          <img className="login_logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'/>
      </Link>

      <div className='login_container'>
          <h1>Sign In</h1>
          <form>
            <h5>E-mail</h5>
            <input value={email} onChange={event=>setEmail(event.target.value)} type='email'/>
            <h5>Password</h5>
            <input value={password} onChange={event=>setPassword(event.target.value)} type='password'/>
            <button type='submit' onClick={login} className='login_signInButton'>Sign In</button>
          </form>

          <p>By signing-in you agree to Amazon's Conditions of Use & sale.Please see our Privacy Notice, our Cookies Notice and our Internet-Based ads Notice</p>
          <button onClick={register} className='login_registerButton'>Create your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login
