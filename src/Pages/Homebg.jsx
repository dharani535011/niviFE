import React from 'react'
import Nav from '../Components/Nav'
import Fques from '../Components/Fques'
import Foot from '../Components/Foot'
import Whychoose from '../Components/Whychoose'
import Whyhomelane from '../Components/Whyhomelane'
import Comp from '../Components/Comp'
import Message from '../Components/Message'
const Homebg = () => {
  return (
    <div>
        <Nav/>
        <div className='homebg'>
            <h1>Hassle-free interiors from start to finish in Chennai</h1>
        </div>
        <Whychoose/>
        <Message/>
        <Comp/>
        <Whyhomelane/>
        <Fques/>
        <Foot/>
    </div>
  )
}

export default Homebg