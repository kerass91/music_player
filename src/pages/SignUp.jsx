
import { useNavigate } from "react-router-dom";
import {  useState } from "react";
import { singup, login, singinGoggle, } from "../components/firebase";

import {Alert,Button,TextField} from "@mui/material";

const SignUp = () => {
  
const [name, setName] = useState(null);
const [email, setEmail] = useState(null);
const [password, setPassword] = useState(null);
const [error, setError]  = useState(null)
const [haveLogin, setHaveLogin] = useState(false)



const navigate = useNavigate()

const handleHaveLogin = () => {
    setHaveLogin(!haveLogin)
}

const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
        await singup(email, password);
        navigate('/')
    } catch (err) {
        setError(err.message)
    }
}

const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
        await login(email, password);
        navigate('/')
    } catch (err) {
        setError(err.message)
    }
}


  return (
  <div className="flex justify-center h-[300px] w-[300px] mt-[50px] items-center">
   <div className="flex justify-center p-3">
      <div className="flex flex-col justify-center text-xl bg-[#2B303E] rounded-xl p-2">
         <form className="flex flex-col mb-2 items-center justify-center"
         >
            <h1
            className="font-bold text-center text-[#06b5d4c9]"
            > - SING UP - </h1>
            {!haveLogin? (<TextField id="name" label="Name" type="standard"
            onChange={(e) => setName(e.target.value)}
         sx={{
           borderRadius: 2,
           border: '1px #06b5d4c9',
           margin: 1,
           minWidth: 200,
           label:'Required',
           outline: '#06b5d4c9',
           background:'#2B303E',
           }}
         />) : null}
          <TextField id="email" label="Email" type="standard"
            onChange={(e) => setEmail(e.target.value)}
          sx={{
            borderRadius: 2,
            border: '1px #06b5d4c9',
            margin: 1,
            minWidth: 200,
            label:'Required',
            outline: '#06b5d4c9',
            background:'#2B303E',
            }}
          />
            <TextField id="password" label="Password" type="password" 
            onChange={(e) => setPassword(e.target.value)}
          sx={{
          borderRadius: 2,
          margin: 1,
          minWidth: 200,
          color: '#06b5d4c9',
          label:'Required',
          outline: '#06b5d4c9'
        
          }}
         />
         {!haveLogin?(<Button variant="outlined"
         onClick={handleSubmit}
          sx={{
          boxShadow: 1,
          borderRadius: 2,
          p: 1,
          margin: 1,
          minWidth: 250,
          color: '#06b5d4c9',
          border: '1px solid #2B303E',
          }}
         >- Registration -</Button>) : 
         (<Button variant="outlined"
         onClick={handleLogin}
          sx={{
          boxShadow: 1,
          borderRadius: 2,
          p: 1,
          margin: 1,
          minWidth: 250,
          color: '#06b5d4c9',
          border: '1px solid #2B303E',
          }}
         >- Sing In -</Button>)}

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
          onClick={handleHaveLogin}
         >{!haveLogin?'- I have an accaunt - ' : '- I don`t have an accaunt -' }</Button>
  </form> 
  </div>
  </div>
  </div>
   
  );
};

export default SignUp;
