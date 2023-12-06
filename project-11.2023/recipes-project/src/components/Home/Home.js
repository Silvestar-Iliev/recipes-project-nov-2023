import styles from './Home.module.css';

import { useContext, useEffect, useState } from "react";


import * as likeService from '../../services/likeService';

import { RecipeContext } from "../../contexts/RecipeContext";
import { RecipeCard } from "../RecipesCatalog/RecipeCard/RecipeCard";

export const Home = () => {
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
        <div className={styles["hero-image"]}>
            <div className={styles["hero-text"]}>
                <h1>Welcome to the recipe page</h1>
                <p>Last three recipes:</p>
                <div className={styles["recipes-list"]}>
                    {recipes
                        .sort((a, b) => b._createdOn - a._createdOn)
                        .slice(0, 3)
                        .map(recipe => <RecipeCard key={recipe._id} recipe={recipe}/>)}
                </div>
            </div>
        </div>
    );
};