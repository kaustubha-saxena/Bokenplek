import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { connectionStr } from '@/lib/connection';
import { Headermodel } from '../../../../model/header';
import { Header } from '../../../../Header_Data';
export async function GET(request) {
  await mongoose.connect(connectionStr).then(() => {
    console.log("Connected");

  })
  Header.forEach(element => {
    const header= new Headermodel(
  element
)
 header.save();
  });
  return NextResponse.json({message:"done"})
}