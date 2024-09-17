import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'
import { Othercontext } from './Context'
const Nav = () => {
  const {auths,loaders,userdetails}=useContext(Othercontext)
  const [auth,setauth]=auths
  const [userdetail,setuserdetail]=userdetails
  const [loader,setloader]=loaders
  const navigate=useNavigate()
  const handlelogout=async()=>{
    // ("okk")
   try {
    setloader(true)
    const res=await axios.post("https://nivibe.onrender.com/users/logout",{},{withCredentials:true})
    // alert(res.data.message)
    if(res.data.message=='Logout successful'){
      alert('Logout successful')
      setauth(false)
      window.location.reload()
    }
   } catch (error) {
     alert(error.message)
   }finally{
        setloader(false)
   }
  }
  return (
    <div>
       <nav className='customnav'>
        <div><i className="fa-solid fa-house fa-2x" onClick={()=>navigate("/")}></i><span onClick={()=>navigate("/")}>NIVI INTERIORS</span></div>
        <div><button onClick={()=>navigate("/getestimate")}>get estimate</button></div>
        {!auth?<div><button onClick={()=>navigate("/signin")}>Sign In/Up</button></div>:<div><button onClick={handlelogout}>Logout</button></div>}
        {userdetail.role=="auth"&&<div><button onClick={()=>navigate("/authside")}>Authors</button></div>}
       </nav>
    </div>
  )
}

export default Nav