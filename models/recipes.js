import mongoose, { Mongoose } from 'mongoose';

const recipeSchema = new mongoose.Schema(
    {
        image: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true,
        },
        available: {
            type: String,
            required: true
        },
        mealType: {
            type: String,
            required: true
        },
        savedBy: [
            {
                type: mongoose.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        timestamps: true
    }
);
recipeSchema.set('toObject', { getters: true, lean: true });
recipeSchema.set('toJSON', { getters: true, lean: true });
export const Recipe = mongoose.model('Recipe', recipeSchema);
