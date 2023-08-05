import express from 'express';
import {
    createRecipe,
    getAllRecipes,
    deleteSingleMeal,
    updateSingleRecipe,
    getSingleMeal
} from '../../controllers/recipes/recipie.js';

const router = express.Router();

router.post('/', createRecipe);
router.get('/', getAllRecipes);
router.delete('/:id', deleteSingleMeal);
router.put('/:id', updateSingleRecipe);
router.get('/:id', getSingleMeal);

export default router;

