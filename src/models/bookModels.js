const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        author: { type: String, required: true },
        ISBN: { type: String, required: true, unique: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
        publishedDate: { type: Date },
        genre: {
            type: String,
            enum: ['Fiction', 'Non-Fiction', 'Science', 'Biography', 'Others'],
        },
        description: { type: String },
    },
    { timestamps: true } // Adds createdAt and updatedAt
);

module.exports = mongoose.model('Book', bookSchema);
