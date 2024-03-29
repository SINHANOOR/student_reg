import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req,res){
try{
    const prisma = new PrismaClient();
    let info= await prisma.student.findMany({
        orderBy:{id:"asc"},
        skip:3,
        take:1
    })

    return NextResponse.json({status:"success",data:info})
}catch(e){
  return NextResponse.json({status:"fail",data:e})
}
}