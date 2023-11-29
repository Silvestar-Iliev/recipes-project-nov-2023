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


export const getLastThree = async () => {
    const query = encodeURIComponent(`_createdOn desc`);

    const data = await request.get(`${url}?sortBy=${query}`);
    const result = data.slice(0, 3);
    console.log(result);
    return result;
};


export const getAllForUser = async (userId) => {
    const query = encodeURIComponent(`_ownerId="${userId}"`);

    const result = await request.get(`${url}?where=${query}`);
    
    return result;
};


export const create = async (data) => {

    if (data.title.length > 20 || data.title.length < 4 ) {
        throw new Error('Title should be between 4-20 characters.');
    }  

    if (data.description.length > 80 || data.description.length < 10 ) {
        throw new Error('Description should be between 10-80 characters.');
    }       

    if (data.calories < 0 || data.protein < 0 || data.carbs < 0 || data.fat < 0) {
        throw new Error('Мacronutrients should be a positive numbers.');
    }   

    const result = await request.post( url, data );
        
    return result;        
};


export const del = async(recipeId) => {
    const result = await request.del(`${url}/${recipeId}`);

    return result;
};

export const edit = async(recipeId, data) => {
    if (data.title.length > 20 || data.title.length < 4 ) {
        throw new Error('Title should be between 4-20 characters.');
    }  

    if (data.description.length > 80 || data.description.length < 10 ) {
        throw new Error('Description should be between 10-80 characters.');
    }       

    if (data.calories < 0 || data.protein < 0 || data.carbs < 0 || data.fat < 0) {
        throw new Error('Мacronutrients should be a positive numbers.');
    }   


    const result = await request.put(`${url}/${recipeId}`, data);

    return result;
};




