import { useContext } from "react";
import { Navigate, Outlet, useParams } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import { RecipeContext } from "../../contexts/RecipeContext";


export const GuestsRouteGuard = () => {
    const {isAuthenticated} = useContext(AuthContext);

    if (!isAuthenticated) {
        return <Navigate to='/users/login' />
    }

    return(
        <>
            {<Outlet />}
        </>
    );
};

export const UsersRouteGuard = () => {
    const {isAuthenticated} = useContext(AuthContext);
    
    if (isAuthenticated) {
        return <Navigate to='/recipes' />
    }

    return(
        <>
            {<Outlet />}
        </>
    );
};

export const IsOwnerRecipeGuard = () => {
    const { getRecipe } = useContext(RecipeContext);
    const {recipeId} = useParams();
    const {userId} = useContext(AuthContext);

    const currentRecipe = getRecipe(recipeId);

    if(currentRecipe && currentRecipe._ownerId !== userId) {
        return <Navigate to={`/recipes/${recipeId}`} replace /> 
    };

    return(
        <>
            {<Outlet />}
        </>
    );
};