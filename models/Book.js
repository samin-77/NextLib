import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['Story', 'Tech', 'Science'],
  },
  available_quantity: {
    type: Number,
    required: true,
    min: 0,
  },
  image_url: {
    type: String,
    required: true,
  },
});

const Book = mongoose.models.Book || mongoose.model('Book', bookSchema);

export default Book;
