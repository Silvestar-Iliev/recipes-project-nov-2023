import styles from './RecipesCatalog.module.css';
import { useContext, useEffect, useState } from "react";

import * as likeService from '../../services/likeService';

import { RecipeContext } from "../../contexts/RecipeContext";
import { RecipeCard } from "./RecipeCard/RecipeCard";

export const RecipeCatalog = () => {
    const { recipes } = useContext(RecipeContext);
    const [state, setState] = useState([]);

    
    useEffect(() => {
        
        likeService.getAll()
            .then(res => {

                res?.forEach(([id, likes]) => {
                    const data = recipes.find(x => x._id === id);

                    if(data){
                        data.likes = likes; 
                        setState(state => [...state, data])
                    };
                    
                });
            })
        
    }, [])


    return(
        <section className={styles["recipes-catalog"]}>
            <h2 className={styles["catalog-heading"]}>All recipes for you:</h2>
            <div className={styles["recipes-list"]}>
                {recipes
                    .sort((a, b) => b.likes - a.likes)
                    .map(recipe => <RecipeCard key={recipe._id} recipe={recipe}/>)}
            </div>
        </section>        
    );
};