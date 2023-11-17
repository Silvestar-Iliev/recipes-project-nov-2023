import * as request from "./requester";

const url = 'http://localhost:3030/data/recipes';


export const getAll = async () => {
    const data = await request.get(url)

    const result = Object.values(data);

    return result;
};


export const getOne = async (recipeId) => {
    const data = await request.get(`${url}/${recipeId}`);

    return data;
};


export const getAllForUser = async (userId) => {
    const query = encodeURIComponent(`_ownerId="${userId}"`);

    const result = await request.get(`${url}?where=${query}`);
    
    return result;
};


export const create = async (data) => {
    const result = await request.post( url, data);
    
    return result;
};


export const del = async(recipeId) => {
    const result = await request.del(`${url}/${recipeId}`);

    return result;
};

export const edit = async(recipeId, data) => {
    const result = await request.put(`${url}/${recipeId}`, data);

    return result;
};


