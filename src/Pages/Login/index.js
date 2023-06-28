import { useEffect, useState } from "react";
import axios from 'axios';
import './index.css';
import hacknitte from '../../Images/hacknitte.png'
import show from '../../Images/show.png'
import hide from '../../Images/hide.png';

//This is a test.
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // const emailPattern  = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

    // if(!email.match(emailPattern)){
    //   alert("Invalid Email");
    //   return;
    // }
    // authentication here
  };
    // const [text, setText] = useState("");
  
    // const getTest = async () => {
    //   let t = await axios.get("/api/test");
    //   setText(t.data.data);
    // }
  
    // useEffect(() => {
    //   getTest();
    // }, []);
  
    return (
      <div className="App">
        {/* <h1>{text}</h1> */}
        <div className="logo"><img className="image-hack" src={hacknitte} alt="Logo"/></div>
        <div className="hacknitte">HACKNITTE</div>
        <div className="card">
        <h1 className="welcome">WELCOME BACK</h1>
        <h4 className="login-text">Login to your account</h4>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              required="true"
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          
          
          <div className="input-wrapper">
            <input
            required="true"
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <button className="password-toggle" onClick={togglePasswordVisibility}>
            {/* <p>{showPassword ? "Hide" : "Show"}</p> */}
              <img
                className="password-eye"
                src={showPassword ? hide :  show}
                // src={hide}
                alt="Toggle Password Visibility"
              />
            </button>
          </div>
          <p className="no-account">Don't have an account?</p>
          <button type="submit" className="login-btn">
            <p className="login"><b>Log in</b></p>
          </button>
        </form>
      </div>
      </div>
    );
  }
  
export default Login;