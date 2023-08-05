import ErrorClass from '../../../middlewares/ErrorClass.js';

export const recipeDataValidators = (
    image,
    name,
    price,
    available,
    mealType,
) => {
    if (!name || typeof name !== 'string' || name.length < 3) {
        ErrorClass.badRequestError('Name is required and must be a string');
    }
    if (!image || typeof image !== 'string') {
        ErrorClass.badRequestError('Recipe image is required and must be a string');
    }

    if (!price && price !== 0) {
        ErrorClass.badRequestError('Price is required');
    }
    if (typeof price !== 'number') {
        ErrorClass.badRequestError('Price must be a number');
    }
    if (price < 0) {
        ErrorClass.badRequestError('Price cannot be negative');
    }
    if (!mealType || typeof mealType !== 'string' || mealType.length > 50) {
        ErrorClass.badRequestError('Meal type is required and must be a string (maximum length 50)');
    }
    if (!available || typeof available !== 'string' || available.length < 3) {
        ErrorClass.badRequestError('Availablity is required and must be a string');
    }

};
