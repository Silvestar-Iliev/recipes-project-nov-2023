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
        <div className="favorite-recipes-list">
            <h3>Favorite recipes:</h3>
            <ul>
            {myFavorites
                    .map(x => <div>
                              <Link 
                                key={x._id} 
                                to={`/recipes/${x.recipeId}`}
                              >{x.title}
                              </Link>
                                <div className="favorites-list-buttons">
                                    <button 
                                        type="button" 
                                        onClick={()=>onCheckClick(x._id)}
                                        id={x.checked? "checked": ''}
                                    ><FontAwesomeIcon icon={faCheck} className="icon"/>
                                    </button>
                                    <button 
                                        type="button" 
                                        onClick={() => onDeleteFavoriteClick(x._id)}
                                    ><FontAwesomeIcon icon={faTrash} className="icon"/>
                                    </button>                                    
                                </div>
                              </div>
                              )}
            </ul>
            <button 
                className="calculate-button"
                onClick={onCalculateCheckClick}
            >Calculate checked</button>
        </div>   
    );
};