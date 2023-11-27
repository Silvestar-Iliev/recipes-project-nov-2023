import styles from './Home.module.css';
import { useContext, useState } from "react";

import { RecipeContext } from "../../contexts/RecipeContext";

export const Home = () => {
    const {recipes} = useContext(RecipeContext);
    const [lastThreeRecipes, setLastThreeRecipes] = useState([]);


    return(
        <div className={styles["hero-image"]}>
            <div className={styles["hero-text"]}>
                <h1>Welcome to the recipe page</h1>
                <p>Last three recipes:</p>
            </div>
        </div>
    );
};