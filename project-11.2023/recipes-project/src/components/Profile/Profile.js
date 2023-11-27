import styles from './Profile.module.css';
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import * as recipeService from '../../services/recipeService';
import * as favoriteService from '../../services/favoriteService';


import { MyRecipesList } from "./Recipe-lists/MyRecipesList";
import { FavoritesRecipesList } from "./Recipe-lists/FavoriteRecipesList";
import { ResultCalc } from "./Recipe-lists/ResultCalc";

export const Profile = () => {
    const {userId, userEmail, username} = useContext(AuthContext);
    const [myRecipes, setMyRecipes] = useState([]);
    const [myFavorites, setMyFavorites] = useState([]);
    const [macros, setMacros] = useState(null);

 
    useEffect(() => {
        recipeService.getAllForUser(userId)
            .then(res => {
                setMyRecipes(res);
            });

        favoriteService.getAllForUser(userId)
            .then(res => {
                setMyFavorites(res);
            });
    }, []);


    const onDeleteFavoriteClick = async (favoriteId) => {
        await favoriteService.del(favoriteId);
            
        setMyFavorites(state => state.filter(x => x._id !== favoriteId));    
    };

    const onCheckClick = (favoriteId) => {
        const checkFavorite = myFavorites.find(x => x._id === favoriteId);

        if (checkFavorite.checked === false) {
            checkFavorite.checked = true;
        } else {
            checkFavorite.checked = false;
        } 

        setMyFavorites(state => state.filter(x => x._id === favoriteId? {...checkFavorite} : x));     
          
    };


    const onCalculateCheckClick = () => {

        const calcChecked = myFavorites
                                    .filter(x => x.checked === true)
                                    .map(x => ({title: x.title,
                                                calories:  Number(x.calories),
                                                protein: Number(x.protein),
                                                carbs: Number(x.carbs),
                                                fat: Number(x.fat),
                                               })
                                    ).reduce((acc, curr) => {
                                        acc.title.push(curr.title);
                                        acc.calories += curr.calories;
                                        acc.protein += curr.protein;
                                        acc.carbs += curr.carbs;
                                        acc.fat += curr.fat;

                                        return acc;
                                    },{title: [], calories: 0, protein: 0, carbs: 0, fat: 0});
        
        
        if (calcChecked.title.length === 0 ) {
            return alert('To calculate, you need to select favorite recipes.');
        }  

        
        setMacros(calcChecked);
    };

    return(
        <div className={styles["profile-container"]}>
            <div className={styles["user-info"]}>
                <h2>User Profile</h2>
                <p>Username: <span>{username || userEmail}</span></p>
                <p>Email: <span>{userEmail}</span></p>
            </div>
        
            <div className={styles["recipes-lists"]}>
                <MyRecipesList myRecipes={myRecipes} />
                <FavoritesRecipesList 
                    myFavorites={myFavorites} 
                    onDeleteFavoriteClick={onDeleteFavoriteClick}
                    onCheckClick={onCheckClick}
                    onCalculateCheckClick={onCalculateCheckClick}
                />
            </div>
            {macros && <ResultCalc macros={macros}/>}     
        </div>
    );
};