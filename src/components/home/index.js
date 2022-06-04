import React, { useState } from 'react'

export default function Home() {
    const [user,setUser] = useState('admin');
    const [pass, setPass] = useState('admin');
    
    const setIsLoginFalse = () => {
        localStorage.setItem('user', null);
        setUser("");
        setPass("");
        console.log('set login True');
    }

  return (
    <div>
        <button onClick={()=>{setIsLoginFalse()}}>logOut</button>
        Home
        <p>{user}: {pass}</p>
    </div>
  )
}
