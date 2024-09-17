import React, { useContext } from 'react'
import { useFormik } from 'formik'
import { Othercontext } from '../Components/Context'
import axios from 'axios'

const validate=(values)=>{
    const error={}
   if(!values.otp){
    error.otp="required..."
}
if(!values.password){
error.password="required..."
}
return error
}
const Changepass = () => {
  const {loaders}=useContext(Othercontext)
  const [loader,setloader]=loaders


    const formik=useFormik({
        initialValues:{
          otp:"",
          password:"",
        },
        validate,
        onSubmit:async(values)=>{
          try {
            setloader(true)
            const res=await axios.post("http://localhost:3000/users/changepassword",{
              otp:values.otp,
              password:values.password,
            },{
              withCredentials:true
            })
            if(res.data.message==="password changed successfully"){
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
    <form className='forget' onSubmit={formik.handleSubmit}>
      <div className='forget2'>
         <div>
          <h1>change password</h1>
          <input type="text"
          name='otp'
          placeholder='otp'
          value={formik.values.otp}
          onChange={formik.handleChange}
          />
          <p>{formik.errors.otp}</p>
          <input type="password" 
          name='password'
          placeholder='password'
          value={formik.values.password}
          onChange={formik.handleChange}
          />
          <p>{formik.errors.password}</p>
          <button type='submit'>change</button>
          </div>  
      </div>
      </form>
  )
}

export default Changepass