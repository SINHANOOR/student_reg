import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req,res){
try{
    const prisma = new PrismaClient();
    const reqBody= await req.json() ;
    let info= await prisma.student.createMany({
        data:[{firstName:"lambo" ,lastName:"lam" ,roll:4 ,age:5 ,grade:"B" ,cours:"bangla"},
        {firstName:"lucka" ,lastName:"luck" ,roll:4 ,age:20 ,grade:"D" ,cours:"cse"},
        {firstName:"taizen" ,lastName:"tai" ,roll:5 ,age:56 ,grade:"B" ,cours:"math"},
        {firstName:"tarbo" ,lastName:"ltai" ,roll:6 ,age:23 ,grade:"C" ,cours:"eng"},
        {firstName:"gambo" ,lastName:"gam" ,roll:7 ,age:14 ,grade:"D" ,cours:"histry"},
        {firstName:"damo" ,lastName:"dam" ,roll:8 ,age:30 ,grade:"A" ,cours:"bangla"},
        ]
    })

    return NextResponse.json({status:"success",data:info})
}catch(e){
  return NextResponse.json({status:"fail",data:e})
}
}