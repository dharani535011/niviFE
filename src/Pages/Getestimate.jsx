// import React, { useState } from 'react'
// import estimate from "../../public/ESTIMATE_JPG.webp"
// import { useNavigate } from 'react-router-dom'

// const Getestimate = () => {
//    const [floor,setfloor]=useState("")
//    const [per,setper]=useState("")
//    const [next,setnext]=useState(1)
//    const [wor,setwor]=useState(1)
//    const [ent,setent]=useState(1)
//    const [study,setstudy]=useState(1)
//    const [cro,setcro]=useState(1)
//    const navigate=useNavigate()

//   return (
//     <div>
//         <div>
//        <nav className='customnav'>
//        <div><i className="fa-solid fa-house fa-2x" onClick={()=>navigate("/")}></i><span onClick={()=>navigate("/")}>NIVI INTERIORS</span></div>
//        </nav>
//     </div>
//     <div className='lane'>
//         <div className='lane2'> 
//             <div className='headlane'>
//             <h2>{next===1?"LET'S GET STARTED":next===2?"TELL US WHAT YOU NEED":"BOOK YOUR ESTIMATE!"}</h2>
//             <p>STEP {next} OF 3</p>
//             </div>
//             <div className='bodylane'>
//                 {next===1?( <div className='changelane'>
//                 <p>Your floorplan</p>
//     <div>
//         <h5 onClick={()=>{
//              setfloor(1)
//         }} style={{backgroundColor:floor===1?"blueviolet":"white",color:floor===1?"white":"blueviolet"}} >1BHK</h5>
//          <h5 onClick={()=>{
//              setfloor(2)
//         }} style={{backgroundColor:floor===2?"blueviolet":"white",color:floor===2?"white":"blueviolet"}} >2BHK</h5>
//          <h5 onClick={()=>{
//              setfloor(3)
//         }} style={{backgroundColor:floor===3?"blueviolet":"white",color:floor===3?"white":"blueviolet"}} >3BHK</h5>
//          <h5 onClick={()=>{
//              setfloor(4)
//         }} style={{backgroundColor:floor===4?"blueviolet":"white",color:floor===4?"white":"blueviolet"}} >3+BHK</h5>
//     </div>
//     <p>Purpose</p>
//     <div>
//         <h5 onClick={()=>{
//              setper("move in")
//         }} style={{backgroundColor:per==="move in"?"blueviolet":"white",color:per==="move in"?"white":"blueviolet"}} >Move In</h5>
//         <h5 onClick={()=>{
//              setper("rent out")
//         }} style={{backgroundColor:per==="rent out"?"blueviolet":"white",color:per==="rent out"?"white":"blueviolet"}} >Rent Out</h5>
//         <h5 onClick={()=>{
//              setper("renovate")
//         }} style={{backgroundColor:per==="renovate"?"blueviolet":"white",color:per==="renovate"?"white":"blueviolet"}} >Renovate</h5>
//     </div>
//                 </div>):next==2?(<div className='changelane2'>
//                     <div><h4>Your requirements for 2 BHK
//                     *</h4></div>
//                     <div><h5>Kitchen</h5><span><input type="checkbox" defaultChecked={true} disabled style={{width:"20px",height:"20px",color:"blueviolet"}}/></span></div>
//                     <div><h5>Wardrobe</h5><span><button onClick={()=>{
//                         if(wor==0){
//                             setwor(0)  
//                         }else{
//                             setwor(wor-1)
//                         }
//                         }}>-</button>{wor}<button onClick={()=>{
//                             if(wor==3){
//                                 setwor(3)
//                             }else{
//                                 setwor(wor+1)
//                             }}}>+</button></span></div>
//                      <div><h5>Entertainment unit</h5><span><button onClick={()=>{
//                         if(ent==0){
//                             setent(0)  
//                         }else{
//                             setent(ent-1)
//                         }
//                         }}>-</button>{ent}<button onClick={()=>{
//                             if(ent==3){
//                                 setent(3)
//                             }else{
//                                 setent(ent+1)
//                             }}}>+</button></span></div>
//                     <div><h5>Study unit</h5><span><button onClick={()=>{
//                         if(study==0){
//                             setstudy(0)  
//                         }else{
//                             setstudy(study-1)
//                         }
//                         }}>-</button>{study}<button onClick={()=>{
//                             if(study==3){
//                                 setstudy(3)
//                             }else{
//                                 setstudy(study+1)
//                             }}}>+</button></span></div>
//                     <div><h5>Crockery unit</h5><span><button onClick={()=>{
//                         if(cro==0){
//                             setcro(0)  
//                         }else{
//                             setcro(cro-1)
//                         }
//                         }}>-</button>{cro}<button onClick={()=>{
//                             if(cro==3){
//                                 setcro(3)
//                             }else{
//                                 setcro(cro+1)
//                             }}}>+</button></span></div>
//                 </div>):(<div className='changelane3'>
//                     <h1><span>Book Your</span> <span>Appointment!</span></h1>
//                     <button>BOOK</button>
//                 </div>)}
//                 <div className='imglane'>
//                    <img src={estimate} alt="img" />
//                 </div>
//             </div>
//             <div className='footlane'>
//             <button style={{display:next==1?"none":"block"}} onClick={()=>{
//                 setnext(next-1)
//             }}>back</button>
//             <button disabled={!floor&&per} onClick={()=>{
//                 setnext(next+1)
//             }} style={{backgroundColor:floor&&per?"blueviolet":"gray",display:next==3?"none":"block"}}>Next</button>
//             </div>
//         </div>
//     </div>
//     </div>
//   )
// }

