import styles from '../RecipesCatalog.module.css';
import { Link } from "react-router-dom";

export const RecipeCard = ({
    recipe,
}) => {
    return(
        <div className={styles["recipe-card"]}>
            <Link to={`/recipes/${recipe._id}`}>
                <img src={recipe.imageUrl} alt={recipe.title} />
                <h2>{recipe.title}</h2>
            </Link>
        </div>
    );
};