import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faFilePen } from '@fortawesome/free-solid-svg-icons';

export const EditDeleteButtons = ({
    onDeleteClick,
    recipe,
    likeId,
}) => {
    return(
        <div className="edit-delete-buttons">
            <Link className="link-btn" to={`/recipes/${recipe._id}/edit`}
            >Edit <FontAwesomeIcon icon={faFilePen} className="icon"/>
            </Link>
            <button 
                onClick={() => onDeleteClick(recipe, likeId)}
            >Delete <FontAwesomeIcon icon={faTrash} className="icon"/>
            </button>
        </div> 
    );
};