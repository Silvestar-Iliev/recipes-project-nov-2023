import styles from '../RecipesCatalog.module.css';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faHeart } from '@fortawesome/free-solid-svg-icons';

export const RecipeCard = ({
    recipe,
}) => {
    return(
        <div className={styles["recipe-card"]}>
            <Link to={`/recipes/${recipe._id}`}>
                <img src={recipe.imageUrl} alt={recipe.title} />
                <h2>{recipe.title}</h2>
                <span>{recipe.likes ? recipe.likes : 0} <FontAwesomeIcon icon={faThumbsUp} className={styles['icon']}/></span> 
            </Link>
        </div>
    );
};