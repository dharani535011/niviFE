import { Navigate, Route, Routes } from "react-router-dom"
import "./App.css"
import Signin from "./Pages/Signin"
import Signup from "./Pages/Signup"
import Changepass from "./Pages/Changepass"
import Getestimate from "./Pages/Getestimate"
import Homebg from "./Pages/Homebg"
import Authside from "./Pages/Authside"
import Loader from "./Components/Loader"
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useContext } from "react"
import { Othercontext } from "./Components/Context"

const stripePromise = loadStripe('pk_test_51Pzb3mDT9oorOBKm3Y5LvAYRCeYLavBv6YN5l4Jbg4VSPVk3KaYT9oo2QyEEFfgWde23OXfDBos28wIbiKkLbTkC00IQEvzMUb');


const App=()=>{

          const {auths}=useContext(Othercontext)
          const [auth,setauth]=auths
        //   console.log(auth)
    return(
        <>
         <Elements stripe={stripePromise}>
        <Loader/>
        <Routes>
        <Route path="/" element={<Homebg/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/changepass" element={<Changepass/>}/>
        <Route path="/getestimate" element={auth?<Getestimate/>:<Navigate to="/signin"/>}/>
        <Route path="/authside" element={auth?<Authside/>:<Navigate to="/signin"/>}/>
        </Routes>
        </Elements>
        </>
    )
}
export default App