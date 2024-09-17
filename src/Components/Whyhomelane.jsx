import React, { useEffect, useState } from 'react'
import whyh from "../../public/whyhome.webp"
import { useNavigate } from 'react-router-dom'
const Whyhomelane = () => {

const data=[{
    h2:"Discover",
    p:"Expolre more than just modular design ideas with our experts "
},
{
    h2:"Design",
    p:"Complete the design with painting, flooring and other decor solutions"
},{
    h2:"Move-In",
    p:"Move in with ease,our hassle free civil work and installation services "
}]
const [fadeIn, setFadeIn] = useState(true)
const [ded,setded]=useState(0)
useEffect(()=>{
   const int=setInterval(()=>{
    setFadeIn(false)
      setTimeout(()=>{
        setded(pre=>(pre+1)%data.length)
        setFadeIn(true)
      },500)
   },3000)
   return ()=>clearInterval(int)
},[data.length])
const navigate=useNavigate()

  return (
    <div className='whyhome'>
          <div className='home2'><h1>Why HomeLane Chennai?</h1></div>
          <div className='home1'>
            <div>
                <h4>Homes Delivered</h4>
                <h1>1045+</h1>
            </div>
            <div>
                <h4>HomeLane  Designers</h4>
                <h1>13</h1>
            </div>
            <div>
                <h4>HomeLane  Studios</h4>
                <h1>2</h1>
            </div>
          </div>
          <div className='bodyhome'>
            <div className='imghome'><img src={whyh} alt="img" /></div>
            <div className='body2'>
                <h3>Complete home interiors in 3 easy steps</h3>
                <span className='span1'>
                    <p style={{backgroundColor:ded==0?"blueviolet":"rgb(183, 147, 189)"}}>1</p><p className='arrow'>{`->`}</p>
                    <p style={{backgroundColor:ded==1?"blueviolet":"rgb(183, 147, 189)"}}>2</p><p className='arrow'>{`->`}</p>
                    <p style={{backgroundColor:ded==2?"blueviolet":"rgb(183, 147, 189)"}}>3</p>
                </span>
                <span className={`homeded ${fadeIn ? 'fade-in' : 'fade-out'}`}>
                    <h2>{data[ded].h2}</h2>
                    <p>{data[ded].p}</p>
                </span>
            </div>
          </div>
          <div className='bdiv'><button className='button' onClick={()=>navigate("/getestimate")}>Get Estimate</button></div>
    </div>
  )
}

export default Whyhomelane