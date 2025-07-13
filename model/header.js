import mongoose from 'mongoose';
const { Schema } = mongoose;

const headerschema = new Schema({
  genre:String,
  header:String,
  tagline:String
  
});

export const Headermodel = mongoose.models.header || mongoose.model('header', headerschema);