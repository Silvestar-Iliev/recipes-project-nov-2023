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
        <div className="like-buttons">
            <div className="like-container">
                <button 
                    onClick={addLikeClick} 
                    disabled={isLiker}
                >Like <FontAwesomeIcon icon={faThumbsUp} className='icon'/></button>
                <p>Likes:<span> {likes}</span></p>
            </div>
            <button 
                onClick={addToFavoritesClick}
                disabled={isFavorite}
            >Add to favorites <FontAwesomeIcon icon={faHeart} className='icon'/></button>                    
        </div>  
    );
};