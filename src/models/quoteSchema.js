import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const QuoteSchema = new Schema ({
  name: {
    type: String,
    required: true,
  },
  quote: {
    type: String,
    required: true,
  },
})

//Quote.plugin(mongoosePaginate);