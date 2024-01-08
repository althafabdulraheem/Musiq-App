import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const AuthHook=()=>{
  const navigate=useNavigate();
  const getToken=()=>{
    const tokenString=localStorage.getItem('_token');
    // const token=JSON.parse(tokenString)
    return tokenString;
  }

  const logout=async ()=>{
      let token=getToken();
      if(token)
      {
       
          try {
            const data = await axios.post('http://127.0.0.1:8000/api/logout',{} ,{headers: { Authorization:`Bearer ${token}`}});

            if(data.status)
            {
              localStorage.clear();
              navigate('/login');
            }
            
          } catch (error) {
              localStorage.clear();
              navigate('/login');
          }
       
          
      }
      else{
           localStorage.clear();
            navigate('/login');
      }
     
  }

  return {getToken,logout}

}

export default AuthHook;