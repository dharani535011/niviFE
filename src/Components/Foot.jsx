import React, { useContext } from 'react'
import { Othercontext } from './Context'

const Foot = () => {
  const {auths}=useContext(Othercontext)
  const [auth,setauth]=auths
  return (
    <div className='foot'>
        <div>
        <div><i className="fa-solid fa-house fa-3x" style={{color:"blueviolet",cursor:"pointer"}} onClick={()=>{
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
        }}></i><span onClick={()=>{
            window.scrollTo({
                top: 0,
                behavior: 'smooth' 
              });
            }} style={{cursor:"pointer"}}>NIVI INTERIORS</span></div>
        <div className='i'><i className="fa-brands fa-facebook fa-2x" style={{color:"red",cursor:"pointer"}}></i>
        <i className="fa-brands fa-instagram fa-2x" style={{color:"red" ,cursor:"pointer"}}></i>
        <i className="fa-brands fa-twitter fa-2x" style={{color:"red",cursor:"pointer"}}></i>
        <i className="fa-brands fa-linkedin fa-2x" style={{color:"red",cursor:"pointer"}}></i>
        <i className="fa-brands fa-youtube fa-2x" style={{color:"red",cursor:"pointer"}}></i></div>
        </div>
        <hr />
        <div >
            <div className='co'><h5 style={{opacity:".7"}}>Copyright © NIVI Private Limited. All rights reserved.</h5>
            <h5>hello@nivi.com</h5>
            <h5>9846788834</h5>
            </div>
            <p style={{opacity:".5"}}>
            At NIVI, we bring together functionality and aesthetics to provide homeowners with customised and efficient home designs. Our designers specialise in home interior designs and home décor, and help you create a personalized home to suit your lifestyle. From sophisticated living room designs to space-saving and clutter-free interior designs, we are here to help you find the best home decor and home design to match your needs and style. All our products come with up to 10-year warranty along with unwavering support and maintenance services. Explore thousands of inspiring interior designs or get a free estimate – it's all here on NIVI.com, your one stop for complete home interiors.</p>
        </div>
        {auth&&<div><button className='logoutt'>Logout</button></div>}
    </div>
  ) 
}

export default Foot