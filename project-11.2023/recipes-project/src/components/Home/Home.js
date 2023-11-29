import styles from './Home.module.css';

import { useContext, useEffect, useState } from "react";

import * as likeService from '../../services/likeService';

import { RecipeContext } from "../../contexts/RecipeContext";
import { RecipeCard } from "../RecipesCatalog/RecipeCard/RecipeCard";

export const Home = () => {
    const { lastRecipes } = useContext(RecipeContext);
    const [state, setState] = useState([]);

    
    useEffect(() => {
        
        likeService.getAll().then(res => {
     
            const finalRes = [];
            res.forEach(([id, likes]) => {
                const data = lastRecipes.find(x => x._id === id);

                if(data){
                   data.likes = likes; 
                   finalRes.push(data);
                };
                
            });

            return finalRes;
        }).then(res => setState([...res]));

        
    }, [])


    return(
        <div className={styles["hero-image"]}>
            <div className={styles["hero-text"]}>
                <h1>Welcome to the recipe page</h1>
                <p>Last three recipes:</p>
                <div className={styles["recipes-list"]}>
                    {lastRecipes.map(recipe => <RecipeCard key={recipe._id} recipe={recipe}/>)}
                </div>
            </div>
        </div>
    );
};