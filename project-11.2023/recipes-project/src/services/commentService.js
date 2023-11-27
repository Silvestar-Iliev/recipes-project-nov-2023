import * as request from "./requester";


let url = 'http://localhost:3030/data/comments';


export const getAll = async (recipeId) => {
    const query = encodeURIComponent(`recipeId="${recipeId}"`);

    const comments = await request.get(`${url}?where=${query}`);
    
    return comments;
};


export const create = async (recipeId, comment, username, userEmail) => {
    try {

        if(comment.length > 80){
            throw new Error('Comment should be no longer than 80 characters.')
        }

        const result = await request.post(url, { recipeId, comment, username, userEmail });

        return result;
    } catch (error) {
        throw error;
    }

};
