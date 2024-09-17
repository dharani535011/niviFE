import axios from 'axios';
import React, { useEffect, useState, useCallback, useRef, forwardRef, useImperativeHandle, useContext } from 'react';
import { Othercontext } from './Context';

const Smessage = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState("");
  const [data, setData] = useState([]);
  const [mail, setMail] = useState("");
  const messagesEndRef = useRef(null);
  const {userdetails}=useContext(Othercontext)
  const [userdetail,setuserdetail]=userdetails
  
  const datas=userdetail.email?userdetail.email:""
  useImperativeHandle(ref, () => ({
    handleValueFromParent(value) {
      setMail(value);
      setOpen(true)
    }
  }));

  
  const fetchData = useCallback(async () => {
    if (!mail) return; 

    try {
      const res = await axios.post("http://localhost:3000/msg/view", {}, {
        withCredentials: true,
      });
      const data=Array.isArray(res.data)?res.data:[]
      const filteredData = data.filter(val => 
        val.user === mail || 
        (val.reciver === mail && val.auth === datas)
      );
      // console.log("pkk")
      setData(filteredData);
    } catch (error) {
      console.error(error);
    }
  }, [mail]);


  // const checkForNewMessages = useCallback(async () => {
  //   try {
  //     const res = await axios.post("http://localhost:3000/msg/view", {
        
  //     }, {
  //       withCredentials: true
  //     });
       
  //     if (res.data) {
  //       const data=Array.isArray(res.data)?res.data:[]
  //     const filteredData = data.filter(val => 
  //       val.user === mail || 
  //       (val.reciver === mail && val.auth === datas)
  //     );
  //     const se = filteredData.filter(val => {
  //       const createdAt = new Date(val.createdAt);
        
  //       // Current date
  //       const today = new Date();
        
  //       // Get yesterday's date
  //       const yesterday = new Date();
  //       yesterday.setDate(today.getDate() - 1);
  //       yesterday.setHours(0, 0, 0, 0); // Set time to start of the day
        
  //       // Filter records created before yesterday
  //       return createdAt < yesterday;
  //     });
  //       props.onchange(se) 
  //       fetchData(); 
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }, [mail, datas, fetchData]);

  // useEffect(() => {
  //   const interval = setInterval(checkForNewMessages, 5000); // Check for new messages every 5 seconds
  //   return () => clearInterval(interval);
  // }, [checkForNewMessages]);







  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 3000);
    return () => clearInterval(interval);
  }, [fetchData])

  
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [data])

  
  const handleSend = async () => {
    if (!msgs.trim()) return; 
    try {
      await axios.post("http://localhost:3000/msg/send", {
        authmsg: msgs,
        auth: datas,
        reciver: mail,
      }, {
        withCredentials: true,
      });
      setMsgs("")
      fetchData()
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <>
      <div className='popup' style={{ display: open ? "block" : "none" }}></div>

      <div className='bodymsg' style={{ display: open ? "block" : "none" }}>
        <div className='mhead'>
          <h1>Chat With Us...</h1>
        </div>
        <div className='mbody'>
          {data.map((val, index) => (
            <React.Fragment key={index}>
              {val.auth === datas ? (
                <div className='right'>{val.authmsg}</div>
              ) : (
                <div className='left'>{val.usermsg}</div>
              )}
            </React.Fragment>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className='mfoot'>
          <input
            type="text"
            value={msgs}
            onChange={(e) => setMsgs(e.target.value)}
            placeholder='Text...'
          />
          <i className="fa-solid fa-paper-plane fa-2x" onClick={handleSend}></i>
        </div>
      </div>
      <div className='mclose' onClick={() => setOpen(false)} style={{ display: open ? "flex" : "none" }}>
        <i className="fa-solid fa-caret-down fa-2x"></i>
      </div>
    </>
  )
})

export default Smessage;
