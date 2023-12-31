import { createContext } from "react";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import * as recipeService from "../services/recipeService";


export const RecipeContext = createContext();


export const RecipeProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [recipes, setRecipes] = useState([]);
    

    useEffect(() => { 
        recipeService.getAll().then(res => { 
            const result = res.map(x => ({...x, likes:0}))
            setRecipes(result);
        });
        
    }, []);
    
    

    const onCreateRecipeSubmit = async (data) => {

        try {
            const newRecipe = await recipeService.create( data ); 

            setRecipes(state => [...state, {...newRecipe, likes: 0}])

            navigate('/recipes');            
        } catch (error) {
            throw error;
        }

    };


    const onEditSubmitHandler = async (values) => {

        try {
            let recipeId = values._id;
            const editRecipe = await recipeService.edit(recipeId, values); 

            setRecipes(state => state.map(x => x._id === recipeId ? {...editRecipe, likes: x.likes} : x));

            navigate(`/recipes/${recipeId}`);            
        } catch (error) {
            throw error;
        }

    };


    const onDeleteClick = async(recipe) => {
        // eslint-disable-next-line no-restricted-globals
        const result = confirm(`Are you sure you want to delete ${recipe.title}`);

        if (result) {
            await recipeService.del(recipe._id);
            
            setRecipes(state => state.filter(x => x._id !== recipe._id));          

            navigate('/recipes');
        };
    };

    // Use in IsOwnerRecipeGuard 
    const getRecipe = (recipeId) => {
        return recipes.find(x => x._id === recipeId);
    };

    const context = {
        recipes,   
        onCreateRecipeSubmit,
        onEditSubmitHandler,
        onDeleteClick,
        getRecipe,
 
    };

    return (
        <RecipeContext.Provider value={context}>
            {children}
        </RecipeContext.Provider>
    );

};