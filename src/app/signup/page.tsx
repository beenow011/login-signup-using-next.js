"use client";
import Link from "next/link";
import React,{useEffect} from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";


export default function SignupPage(){
    const router = useRouter();
    const [buttonDisabled, setButtonDisabled]= React.useState(false);
    const [user,setUser] = React.useState({
        email: "",
        password: "",
        username:"",
    })
    const [loading , setloading] = React.useState(false)
    const onSignup =async () => {
        try{
            setloading(true)
            const response = await axios.post("/api/users/signup",user);
            console.log("sign up success",response.data);
            router.push("/login")
        

        }catch(error:any){
            console.log("sign up failed",error.message);
            toast.error(error.message)
        }finally{
            setloading(false)
        }
    }
    useEffect(()=>{
        if(user.username.length > 0 && user.email.length > 0 && user.password.length > 0){
            setButtonDisabled(false);
        }else{
            setButtonDisabled(true);
        }
    },[user])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>{loading?"loading":"signup"}</h1>
            <hr />

            <label htmlFor="username">username</label>
            <input type="text"  id="username" value={user.username} placeholder="username" onChange={(e)=>setUser({...user,username:e.target.value})} className="p-2 text-black border border-gray-600 rounded-md mb-4"/>

            <label htmlFor="email">email</label>
            <input type="email"  id="email" value={user.email} placeholder="email" onChange={(e)=>setUser({...user,email:e.target.value})} className="p-2 border text-black border-gray-600 rounded-md mb-4"/>

            <label htmlFor="password">password</label>
            <input type="password"  id="password" value={user.password} placeholder="password" onChange={(e)=>setUser({...user,password:e.target.value})} className="p-2 border text-black border-gray-600 rounded-md mb-4"/>
<button className="p-2 text-white bg-gray-500 mb-3 rounded-md hover:bg-black" onClick={onSignup}>{buttonDisabled?"entry all fields": "sign up"}</button>
<Link href="/login">Visit login page</Link>
        </div>
    )
}