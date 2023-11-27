import styles from '../Profile.module.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';


export const FavoritesRecipesList = ({
    myFavorites,
    onDeleteFavoriteClick,
    onCheckClick,
    onCalculateCheckClick,
}) => {

    return (
        <div className={styles["favorite-recipes-list"]}>
            <h3>Favorite recipes:</h3>
            <ul>
            {myFavorites
                    .map(x => <div key={x._id}>
                              <Link 
                                 
                                to={`/recipes/${x.recipeId}`}
                              >{x.title}
                              </Link>
                                <div className={styles["favorites-list-buttons"]}>
                                    <button 
                                        type="button" 
                                        onClick={()=>onCheckClick(x._id)}
                                        id={x.checked? styles["checked"] : ''}
                                    ><FontAwesomeIcon icon={faCheck} className={styles["icon"]}/>
                                    </button>
                                    <button 
                                        type="button" 
                                        onClick={() => onDeleteFavoriteClick(x._id)}
                                    ><FontAwesomeIcon icon={faTrash} className={styles["icon"]}/>
                                    </button>                                    
                                </div>
                              </div>
                              )}
            </ul>
            <button 
                className={styles["calculate-button"]}
                onClick={onCalculateCheckClick}
            >Calculate checked</button>
        </div>   
    );
};