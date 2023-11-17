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
        <div className="comments-container">
            <div className="comment-section">
                <h3>Comments:</h3>
                    {comments.map(x => (
                    <div className="comment" key={x._id}>
                        <p>{x.username || x.userEmail}: {x.comment}</p>
                    </div>
                    ))}
            </div>

            {isAuthenticated && 
                <div className="comment-form">
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