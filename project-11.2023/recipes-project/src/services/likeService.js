import * as request from "./requester";

const url = 'http://localhost:3030/data/likes';

// Use in Details page for set valid likes recipes state and for correct "Like" button state
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

// Use in Recipes catalog & Home for coorect likes info in every Card recipe
export const getAll = async () => {

    try {
        const result = await request.get(url)
            .then(res => res.map(x => x.recipeId))
            .then(res => { 
                    const currData = {};
        
                    res.forEach(x => { 
                        currData[x] = (currData[x] || 0) + 1;  
                    });
                    
                    const sortedLikes = Object.entries(currData)
                                                        .sort((a, b) => b[1] - a[1]);
                      
                    return sortedLikes;
                });

        if (result.length === 0) {
            throw new Error('No likes yet.')
        }
      
        return result;        
    } catch (error) {
        console.log(error.message);
    }

};