// export default Getestimate

import React, { useContext, useState } from 'react';
import estimate from "../../public/ESTIMATE_JPG.webp";
import { useNavigate } from 'react-router-dom';
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from 'axios';
import { Othercontext } from '../Components/Context';

// Initialize Stripe with your publishable key
const stripePromise = loadStripe("pk_test_51Pzb3mDT9oorOBKm3Y5LvAYRCeYLavBv6YN5l4Jbg4VSPVk3KaYT9oo2QyEEFfgWde23OXfDBos28wIbiKkLbTkC00IQEvzMUb");
const cardStyle = {
    style: {
      base: {
        color: '#32325d',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    },
  };

const PaymentForm = ({wor,per,study,floor,ent,cro}) => {
   const {userdetails}=useContext(Othercontext)
   // const [loader,setloader]=loaders
   const [userdetail,setuserdetail]=userdetails
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const [paymentStatus, setPaymentStatus] = useState('');
    
// (userdetail)
    const handlePay = async () => {
       if (!stripe || !elements) {
          setPaymentStatus("Stripe or Elements not loaded.");
          return;
       }
 
       const cardElement = elements.getElement(CardElement);
       if (!cardElement) {
          setPaymentStatus("Card Element not found.");
          return;
       }
 
       setLoading(true);
 
       try {
          const res = await axios.post("https://nivibe.onrender.com/payment", {
             amount: 500*100, // Replace with actual amount
             currency: "inr"
          });
 
          const clientSecret = res.data.client_secret;
 
          const paymentResult = await stripe.confirmCardPayment(clientSecret, {
             payment_method: {
                card: cardElement,
                billing_details: {
                   name: 'Customer Name' // Replace with actual customer name
                }
             }
          });
 
          if (paymentResult.error) {
             setPaymentStatus(`Payment failed: ${paymentResult.error.message}`);
          } else {
             if (paymentResult.paymentIntent.status === 'succeeded') {
                setPaymentStatus("Payment succeeded!");
                alert("Payment successful!");
                  try {
                     // (wor,per,study,floor,ent,cro)
                     // setloader(true)
                    const res= await axios.post("https://nivibe.onrender.com/appointments/book",{
                        entertainment:ent,
                        crockery:cro,
                        floors:floor,
                        purpose:per,
                        wardrobe:wor,
                        study:study,
                        phoneno:userdetail.phoneno,
                        mail:userdetail.email
                      },{withCredentials:true})
                     //  alert(res.data.message)
                      if(res.data.message=="Appointment Booked"){
                        alert(res.data.message)
                      }
                  } catch (error) {
                     alert(error.message)
                  }
             }
          }
       } catch (error) {
          setPaymentStatus(`Payment failed: ${error.message}`);
       }
 
       setLoading(false);
    };
 
    return (
        <div className="payment-container">
      <div className="card-element-container">
        <CardElement options={cardStyle} />
      </div>
      <button
        className="book-button"
        onClick={handlePay}
        disabled={loading}
      >
        {loading ? "Processing..." : "BOOK"}
      </button>
      {paymentStatus && <p className="payment-status">{paymentStatus}</p>}
    </div>
    );
 }





const Getestimate = () => {
   const [floor, setfloor] = useState("");
   const [per, setper] = useState("");
   const [next, setnext] = useState(1);
   const [wor, setwor] = useState(1);
   const [ent, setent] = useState(1);
   const [study, setstudy] = useState(1);
   const [cro, setcro] = useState(1);
 
   
   const navigate = useNavigate();
 

   

   return (
      <div>
         <div>
            <nav className='customnav'>
               <div><i className="fa-solid fa-house fa-2x" onClick={() => navigate("/")}></i><span onClick={() => navigate("/")}>NIVI INTERIORS</span></div>
            </nav>
         </div>
         <div className='lane'>
            <div className='lane2'> 
               <div className='headlane'>
                  <h2>{next === 1 ? "LET'S GET STARTED" : next === 2 ? "TELL US WHAT YOU NEED" : "BOOK YOUR ESTIMATE!"}</h2>
                  <p>STEP {next} OF 3</p>
               </div>
               <div className='bodylane'>
                  {next === 1 ? (
                     <div className='changelane'>
                        <p>Your floorplan</p>
                        <div>
                           <h5 onClick={() => setfloor(1)} style={{ backgroundColor: floor === 1 ? "blueviolet" : "white", color: floor === 1 ? "white" : "blueviolet" }}>1BHK</h5>
                           <h5 onClick={() => setfloor(2)} style={{ backgroundColor: floor === 2 ? "blueviolet" : "white", color: floor === 2 ? "white" : "blueviolet" }}>2BHK</h5>
                           <h5 onClick={() => setfloor(3)} style={{ backgroundColor: floor === 3 ? "blueviolet" : "white", color: floor === 3 ? "white" : "blueviolet" }}>3BHK</h5>
                           <h5 onClick={() => setfloor(4)} style={{ backgroundColor: floor === 4 ? "blueviolet" : "white", color: floor === 4 ? "white" : "blueviolet" }}>3+BHK</h5>
                        </div>
                        <p>Purpose</p>
                        <div>
                           <h5 onClick={() => setper("move in")} style={{ backgroundColor: per === "move in" ? "blueviolet" : "white", color: per === "move in" ? "white" : "blueviolet" }}>Move In</h5>
                           <h5 onClick={() => setper("rent out")} style={{ backgroundColor: per === "rent out" ? "blueviolet" : "white", color: per === "rent out" ? "white" : "blueviolet" }}>Rent Out</h5>
                           <h5 onClick={() => setper("renovate")} style={{ backgroundColor: per === "renovate" ? "blueviolet" : "white", color: per === "renovate" ? "white" : "blueviolet" }}>Renovate</h5>
                        </div>
                     </div>
                  ) : next === 2 ? (
                     <div className='changelane2'>
                        
<div><h4>Your requirements for 2 BHK</h4></div>
                    <div><h5>Kitchen</h5><span><input type="checkbox" defaultChecked={true} disabled style={{width:"20px",height:"20px",color:"blueviolet"}}/></span></div>
                    <div><h5>Wardrobe</h5><span><button onClick={()=>{
                        if(wor==0){
                            setwor(0)  
                        }else{
                            setwor(wor-1)
                        }
                        }}>-</button>{wor}<button onClick={()=>{
                            if(wor==3){
                                setwor(3)
                            }else{
                                setwor(wor+1)
                            }}}>+</button></span></div>
                     <div><h5>Entertainment unit</h5><span><button onClick={()=>{
                        if(ent==0){
                            setent(0)  
                        }else{
                            setent(ent-1)
                        }
                        }}>-</button>{ent}<button onClick={()=>{
                            if(ent==3){
                                setent(3)
                            }else{
                                setent(ent+1)
                            }}}>+</button></span></div>
                    <div><h5>Study unit</h5><span><button onClick={()=>{
                        if(study==0){
                            setstudy(0)  
                        }else{
                            setstudy(study-1)
                        }
                        }}>-</button>{study}<button onClick={()=>{
                            if(study==3){
                                setstudy(3)
                            }else{
                                setstudy(study+1)
                            }}}>+</button></span></div>
                    <div><h5>Crockery unit</h5><span><button onClick={()=>{
                        if(cro==0){
                            setcro(0)  
                        }else{
                            setcro(cro-1)
                        }
                        }}>-</button>{cro}<button onClick={()=>{
                            if(cro==3){
                                setcro(3)
                            }else{
                                setcro(cro+1)
                            }}}>+</button></span></div>
                     </div>
                  ) : (
                     <div className='changelane3'>
                        <h1><span>Book Your</span> <span>Appointment!</span><span style={{color:"red"}}>₹500/-</span></h1>
                        <Elements stripe={stripePromise}>
                        <PaymentForm ent={ent} cro={cro} study={study} floor={floor} per={per} wor={wor}/>
                        </Elements>
                     </div>
                  )}
                  <div className='imglane'>
                     <img src={estimate} alt="img" />
                  </div>
               </div>
               <div className='footlane'>
                  <button style={{ display: next === 1 ? "none" : "block" }} onClick={() => setnext(next - 1)}>Back</button>
                  <button disabled={!floor || !per} onClick={() => setnext(next + 1)} style={{ backgroundColor: floor && per ? "blueviolet" : "gray", display: next === 3 ? "none" : "block" }}>Next</button>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Getestimate;




