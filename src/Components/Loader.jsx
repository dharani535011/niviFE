import React, { useContext } from 'react'
import { Othercontext } from './Context'

const Loader = () => {
  const {loaders}=useContext(Othercontext)
  const [loader,setloader]=loaders
  return (
    <div style={{display:loader?"block":"none"}}>
        <div className='popup'></div>
        <div className="spinner-border text-primary customload"  role="status">
  <span className="visually-hidden" >Loading...</span>
</div>
    </div>
  )
}

export default Loader