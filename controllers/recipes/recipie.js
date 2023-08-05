import ErrorClass from '../../middlewares/ErrorClass.js';
import { sendSuccessResponse } from '../../middlewares/SuccessClass.js';
import { Recipe } from '../../models/recipes.js';
import { catchAsync } from '../../utils/catchAsync.js';
import { recipeDataValidators } from './util/recipeDataValidators.js';

export const createRecipe = catchAsync(async (req, res) => {
    const { name, image, price, available, mealType } = req.body;
    console.log('Request Body', req.body);
    try {
        // Validate the request body
        recipeDataValidators(name, image, price, available, mealType);

        // Create a new recipe
        const recipe = await Recipe.create({
            name,
            image,
            price,
            available,
            mealType
        });

        sendSuccessResponse(res, recipe, 201, 'Recipe created successfully');
    } catch (error) {
        // Handle the error and send an appropriate error response
        console.error('Error creating recipe:', error);
        res.status(400).json({
            status: 'error',
            message: error.message || 'An error occurred while creating the recipe',
        });
    }

})
export const getAllRecipes = catchAsync(async (req, res) => {
    const recipe = await Recipe.find();
    const numOfRecipes = recipe.length;
    const message = `Successfully fetched ${numOfRecipes} recipes`;
    sendSuccessResponse(res, recipe, 200, message);
});



export const deleteSingleMeal = catchAsync(async (req, res) => {
    const { id } = req.params;
    if (!id) ErrorClass.badRequestError('Id is required');
    const meal = await Recipe.findByIdAndDelete(id);
    if (!meal) ErrorClass.notFoundError('Meal not found');
    sendSuccessResponse(res, meal, 200, 'Meal deleted successfully');
});

export const updateSingleRecipe = catchAsync(async (req, res) => {
    const { id } = req.params;
    if (!id) ErrorClass.badRequestError('Id is required');
    const { name, image, price, available, mealType } = req.body;
    recipeDataValidators(name, image, price, available, mealType);
    const meal = await Recipe.findByIdAndUpdate(
        id,
        {
            name,
            image,
            price,
            available,
            mealType,
        },
        { new: true }
    );
    sendSuccessResponse(res, meal, 200, 'Meal updated successfully');

})

export const getSingleMeal = catchAsync(async (req, res) => {
    const { id } = req.params;
    if (!id) ErrorClass.badRequestError('Id is required');
    const recipe = await Recipe.findById(id);
    if (!recipe) ErrorClass.notFoundError('Meal not found');
    sendSuccessResponse(res, recipe, 200, 'Meal fetched successfully');
});