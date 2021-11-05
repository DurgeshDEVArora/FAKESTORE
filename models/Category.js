import mongoose from 'mongoose'

const CategorySchema = new mongoose.Schema({
    name: String,
    image: String
})
const Category = new mongoose.model('category',CategorySchema)

export default Category;
