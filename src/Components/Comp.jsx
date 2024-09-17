import React from 'react'
import p1 from "../../public/p1.png"
import p2 from "../../public/p2.png"
import p3 from "../../public/p3.png"
import p4 from "../../public/p4.png"
import p5 from "../../public/p5.png"
import p6 from "../../public/p6.png"
import p7 from "../../public/p7.png"
import p8 from "../../public/p8.png"
import p9 from "../../public/p9.png"
import p10 from "../../public/p10.png"
import p11 from "../../public/p11.png"
import p12 from "../../public/p12.png"
import p13 from "../../public/p13.png"
import p14 from "../../public/p14.png"
import p15 from "../../public/p15.png"
import { useNavigate } from 'react-router-dom'
const Comp = () => {
  const navigate=useNavigate()
  return (
    <div className='comp'>
        <div className='comph1'>
            <h1>End-to-end interior solutions in Chennai</h1>
        </div>
        <div  className='comp2 row row-cols-3 row-cols-sm-3  row-cols-lg-5'>
        <span><img src={p1} alt='img' /><p>Storage and wardrobe</p></span>
        <span><img src={p2} alt='img' /><p>Crockery Units</p></span>
        <span><img src={p3} alt='img' /><p>Movable furniture</p></span>
        <span><img src={p4} alt='img' /><p>Modular Kitchen</p></span>
        <span><img src={p5} alt='img' /><p>TV Units</p></span>
        <span><img src={p6} alt='img' /><p>Study Tables</p></span>
        <span><img src={p7} alt='img' /><p>False Ceiling</p></span>
        <span><img src={p8} alt='img' /><p>Lights</p></span>
        <span><img src={p9} alt='img' /><p>Wallpaper</p></span>
        <span><img src={p10} alt='img' /><p>Wall Paint</p></span>
        <span><img src={p11} alt='img' /><p>Bathroom</p></span>
        <span><img src={p12} alt='img' /><p>Pooja Unit</p></span>
        <span><img src={p13} alt='img' /><p>Foyer Designs</p></span>
        <span><img src={p14} alt='img' /><p>Space Saving Furniture</p></span>
        <span><img src={p15} alt='img' /><p>Kids Bedroom</p></span>

        </div>
        <div className='bdiv'><button className='button' onClick={()=>navigate("/getestimate")}>Get Estimate</button></div>
    </div>
  )
}

export default Comp