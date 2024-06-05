"use client"
import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Button } from "./button";
export function Social() {
    const handleClick = (provider:"github"|"google")=>{
            signIn(provider,{callbackUrl:"/"})
    }
    return ( 
        <div className=" mt-8 flex w-full">
            {/* <Button className=" flex justify-between p-2 w-full mx-2 shadow-lg rounded-md" variant="ghost" onClick={()=>handleClick("github")}><FaGithub /> <span>Github</span></Button> */}
            <Button className="flex justify-center items-center p-2 shadow-lg rounded-md w-full space-x-4" variant="ghost" onClick={()=>handleClick("google")}> <FcGoogle /><span><span>se connecter avec </span><span> Google</span></span></Button>
        </div>
    )
}