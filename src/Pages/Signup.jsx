import React, { useContext, useRef } from 'react'
import dhonilog from "../../public/dhonilogin.webp"
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { Othercontext } from '../Components/Context'
import axios from 'axios'
const validate=(values)=>{
      const error={}
      if(!values.name){
         error.name="required..."
      }
      if(!values.phoneno){
        error.phoneno="required..."
     }
     if(!values.email){
      error.email="required..."
   }
   if(!values.pincode){
    error.pincode="required..."
 }
 if(!values.password){
  error.password="required..."
}
return error
}
const Signin = () => {
  const checkref=useRef()
  const {loaders,auths}=useContext(Othercontext)
  const [loader,setloader]=loaders
  const [auth,setauth]=auths
  const navigate=useNavigate()
  const formik=useFormik({
    initialValues:{
      name:"",
      phoneno:"",
      email:"",
      pincode:"",
      password:"",
    },
    validate,
    onSubmit:async(values)=>{
      try {
        setloader(true)
        const res=await axios.post("http://localhost:3000/users/signup",{
          email:values.email,
          password:values.password,
          name:values.name,
          pincode:values.pincode,
          phoneno:values.phoneno,
          msg:checkref.current.checked
        },{
          withCredentials:true
        })
        if(res.data.message==="user registered"){
        navigate("/signin")
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
  return (
    <div className='signin'>
        <form className='customsign' onSubmit={formik.handleSubmit}>
           <div>
            <h1>Sign Up</h1>
            <input type="text" 
            name='name'
            placeholder='name'
            value={formik.values.name}
            onChange={formik.handleChange}
            />
            <p>{formik.errors.name}</p>
            <input type="number"
            name='phoneno'
            placeholder='phone No'
            value={formik.values.phoneno}
            onChange={formik.handleChange}
            />
            <p>{formik.errors.phoneno}</p>
            <div>
              <p className='p'>You can reach me on WhatsApp
              </p>
            <input type="checkbox" ref={checkref} defaultChecked={true} 
            />
            </div>
            <input type="text"
            name='email'
            placeholder='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            />
            <p>{formik.errors.email}</p>
            <input type="number"
            name='pincode'
            placeholder='pincode'
            value={formik.values.pincode}
            onChange={formik.handleChange}
            />
            <p>{formik.errors.pincode}</p>
            <input type="password" 
            name='password'
            placeholder='password'
            value={formik.values.password}
            onChange={formik.handleChange}
            />
            <p>{formik.errors.password}</p>
            <button type='submit'>SignUp</button>
            <h6>Already have an account? <Link style={{textDecoration:"none"}} to={"/signin"}>Log in</Link> here</h6>
            </div> 
           <div>
            <img src={dhonilog} alt="img" />
            </div> 
        </form>
        </div>
  )
}

export default Signin
