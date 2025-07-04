import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { connectionStr } from '@/lib/connection';
import { Bookmodel } from '../../../../model/BooksSchema';
export async function GET(request) {
  await mongoose.connect(connectionStr).then(() => {
    console.log("Connected");

  })

  const a = await Bookmodel.find({
    releaseYear: { $gt: 2000 }
  });
  console.log(a.length);






  return NextResponse.json(a)
}