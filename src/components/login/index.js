import React from 'react';
import { Input } from 'antd';

export default function Login() {
    const setIsLogin = () => {
        localStorage.setItem('user', JSON.stringify(true));
        console.log('set login True');
    }

  return (
    <div className='App'>
        Login
        <form>
            <input type="text" />
            <button onClick={()=>{setIsLogin()}}>login</button>
            <Input placeholder="User name" />
            <Input placeholder="Password" />
        </form>
    </div>
  )
}
