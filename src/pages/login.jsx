/* eslint-disable react-hooks/rules-of-hooks */
import { Button, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'


function login() {
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = async () => {
        try {
            const res = await axios({
                method: 'POST',
                url: 'https://reqres.in/api/login',
                data: loginData,
              });
        
              if (res.status === 200) {
                localStorage.setItem('token', res.data.token);
              }
        
        } catch (error) {
            console.log("error")
        }
    }
  return (
    <div>
        <TextField id="outlined-basic" label="Email" variant="outlined" 
        value={loginData.email}
        onChange={e => setLoginData({
            ...loginData,
            email: e.target.value
        })}/>
        <TextField id="outlined-basic" label="Password" variant="outlined"
        value={loginData.password}
        onChange={e => setLoginData({
            ...loginData,
            password: e.target.value
        })}/>
        <Button variant="contained" onClick={handleSubmit}>Contained</Button>
    </div>
  )
}

export default login