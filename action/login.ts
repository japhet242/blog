"use server"
import { signIn } from "@/auth"
import prisma from "@/lib/db"
import { loginSchema } from "@/schemas/zodSchema"
import { error } from "console"
import { AuthError } from "next-auth"
import {z} from"zod"

export async function login(values: z.infer<typeof loginSchema>) {
    const verifield = await loginSchema.safeParse(values)
    if (!verifield.success) {
        return{error:"quelque chose de mal s'est produit"}
    }
    const {password,email} = verifield.data

    const validated = await prisma.user.findUnique({
        where:{email}
    })
    if(!validated) {
        return {error:"le compte n'existe pas"}
    }
    if (!validated.emailVerified) {
        return {succes:"email de confirmation evonyer veiller d'abord confirmer la creation de votre compte car un email de confirmation a ete envoyer"}
    }

try {
   const connected = await signIn("credentials",{
       password,
       email,
       redirectTo:"/"
    })
    return {succes:"email envoyer"}
} catch (error) {
        if (error instanceof AuthError) {
           switch (error.type) {
            case "CredentialsSignin":
                return {error:"quelque chose s'est produite verifie votre email"}
                break;
           
            default:
                return{error:"quelque chose s'est mal passé"}
                break;
           } 
        }
}
  }