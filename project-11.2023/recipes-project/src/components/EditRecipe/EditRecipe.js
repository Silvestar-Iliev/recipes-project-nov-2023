import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import * as recipeService from '../../services/recipeService';


export const EditRecipe = ({
    onEditSubmitHandler,
}) => {
    const {values, onChangeHandler, onSubmit, changeValues} = useForm({
        title: '',
        description: '',
        imageUrl: '',
        calories: 0,
        protein: 0,
        carbs: 0,
        fat: 0,
    }, onEditSubmitHandler);

    
    const { recipeId } = useParams();

    useEffect(() => {
        recipeService.getOne(recipeId)
            .then(result => {
                changeValues(result);
            })
    }, [recipeId])

    return (
        <div className="edit-recipe-form">
            <form method="POST" onSubmit={onSubmit}>
                <h2 className="create-header">Create recipe</h2>
                <label htmlFor="title">Recipe title:</label>
                <input 
                    type="text" 
                    placeholder="Title" 
                    required 
                    name="title"
                    value={values.title} 
                    onChange={onChangeHandler}
                />
                <label htmlFor="description">Description:</label>
                <textarea 
                    placeholder="Description" 
                    required
                    name="description"
                    value={values.description} 
                    onChange={onChangeHandler}
                ></textarea>
                <span>For 100g</span>
                <div className="recipe-macros">
                    <label htmlFor="calories">Calories:</label>
                    <input 
                        type="number" 
                        placeholder="Calories" 
                        required 
                        name="calories"
                        value={values.calories} 
                        onChange={onChangeHandler}
                    />
                    <label htmlFor="protein">Protein:</label>
                    <input 
                        type="number" 
                        placeholder="Protein" 
                        required 
                        name="protein"
                        value={values.protein} 
                        onChange={onChangeHandler}
                    />
                    <label htmlFor="carbs">Carbohydrates:</label>
                    <input 
                        type="number" 
                        placeholder="Carbs" 
                        required 
                        name="carbs"
                        value={values.carbs} 
                        onChange={onChangeHandler}
                    />
                    <label htmlFor="fat">Fat:</label>
                    <input 
                        type="number" 
                        placeholder="Fat" 
                        required 
                        name="fat"
                        value={values.fat} 
                        onChange={onChangeHandler}
                    />
                </div>
                <label htmlFor="imageUrl">Image URL:</label>
                <input 
                    type="text" 
                    placeholder="Image URL" 
                    required 
                    name="imageUrl"
                    value={values.imageUrl} 
                    onChange={onChangeHandler}
                />
                <input type="submit" value="Create Recipe" />
            </form>
        </div>
    );
};