import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

import User from "@src/models/user"
import { connectDB } from "@src/utils/database"

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],

    callbacks:{
        async session({session}){
            const sessionUser = await User.findOne({
                email: session.user.email
            })
    
            Session.user.id = sessionUser._id.toString();
            return session
        },
        async signIn({profile}){
            try {
                await connectDB();
    
                //check if user already exist
                const userExists = await User.findOne({
                    email: profile.email
                })
    
                //else create a new user
                if(!userExists){
                    await User.create({
                        email:profile.email,
                        username: profile.name.replace(" ", "").toLowerCase(),
                        image: profile.picture
                    })
                }
    
                return true;
            } catch (error) {
                console.log(error)
                return false;
            }
        }
    }
    
})

export {handler as GET, handler as Post}