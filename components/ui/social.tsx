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
            <Button className="p-2 shadow-lg rounded-md" variant="ghost" onClick={()=>handleClick("google")}> <FcGoogle />se connecter avec <span> Google</span></Button>
        </div>
    )
}