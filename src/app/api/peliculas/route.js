import dbConnect from "../../../lib/dbConnect";
import Peliculas from "../../../models/page";
import { NextResponse } from "next/server";

export async function GET(){
    await dbConnect();
    try {
        const peliculas = await Peliculas.find();
        return NextResponse.json(peliculas)
        
    } catch (error) {
        NextResponse.json({error: error.message})
    }
}
