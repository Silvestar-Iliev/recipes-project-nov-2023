import styles from './DetailsRecipe.module.css';
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";


import * as recipeService from '../../services/recipeService';
import * as commentService from '../../services/commentService';
import * as likeService from '../../services/likeService';
import * as favoriteService from '../../services/favoriteService';


import { AuthContext } from "../../contexts/AuthContext";
import { RecipeContext } from "../../contexts/RecipeContext";

import { CommentsContainer } from "./CommentsContainer/CommentsContainer";
import { EditDeleteButtons } from "./EditDeleteButtons/EditDeleteButtons";
import { LikeButtons } from "./LikeButtons/LikeButtons";

export const DetailsRecipe = () => {
    const { onDeleteClick } = useContext(RecipeContext);

    const {recipeId} = useParams();
    const [recipe, setRecipe] = useState({});
    const [comments, setComments] = useState([]);
    const {userId, isAuthenticated, userEmail, username} = useContext(AuthContext);
    

    useEffect(() => {
        recipeService.getOne(recipeId)
            .then(res => {
                setRecipe(res);
            });
            
        commentService.getAll(recipeId)
            .then(res => {
                setComments(res);
            });

        likeService.getLikes(recipeId)
            .then(res => {  
                setRecipe(state => ({...state, likes: res}));
            });    
            
        favoriteService.getFavorites(recipeId)
            .then(res => {
                setRecipe(state => ({...state, favorites: res}));
            });
        
    }, [recipeId]);

    // add comment
    const onCreateCommentSubmit = async (values) => {
        const newComment = await commentService.create(recipeId, values.comment, username, userEmail);

        setComments(state => [...state, newComment]);
    };

    // delete comment

    const onDeleteCommentClick = async (commentId) => {
        await commentService.del(commentId);

        setComments(state => state.filter(x => x._id !== commentId)); 
    }

    //add like
    const addLikeClick = async() => {

        if (isLiker) {
            return alert(`${username} already likes ${recipe.title}`);
        }
        
        const res = await likeService.addLike(userId, recipeId);
        
        setRecipe(state => ({...state, likes: res}));
    };


    // add to favrites
    const addToFavoritesClick = async() => {

        if (isFavorite) {
            return alert(`${username} already add to favorites - ${recipe.title}`);
        }
        
        const res = await favoriteService
                                        .addToFavorites(userId, 
                                                        recipeId, 
                                                        recipe.title, 
                                                        recipe.calories,
                                                        recipe.protein, 
                                                        recipe.carbs, 
                                                        recipe.fat,
                                                        recipe.imageUrl);
        
        setRecipe(state => ({...state, favorites: res}));
    };

    

    const isOwner = recipe._ownerId === userId;
    const isLiker = recipe.likes?.includes(userId);
    const isFavorite = recipe.favorites?.includes(userId);

    
    return(
        <div className={styles["details-container"]}>
            <div className={styles["recipe-info"]}>
                    <div className={styles["recipe-details"]}>
                        <img src={recipe.imageUrl} alt={recipe.title} />
                        <h2>{recipe.title}</h2>
                        <p>For <span>100g</span></p>
                        <div className={styles["recipe-macros"]}>
                            <p>Calories: <span>{recipe.calories}</span></p>
                            <p>Protein: <span>{recipe.protein}g</span></p>
                            <p>Carbohydrates: <span>{recipe.carbs}g</span></p>
                            <p>Fat: <span>{recipe.fat}g</span></p>
                        </div>
                        <p>{recipe.description}</p>
                    </div>
                    <div className={styles["buttons"]}>
                        {isOwner && <EditDeleteButtons onDeleteClick={onDeleteClick} recipe={recipe} />}
                        {isAuthenticated && !isOwner &&
                            <LikeButtons 
                                addLikeClick={addLikeClick} 
                                addToFavoritesClick={addToFavoritesClick}
                                isLiker={isLiker} 
                                isFavorite={isFavorite}
                                likes={recipe.likes?.length} 
                            />
                        }  
                    </div>
            </div>
            <CommentsContainer 
                comments={comments} 
                onCreateCommentSubmit={onCreateCommentSubmit} 
                onDeleteCommentClick={onDeleteCommentClick}
            />
        </div>
    );
};