import * as request from "./requester";

const url = 'http://localhost:3030/data/favorites';

export const getFavorites = async(recipeId) => {
    const query = encodeURIComponent(`recipeId="${recipeId}"`);

    const result = await request.get(`${url}?select=_ownerId&where=${query}`) 
        .then(res => res.map(x => x._ownerId));

    return result;
};


export const addToFavorites = async(userId, recipeId, title, calories, protein, carbs, fat) =>  {
    let checked = false;
    await request.post(url, {userId, recipeId, title, calories, protein, carbs, fat, checked});

    return getFavorites(recipeId);
}; 

export const getAllForUser = async (userId) => {
    const query = encodeURIComponent(`_ownerId="${userId}"`);

    const result = await request.get(`${url}?where=${query}`);
    
    return result;
};

export const del = async (favoriteId) => {
    const result = await request.del(`${url}/${favoriteId}`);

    return result;
};