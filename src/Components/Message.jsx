import axios from 'axios';
import React, { useEffect, useState, useCallback, useRef, useContext } from 'react';
import { Othercontext } from './Context';

const Message = () => {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState("");
  const [data, setData] = useState([]);
  const messagesEndRef = useRef(null); 
  const {userdetails,auths}=useContext(Othercontext)
  const [userdetail,setuserdetail]=userdetails 
  const [auth,setauth]=auths 
  const datas=userdetail.email?userdetail.email:""

  const fetchData = useCallback(async () => {
    try {
      const res = await axios.post("http://localhost:3000/msg/view", {}, {
        withCredentials: true,
      });
      const data=Array.isArray(res.data)?res.data:[]
      const filteredData = data.filter(val => 
        val.reciver === datas || val.user === datas
      );
      setData(filteredData);
      // console.log(filteredData,datas)
    } catch (error) {
      console.error(error);
    }
  }, [datas]);

  useEffect(() => {
    fetchData()
    const interval = setInterval(fetchData, 3000)
    return () => clearInterval(interval)
  }, [fetchData]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [data]);

  const handleSend = async () => {
    try {
      await axios.post("http://localhost:3000/msg/send", {
        usermsg: msgs,
        user: datas
      }, {
        withCredentials: true
      });
      setMsgs("")
      fetchData()
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <div className='popup' style={{ display: open ? "block" : "none" }}></div>
      {userdetail.role!=="auth"&&auth&&<div className='msg' onClick={() => setOpen(true)}>
        <i className="fa-solid fa-paper-plane fa-2x"></i>
      </div>}
      <div className='bodymsg' style={{ display: open ? "block" : "none" }}>
        <div className='mhead'>
          <h1>Chat With Us...</h1>
        </div>
        <div className='mbody'>
          {data.map((val, index) => (
            <React.Fragment key={index}>
              {val.user === datas ? (
                <div className='right'>{val.usermsg}</div>
              ) : (
                <div className='left'>{val.authmsg}</div>
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
  );
}

export default Message;
