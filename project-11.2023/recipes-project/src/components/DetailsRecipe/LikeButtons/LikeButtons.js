import styles from '../DetailsRecipe.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faHeart } from '@fortawesome/free-solid-svg-icons';


export const LikeButtons = ({
    addLikeClick,
    addToFavoritesClick,
    likes,
    isLiker,
    isFavorite,
}) => {

    return(
        <div className={styles["like-buttons"]}>
            <div className={styles["like-container"]}>
                <button 
                    onClick={addLikeClick} 
                    disabled={isLiker}
                >Like <FontAwesomeIcon icon={faThumbsUp} className={styles['icon']}/></button>
                <p>Likes:<span> {likes || 0}</span></p>
            </div>
            <button 
                onClick={addToFavoritesClick}
                disabled={isFavorite}
            >Add to favorites <FontAwesomeIcon icon={faHeart} className={styles['icon']}/></button>                    
        </div>  
    );
};