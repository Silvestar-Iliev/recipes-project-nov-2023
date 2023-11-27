import styles from '../DetailsRecipe.module.css';
import { useContext } from "react";
import { useForm } from "../../../hooks/useForm";

import { AuthContext } from "../../../contexts/AuthContext";


export const CommentsContainer = ({
    comments,
    onCreateCommentSubmit,
}) => {
    const {isAuthenticated} = useContext(AuthContext);

    const {values, onChangeHandler, onSubmit} = useForm({
        comment: '',
    }, onCreateCommentSubmit )

    return(
        <div className={styles["comments-container"]}>
            <div className={styles["comment-section"]}>
                <h3>Comments:</h3>
                    {comments.map(x => (
                    <div className={styles["comment"]} key={x._id}>
                        <p>{x.username || x.userEmail}: {x.comment}</p>
                    </div>
                    ))}
            </div>

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