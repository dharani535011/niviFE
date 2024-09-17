

import React, { useContext, useState } from 'react'
import dhonilog from "../../public/dhonilogin.webp"
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import axios from 'axios'
import { Othercontext } from '../Components/Context'
const validate=(values)=>{
      const error={}
     if(!values.email){
      error.email="required..."
 }
 if(!values.password){
  error.password="required..."
}
return error
}
const Signup = () => {
  const {loaders,auths}=useContext(Othercontext)
  const [loader,setloader]=loaders
  const [auth,setauth]=auths
  const [otp,setotp]=useState("")
  const navigate=useNavigate()
  const formik=useFormik({
    initialValues:{
      email:"",
      password:"",
    },
    validate,
    onSubmit:async(values)=>{
      try {
        setloader(true)
        const res=await axios.post("http://localhost:3000/users/login",{
          email:values.email,
          password:values.password,
        },{
          withCredentials:true
        })
        if(res.data.message==="login successful"){
        navigate("/")
        setauth(true)}else{
          alert(res.data.message)
        }
      } catch (error) {
        alert(error.message)
      }finally{
        formik.resetForm()
        setloader(false)
      }
      
    }
  })
  const [forget,setforget]=useState(false)
  const handlesend=async()=>{
    try {
      setloader(true)
      const res=await axios.post("http://localhost:3000/users/forgetpassword",{
        email:otp,
      },{
        withCredentials:true
      })
      if(res.data.message==="OTP send to your mail.."){
      setforget(false)
      alert(res.data.message)
      }
    } catch (error) {
      alert(error.message)
    }finally{
      setloader(false)
    }
  }
 
  return (
    <>{forget?(<div className='forget'>
      <div className='forget2'>
         <div>
          <h1>forget password</h1>
          <input type="email"
          name='email'
          placeholder='email'
          value={otp}
          onChange={(e)=>setotp(e.target.value)}
          required
          />
          <button onClick={handlesend}>Send OTP</button>
          <h6 className='otptolog' onClick={()=>setforget(false)} style={{cursor:"pointer"}}>Sign In</h6>
          
          </div>  
      </div>
      </div>):(<div className='signin'>
      <form className='customsign' onSubmit={formik.handleSubmit}>
         <div>
          <h1>Sign In</h1>
          <input type="text"
          name='email'
          placeholder='email'
          value={formik.values.email}
          onChange={formik.handleChange}
          />
          <p>{formik.errors.email}</p>
          <input type="password" 
          name='password'
          placeholder='password'
          value={formik.values.password}
          onChange={formik.handleChange}
          />
          <p>{formik.errors.password}</p>
          <button type='submit'>SignIn</button>
          <h6 className='h6'><Link style={{textDecoration:"none",color:"#800020"}} to={"/signup"}>Sign Up</Link></h6>
          <h6 onClick={()=>setforget(true)} style={{cursor:"pointer",color:"blue"}}>forget password?</h6>
          </div> 
         <div>
          <img src={dhonilog} alt="img" />
          </div> 
      </form>
      </div>)}
    </>
  )
}

export default Signup