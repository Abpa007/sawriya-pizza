import mongoose, { Schema, models } from 'mongoose';

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
  },
  description: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
  },
  image: {
    type: String,
    required: [true, 'Image URL is required'],
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Products = models.Products || mongoose.model('Products', productSchema, 'Products');

export default Products;
