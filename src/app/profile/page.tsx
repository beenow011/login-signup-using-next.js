"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

export default function ProfilePage(){
    const [user,setUser]= useState("");
    const router = useRouter()
    const onLogout= async ()=>{
        try{
            await axios.get('/api/users/logout');
            router.push("/login")
        }catch(error:any){
            console.log(error)
        }
    }
    useEffect(()=>{
        axios.get("/api/users/me")
        .then((res)=>setUser(res.data.data._id));
    },[])
    console.log(user)
    return(
        <div className="flex justify-center align-middle h-screen items-center">
            <div><Toaster/></div>
            <div className=""> <h1 className="text-center">Profile</h1>
           
            <p className="text-center">Profile page</p>
            
            <button className="bg-blue-400 hover:bg-blue-700 rounded-md p-2 text-black m-2" onClick={onLogout}>Logout</button>
            <Link href={`/profile/${user}`}> <button className="bg-blue-400 hover:bg-blue-700 rounded-md p-2 text-black m-2" >User Details</button></Link>
           
            </div>
           
        </div>
    )
}