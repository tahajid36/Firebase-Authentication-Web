import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router';
import { auth } from '../../firebase.config';

const Login = () => {
  const [error, setError] = useState('')
  const emailRef = useRef()

  
  const handleLogin = (e) => {
    setError('')
    e.preventDefault()
    const email = e.target.email.value
    const Password = e.target.password.value
    console.log(email, Password )

    signInWithEmailAndPassword(auth, email, Password)
    .then(result =>{ console.log(result.user)
      if(!result.user.emailVerified){
        alert('Please verify ur email address')
      }
    }) 
    .catch(error => setError(error.message))

   

}
const handleForgetPassword = () => {
  const email = emailRef.current.value;
  console.log('forgot password', email)
  sendPasswordResetEmail(auth, email)
  .then(()=> {
    alert('please check email')
  })
  .catch()
}


    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-col">
          <div className="text-center lg:text-center">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleLogin}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input ref={emailRef} type="email" name='email' className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input  type="password" name='password' className="input" placeholder="Password" />
                <div onClick={handleForgetPassword}><a className="link link-hover">Forgot password?</a></div>
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
              </form>
              {
              error && <p className='text-red-600'> {error }</p>
               }
              <p>Dont't have an account? <Link to='/register' className='text-purple-400'>Register</Link></p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;