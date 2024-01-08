import React,{useState,useEffect,useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'
import axios from 'axios';
import {useForm} from 'react-hook-form';
import {UserName} from '../context/UserContext'
const Login=()=>{
    const{name,setName}=useContext(UserName)
    const {register,handleSubmit,formState:{errors}}=useForm();
    const[submit,setSubmit]=useState(false)
    const[authError,setauthError]=useState("")
    const navigate=useNavigate();

    // login
        const login_submit=async (data)=>{
            setSubmit(true)
            setauthError("")
           let values=data;
           try{
                const data=await axios.post('http://127.0.0.1:8000/api/login-submit',values);
               
                if(data.status === 200)
                {
                    if(data.data.name)
                    {
                        setName(data.data.name);
                        
                    }
                    setSubmit(false)
                    localStorage.clear();
                    localStorage.setItem('_token',data.data.token);   
                    
                    localStorage.setItem('user',JSON.stringify(data.data))
                    navigate('/')
                  
                }
               
            } 
           catch(error)
           {
                // console.log(error.response.status)
                // console.log(error.response.data.message)
                error.response?.data.message&&setauthError(error.response.data.message)
                setSubmit(false)
          

           }
        }

    // login ends

  
    return(
        <div className="login-wrapper">
                 <div className="my-player">
                    <div className="login-header">
                        <div className="icon d-flex justify-content-center">
                            <img src='/icon.png' style={{height:"37px"}} alt="icon"></img>

                        </div>
                        <h1 className='text-center fw-bold'>Moosik</h1>
                    </div>
                    <div className="login-body">
                        <form  onSubmit={handleSubmit((data)=>{login_submit(data)})}>
                             <div className="form-group">
                            <input type="text" placeholder="enter email" {...register('email',{required:"please enter email"})} className='form-control' name="email"/>
                            <div className="text-danger">{errors?.email&&errors.email.message}</div>
                        </div>
                        <div className="form-group">
                        <input type="password" placeholder="enter password" className='form-control' {...register('password',{required:"please enter password"})} name="password"/>
                        <div className="text-danger">{errors?.password&&errors.password.message}</div>
                        </div>
                        <div className="text-danger text-center">{authError}</div>
                        <div className="d-flex justify-content-center mt-4 ">
                            <button className='subBtn' >{submit?'Checking...':'Submit'}</button>
                        </div>
                       
                        </form>
                       
                    </div>
                </div>
        </div>
       )
}

export default Login;