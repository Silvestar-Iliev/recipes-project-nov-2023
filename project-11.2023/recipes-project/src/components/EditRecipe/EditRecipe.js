import styles from './EditRecipe.module.css';
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";

import { RecipeContext } from "../../contexts/RecipeContext";

import { useForm } from "../../hooks/useForm";
import * as recipeService from '../../services/recipeService';
import { ErrorContainer } from '../common/ErrorContainer/ErrorContainer';


export const EditRecipe = () => {
    const { onEditSubmitHandler } = useContext(RecipeContext);

    const {values, onChangeHandler, onSubmit, changeValues, errorMessage} = useForm({
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
        <>
        {errorMessage && <ErrorContainer error={errorMessage} />}   
        <div className={styles["edit-recipe-form"]}>
            <form method="POST" onSubmit={onSubmit}>
                <h2 className={styles["edit-header"]}>Edit recipe</h2>
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
                <div className={styles["recipe-macros"]}>
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
                <input type="submit" value="Edit Recipe" />
            </form>
        </div>
        </>
        
    );
};