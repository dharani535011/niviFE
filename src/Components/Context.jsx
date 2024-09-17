import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Othercontext=createContext()

const ContextProvider = ({children}) => {
const [loader,setloader]=useState(false)
const [auth,setauth]=useState(false)
const [userdetail,setuserdetail]=useState("")

const nav=useNavigate()


useEffect(()=>{
     const fetchdata=async()=>{
          const res=await axios.post("https://nivibe.onrender.com/users/check",{},{
            withCredentials:true
          })
          if(res.data.message==="on"){
            setauth(true)
            nav("/")
          }
         if(res.data.user){
            setuserdetail(res.data.user)
         }
     }
     fetchdata()
},[auth,loader])

// console.log(userdetail)

  return (
    <Othercontext.Provider value={{loaders:[loader,setloader],auths:[auth,setauth],
        userdetails:[userdetail,setuserdetail]
    }}>
        {children}
    </Othercontext.Provider>
  )
}

export default ContextProvider