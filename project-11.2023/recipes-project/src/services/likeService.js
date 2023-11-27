import * as request from "./requester";

const url = 'http://localhost:3030/data/likes';

export const getLikes = async(recipeId) => {
    const query = encodeURIComponent(`recipeId="${recipeId}"`);

    const result = await request.get(`${url}?select=_ownerId&where=${query}`) 
        .then(res => res.map(x => x._ownerId));

    return result;
};

export const addLike = async(userId, recipeId) =>  {
    await request.post(url, {userId, recipeId});

    return getLikes(recipeId);
}; 





