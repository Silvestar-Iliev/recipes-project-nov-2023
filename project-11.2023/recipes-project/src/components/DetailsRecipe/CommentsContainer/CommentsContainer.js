import styles from '../DetailsRecipe.module.css';
import { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faFilePen } from '@fortawesome/free-solid-svg-icons';

import { useForm } from "../../../hooks/useForm";

import { AuthContext } from "../../../contexts/AuthContext";
import { ErrorContainer } from '../../common/ErrorContainer/ErrorContainer'; 



export const CommentsContainer = ({
    comments,
    onCreateCommentSubmit,
    onDeleteCommentClick,
}) => {
    const {isAuthenticated} = useContext(AuthContext);

    const {values, onChangeHandler, onSubmit, errorMessage} = useForm({
        comment: '',
    }, onCreateCommentSubmit )

    return(
        <div className={styles["comments-container"]}>
            <div className={styles["comment-section"]}>
                <h3>Comments:</h3>
                    {comments.map(x => (
                    <div className={styles["comment"]} key={x._id}>
                        <div>
                            <span>{x.username || x.userEmail}: </span>
                            <button onClick={() => onDeleteCommentClick(x._id)}>
                                <FontAwesomeIcon icon={faTrash} className={styles["icon"]}/>
                            </button>
                            <p>{x.comment}</p>
                        </div>
                    </div>
                    ))}
            </div>
            {errorMessage && <ErrorContainer error={errorMessage} />}            
            {isAuthenticated && 
                <div className={styles["comment-form"]}>
                    <form method="POST" onSubmit={onSubmit}>
                        <textarea 
                            placeholder="Write your comment"
                            name="comment"
                            value={values.comment}
                            onChange={onChangeHandler}
                        ></textarea>
                        <input type="submit" value="Add Comment" />
                    </form>
                </div>                
            }
        </div>
    );
};