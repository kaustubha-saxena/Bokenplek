"use server"
import { NextResponse } from "next/server";
import mongoose from 'mongoose';
import { connectionStr } from '@/lib/connection';
import { Headermodel } from "../../../../model/header";

export async function POST(request) {
  let data = await request.json();


  await mongoose.connect(connectionStr).then(() => {
    // console.log(data);

  })
  const a = await Headermodel.find(data);
  console.log("a.length",a.length);
  

  return NextResponse.json(a)
}
