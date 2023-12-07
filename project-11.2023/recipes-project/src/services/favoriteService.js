import * as request from "./requester";

const url = 'http://localhost:3030/data/favorites';


// Use in Details page for set valid favorite recipes state and for correct "Add to favorites" button state
export const getFavorites = async(recipeId) => {
    const query = encodeURIComponent(`recipeId="${recipeId}"`);

    const result = await request.get(`${url}?select=_ownerId&where=${query}`) 
        .then(res => res.map(x => x._ownerId));

    return result;
};


export const addToFavorites = async(userId, recipeId, title, calories, protein, carbs, fat, imageUrl) =>  {
    let checked = false;
    await request.post(url, {userId, recipeId, title, calories, protein, carbs, fat, imageUrl, checked});

    return getFavorites(recipeId);
}; 

// Use in Profile page for correct rendering favorite recipes list
export const getAllForUser = async (userId) => {
    const query = encodeURIComponent(`_ownerId="${userId}"`);
    
    const result = await request.get(`${url}?where=${query}`);
    
    return result;
};

export const del = async (favoriteId) => {
    const result = await request.del(`${url}/${favoriteId}`);

    return result;
};