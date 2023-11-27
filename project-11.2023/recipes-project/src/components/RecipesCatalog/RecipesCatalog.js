import styles from './RecipesCatalog.module.css';
import { useContext } from "react";

import { RecipeContext } from "../../contexts/RecipeContext";
import { RecipeCard } from "./RecipeCard/RecipeCard";

export const RecipeCatalog = () => {
    const { recipes } = useContext(RecipeContext);


    return(
        <section className={styles["recipes-catalog"]}>
            <h2 className={styles["catalog-heading"]}>All our recipes for you:</h2>
            <div className={styles["recipes-list"]}>
                {recipes.map(recipe => <RecipeCard key={recipe._id} recipe={recipe}/>)}
            </div>
        </section>        
    );
};