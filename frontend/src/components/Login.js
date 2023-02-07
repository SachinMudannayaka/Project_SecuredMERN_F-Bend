
import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../store';
const Login=()=>  {
  const dispatch=useDispatch();
  const history=useNavigate();

  const [inputs, setInputs] = useState({
    
    email:'',
    password:''
  });

  const handleChange=(e)=>{
setInputs(prev=>({
  ...prev,
  [e.target.name]:e.target.value
}));

  };
  const sendRequest=async()=>{
    const res=await axios.post("http://localhost:5000/api/login"
    ,{
      
      email:inputs.email,
      password:inputs.password
    }).catch(err=>console.log(err));
    const data=await res.data;
    return data;
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    sendRequest()
    .then(()=>dispatch(authActions.login()))
    .then(()=>history("/user"));
  };
  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        <Box display='flex' flexDirection={'column'} width={300} marginLeft={'auto'} marginRight={'auto'} justifyContent={'center'} alignItems={'center'}>
        <Typography variant='h2'>Login</Typography>
          
          <TextField name={'email'}onChange={handleChange} type={'email'} variant='outlined' values={inputs.email} placeholder='Email' margin='normal'/>
          <TextField name={'password'} onChange={handleChange} type={'password'} variant='outlined' values={inputs.password} placeholder='Password'margin='normal'/>
          <Button varient='contained' type='submit'>Login</Button>
          
        </Box>
      </form>
    </div>
  )
}
export default Login