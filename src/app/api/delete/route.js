import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req,res){
try{
    const{searchParams}= new URL(req.url);
    const id = parseInt(searchParams.get("id"));
    const prisma = new PrismaClient();
    let info= await prisma.student.delete({
        where:{id:id},
       
    })

    return NextResponse.json({status:"success",data:info})
}catch(e){
  return NextResponse.json({status:"fail",data:e})
}
}