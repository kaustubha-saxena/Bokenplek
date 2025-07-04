import mongoose from 'mongoose';
const { Schema } = mongoose;

const bookschema = new Schema({
  title: {
    type: String
    
  },
  author:{ type: String },
  isbn: String,
  publisher: String,
  publication:String,
  pageCount: Number,
  dimensions: String,
  weight: Number,
  releaseYear: Number,      
  rating:Number,
  genre:String,
  tag: String,
  recommendation: String,
  description: String,  
  type:String,
  mrp:Number,
  priceAfterDiscount:Number,
  imgName:String,
  
});

export const Bookmodel = mongoose.models.books || mongoose.model('books', bookschema);