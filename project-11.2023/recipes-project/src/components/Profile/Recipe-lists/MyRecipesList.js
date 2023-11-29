import styles from '../Profile.module.css';
import { Link } from "react-router-dom";


export const MyRecipesList = ({
    myRecipes,
}) => {
    return(
        <div className={styles["my-recipes-list"]}>
            <h3>My recipes:</h3>
            <ul>
                {myRecipes
                    .map(x => <Link key={x._id} to={`/recipes/${x._id}`}>
                                <img className={styles["my-recipes-list-img"]} 
                                src={x.imageUrl} 
                                alt={x.title} />
                                {x.title}</Link>)}
            </ul>
        </div>
    );
};