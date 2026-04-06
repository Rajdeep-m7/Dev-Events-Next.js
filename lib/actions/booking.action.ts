'use server'
import Booking from "@/database/booking.mode";
import { connectDB } from "../mongodb";

export const createBooking = async({ eventId , slug , email }: { eventId : string ; slug : string ; email : string ;})=>{
    try {
        await connectDB();
        await Booking.create({eventId , slug , email});
        return { success: true };
        
    } catch (error) {
       console.log('creat ebooking failed' , error) ;
       return { sucess : false  }
    }
}