"use server"
import { NextResponse } from "next/server";
import mongoose from 'mongoose';
import { connectionStr } from '@/lib/connection';
import { Bookmodel } from '../../../../model/BooksSchema';

export async function POST(request) {
  let data = await request.json();


await mongoose.connect(connectionStr).then(() => {

})
const a = await Bookmodel.find(data);


  

  return NextResponse.json(a)
}
