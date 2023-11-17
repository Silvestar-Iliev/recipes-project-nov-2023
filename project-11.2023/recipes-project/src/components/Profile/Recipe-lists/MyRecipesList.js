import { Link } from "react-router-dom";


export const MyRecipesList = ({
    myRecipes,
}) => {
    return(
        <div className="my-recipes-list">
            <h3>My recipes:</h3>
            <ul>
                {myRecipes
                    .map(x => <Link key={x._id} to={`/recipes/${x._id}`}>{x.title}</Link>)}
            </ul>
        </div>
    );
};