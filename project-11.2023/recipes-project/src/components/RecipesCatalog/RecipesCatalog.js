import { RecipeCard } from "./RecipeCard/RecipeCard";


export const RecipeCatalog = ({
    recipes,
}) => {
    return(
        <section className="recipes-catalog">
            <h2 className="catalog-heading">All our recipes for you:</h2>
            <div className="recipes-list">
                {recipes.map(recipe => <RecipeCard key={recipe._id} recipe={recipe}/>)}
            </div>
        </section>        
    );
};