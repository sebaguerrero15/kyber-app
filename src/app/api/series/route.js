import dbConnect from "../../../lib/dbConnect";
import Series from "../../../models/page";
import { NextResponse } from "next/server";

export async function GET(){
    await dbConnect();
    try {
        const series = await Series.find();
        return NextResponse.json(series)
    } catch (error) {
        NextResponse.json({error: error.message})
    }
}


    

