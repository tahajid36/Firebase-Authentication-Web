import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router";
import { auth } from "../../firebase.config";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setshowPassword] = useState(false)

  const handleShowPass = (event) => {
    event.preventDefault()
    setshowPassword(!showPassword)

  }
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const Password = e.target.password.value;
    const User = e.target.username.value;
    const PassPattern = /^(?=.*[a-z])(?=.*[A-Z]).+$/;

    if (!PassPattern.test(Password)) {
      setError("Must have atleast 1 upper and Lower case");
      return;
    }
    //error message reset
    setError("");
    //success or error status set
    setSuccess(false);

    createUserWithEmailAndPassword(auth, email, Password)
      .then((result) => {
        console.log(result.user);
        setSuccess(true);
        e.target.reset();
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
        //Client side validation types to ensure correct data
        if (!email || !Password) {
          setError("All fields are Required");
        }
      });
    console.log(
      `User Registered Name: ${User} Email: ${email} Password: ${Password}`
    );
  



  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-col">
        <div className="text-center lg:text-center">
          <h1 className="text-5xl font-bold">Register Now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                {/* Email field here  */}
                <label className="label">Username</label>
                <input
                  type="text"
                  name="username"
                  className="input"
                  placeholder="username"
                />
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <div className="relative">
                  {/* show password by button function */}
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    className="input"
                    placeholder="Password"
                  />
                  <button onClick={handleShowPass}
                   className="absolute rounded-full right-6 top-2 btn btn-xs">
                      {showPassword ?  <FaEyeSlash />: <FaRegEye /> }


                  </button>
                </div>
                <div>
                  <label className="label">
                  <input type="checkbox" defaultChecked className="checkbox checkbox-sm" />
                  I accept to the terms and conditions

                  </label>
                </div>
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
            </form>
            <p>
              Already have an account?{" "}
              <Link to="/login" className="text-purple-400">
                Login
              </Link>
            </p>
            {error && <p className="text-red-700">{error}</p>}
            {success && (
              <p className="text-green-500">Account Created Successfully</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
