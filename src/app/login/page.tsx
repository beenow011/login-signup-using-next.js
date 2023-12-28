"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
// import {axios} from "axios";


export default function LoginPage(){
    const [user,setUser] = React.useState({
        email: "",
        password: "",
      
    })
    const onLogin =async () => {
        
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Login</h1>
            <hr />


            <label htmlFor="email">email</label>
            <input type="email"  id="email" value={user.email} placeholder="email" onChange={(e)=>setUser({...user,email:e.target.value})} className="p-2 border border-gray-600 rounded-md mb-4"/>

            <label htmlFor="password">password</label>
            <input type="password"  id="password" value={user.password} placeholder="password" onChange={(e)=>setUser({...user,password:e.target.value})} className="p-2 border border-gray-600 rounded-md mb-4"/>
<button className="p-2 text-white bg-gray-500 mb-3 rounded-md hover:bg-black" onClick={onLogin}>Log in</button>
<Link href="/signup">Visit Sign up page</Link>
        </div>
    )
}