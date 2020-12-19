const router = require('express').Router();
const Recipes = require('./recipes-model.js.js');
const restricted = require('../auth/restricted-middleware.js');

router.get('/', restricted, (req, res) => {
console.log(req.user);
const userId = req.user.id;

Recipes
    .getRecipes(userId)
    .then(recipes => {
        res.status(200).json({recipes});
    })
    .catch(err => {
    res.status(500).json({message: 'cant retrieve recipes.'})
    });
});

router.get('/:id', restricted, (req, res) => {
const recipeId = req.params.id
const userId = req.user.id

Recipes
    .getRecipeById(recipeId, userId)
    .then(recipe => {
    if(!recipe) {
        res.status(404).json({message: ' ant find a recipe with this id and user.'})
    } else {
        res.status(200).json({recipe});
    };
    })
    .catch(err => {
    console.log(err);
    res.status(500).json({err})
    });
});

router.post('/', restricted, (req, res) => {
const recipe = req.body;
const userId = req.user.id


Recipes
    .addRecipe(recipe, userId)
    .then(recipes => {
    res.status(201).json(recipes);
    })
    .catch(err => {
    
    res.status(500).json({err})
    });
});

router.delete('/:id', restricted, (req, res) => {

const recipeId = req.params.id;
const userId = req.user.id;

Recipes
    .deleteRecipe(recipeId, userId)
    .then(recipes => {
    res.status(204).json(recipes)
    })
    .catch( err => {
    res.status(500).json({message: 'Cant find Recipe.'})
    });
});

router.put('/:id', restricted, (req, res) => {
const recipeId = req.params.id;
const userId = req.user.id;
const recipeUpdate = req.body;

Recipes
    .updateRecipe(recipeId, userId, recipeUpdate)
    .then(result => {
    if(!result) {
        res.status(404).json({message: 'Cant find recipe with this user.'})
    } else {
        res.status(200).json(result);
    };
    })
    .catch(err => {
    res.status(500).json(err);
    });
});

module.exports = router;