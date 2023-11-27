import styles from '../DetailsRecipe.module.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faFilePen } from '@fortawesome/free-solid-svg-icons';

export const EditDeleteButtons = ({
    onDeleteClick,
    recipe,
    likeId,
}) => {
    return(
        <div className={styles["edit-delete-buttons"]}>
            <Link className={styles["link-btn"]} to={`/recipes/${recipe._id}/edit`}
            >Edit <FontAwesomeIcon icon={faFilePen} className={styles["icon"]}/>
            </Link>
            <button 
                onClick={() => onDeleteClick(recipe, likeId)}
            >Delete <FontAwesomeIcon icon={faTrash} className={styles["icon"]}/>
            </button>
        </div> 
    );
};