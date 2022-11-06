import { useState } from "react";
import React from 'react';
const Fun =()=>{
    const [count,setCount]=useState(1);
    const [email,SetEmail]=useState('alice@wonderland.com');
    const [Bio,setBio]=useState('hello');
    const [showBio,setShowBio]= useState(true);
    const [editingemail,seteditingemail]= useState(false);
    const changeEmail=(event)=>{
  const newEmail=event.target.value
  SetEmail(newEmail)
    }
    const changeBio=(event1)=>{
      const newBio=event1.target.value
  setBio(newBio)
    }
   const Up=()=>{
      setCount(count+1);
    }
   const Down=()=>{
        setCount(count-1);
   }
   return(
   <div>
  <h2> componentstate </h2>  
    count={count}
    <button onClick={Up}>UP</button>
    <h1>{setCount.Up}</h1>
    <button onClick={Down}>Down</button>
    <h4>email</h4>
    <input type="checkbox" onChange={(e)=>seteditingemail(e.target.checked)} checked={editingemail}/>
    {
      editingemail &&
      <input value={email}  onChange={changeEmail}></input>
    }
    {
      !editingemail &&
    <span>{email}</span>
    
    }
    <input type="checkbox" onChange={(e)=>setShowBio(e.target.checked)} checked={showBio}></input>
    {
      showBio &&
    <div>
      <h2>Bio</h2>
    
      <textarea value={Bio} onChange={changeBio}></textarea>
      <h2>{Bio}</h2>
      </div>
    }
   </div> 
    
)
}
export default Fun;