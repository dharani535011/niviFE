import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Smessage from '../Components/Smessage'
import axios from 'axios'
import { Othercontext } from '../Components/Context'

const Authside = () => {
    const navigate=useNavigate()
    const [users,setusers]=useState([])
    // const [msgg,setmsgg]=useState(0)
    const {loaders,userdetails}=useContext(Othercontext)
    const [loader,setloader]=loaders
    const [userdetail,setuserdetail]=userdetails
    // const [mail,setmail]=useState("")




    useEffect(()=>{
        const fetchData=async()=>{
               const res=await axios.post("https://nivibe.onrender.com/users/users",{},{
                withCredentials:true
               })
               const data=userdetail.email?userdetail.email:""
               const org=res.data.filter(val=>val.role=="user"&&val.email!==data)
               setusers(org)
              //  (org,data,res.data)
        }
        fetchData()
    },[loader])
   
    const handlemail=(mail)=>{
        childref.current.handleValueFromParent(mail)
    }
   const childref= useRef()
   const handledelete=async(email)=>{
    try {
        setloader(true)
        const res=await axios.post("https://nivibe.onrender.com/users/deleteuser",{
          mail:email
        },{
            withCredentials:true
          })
        if(res.data.message==="User and related data deleted successfully"){
       alert("User and related data deleted successfully")}
      } catch (error) {
        alert(error.message)
      }finally{
        
        setloader(false)
      }
   }
  //  (msgg)
  //  const ismsg=(num)=>{
  //       setmsgg(num)
  //  }
  return (
    <div className='aaa'>
         <div >
       <nav className='customnav'>
       <div><i className="fa-solid fa-house fa-2x" onClick={()=>navigate("/")}></i><span onClick={()=>navigate("/")}>NIVI INTERIORS</span></div>
       </nav>
    </div>
    <div>
        <div className='auth'>
            {
                users.map((val,ind)=>(
                    <React.Fragment key={ind}>
                    <div  className='auth2'><h5>{`${ind+1}.`}</h5> <h3>{val.name}</h3><h3>{val.phoneno}</h3><h3 style={{color:val.msg?"green":"red"}}>Message</h3><button onClick={()=>{
                        handlemail(val.email)
                         }}>Chat</button><button onClick={()=>handledelete(val.email)}>Delete</button></div>
                    </React.Fragment>
                ))
            }
        </div>
    </div>
    <Smessage 
    ref={childref}
    // onchange={ismsg}
    />
    </div>
  )
}

export default Authside