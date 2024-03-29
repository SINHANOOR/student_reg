import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req,res){
try{
    const prisma = new PrismaClient();
    const reqBody= await req.json() ;
    let info= await prisma.student.create({
        data:reqBody
    })

    return NextResponse.json({status:"success",data:info})
}catch(e){
  return NextResponse.json({status:"fail",data:e})
}
}