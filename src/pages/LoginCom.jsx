
/* import { useNavigate } from "react-router-dom"; */
/* import { AuthContext } from "../../contexts/AuthContext"; */
/* import { tempUrl } from "../../contexts/ContextProvider"; */

import { useContext, useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";

import { singup, useAuth, logout, login, authen, singinGoggle, } from "../components/firebase";
import { GoogleLogin, GoogleLogout } from "react-google-login";

import {
  Box,Typography,Paper,Alert,Button,TextField,Snackbar} from "@mui/material";




const LoginCom = () => {
  
  /* сonst [name, setName] = useState(null); */
  const [email, setEmail] = useState(null);
  const [url, setUrl] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);
  

  /* const emailRef = useRef(); */
/*   const passwordRef = useRef(); */
  const [loading, setLoading] = useState(false);
  /* const currentUser = useAuth();  */


  

  const responseGoogle = (res) => {
  
    setName(res.profileObj.name);
    setEmail(res.profileObj.email);
    setUrl(res.profileObj.imageUrl);
    setLoginStatus(true); 
  };


  /* const logout1 = () => {
    console.log("logout");
    setLoginStatus(false);
  }; */

/*   const responseGoogle = (res) => {
    console.log(res);

    setEmail(res.profileObj.email);
    setUrl(res.profileObj.imageUrl);
    setLoginStatus(true);
  }; */
/* 
  const handleSingup = async() => {
    setLoading(true);
    try{
      await singup(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert('Something is wrong')
    }
      
    setLoading(false);
    
  } */

/*   const handleLogin = async() => {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert('Error')
    }
    setLoading(false);
    
  } */
/* 
const handleLogout = async() => {
  setLoading(true);
  try {
    logout()
  } catch {
    alert("Error!")
  }
  setLoading(true);
  
}  */


  return (
  <div className="flex justify-center h-[300px] w-[300px] mt-[50px] items-center">

   <div className="flex justify-center p-3">
      <div className="flex flex-col justify-center text-xl bg-[#2B303E] rounded-xl p-2">
         <div className="flex flex-col mb-2 items-center justify-center">
            <h1
            className="font-bold text-center text-[#06b5d4c9]"
            > - SING UP - </h1>
          <TextField id="email" label="Email" type="standard"
         
          sx={{
            borderRadius: 2,
            border: '1px #06b5d4c9',
            margin: 1,
            minWidth: 200,
            label:'Required',
            outline: '#06b5d4c9',
            background:'#2B303E',
            }}
            /* ref={emailRef} */
          />
         <TextField id="password" label="Password" type="password" 
          
          sx={{
          borderRadius: 2,
          margin: 1,
          minWidth: 200,
          color: '#06b5d4c9',
          label:'Required',
          outline: '#06b5d4c9'
        
          }}
          /* ref={passwordRef} */
         />
          <Button variant="outlined"
         sx={{
          boxShadow: 1,
          borderRadius: 2,
          margin: 1,
          minWidth: 250,
          color: '#06b5d4c9',
          border: '1px solid #2B303E',
        }}
        /* onClick={handleLogin} */
         >- Login -</Button>
         <Button variant="outlined"
          sx={{
          boxShadow: 1,
          borderRadius: 2,
          p: 1,
          margin: 1,
          minWidth: 250,
          color: '#06b5d4c9',
          border: '1px solid #2B303E',
          }}
          /* onClick={handleSingup} */
         >- Registration -</Button>

         <Button variant="outlined"
          sx={{
          boxShadow: 1,
          borderRadius: 2,
          p: 1,
          margin: 1,
          minWidth: 250,
          color: '#06b5d4c9',
          border: '1px solid #2B303E',
          }}
          onClick ={singinGoggle}
          
          >
          <p>- Sing In with GOGGLE -</p>
          </Button>
  </div>
  </div>
  </div>
  </div>

  /* <div className="card">

      {!currentUser && (
        <> 
        <span className="card_sp"></span>
        <h1>Sign in to account</h1>
        <span className="card_sp"></span>
        <div className="card_mail">
          <input ref={emailRef}
        placeholder="Email"
        />
          <input ref={passwordRef}
        type='password'
        placeholder="Password"
        />
        </div>
        <button disabled={loading || currentUser} onClick={handleSingup}>Sign up</button>
        <button disabled={loading || currentUser} onClick={handleLogin}>Login</button>

        <span className="card_sp"></span>
         
        <GoogleLogin
          clientId="7205238352-ra6412jde9mau3uoqs5hrnlk5gj18bia.apps.googleusercontent.com"
          buttonText="Sing in with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
        <button
        onClick ={singinGoggle}
        >
          Sing with goggle
        </button>
        </> 
      )} 
      {currentUser && (
        <>
         <h1>My Data</h1>
          <p>{name}</p>
          <p>{email|| currentUser.email}</p>
          <img src={url} alt={name} />
          <span className="card_sp"></span>
          <button onClick={handleLogout}>Log out</button>
          <GoogleLogout
            clientId="7205238352-ra6412jde9mau3uoqs5hrnlk5gj18bia.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={logout1}
          />
        </>
      )}
    </div> */

     
  );
};

export default LoginCom;
