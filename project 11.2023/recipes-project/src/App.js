import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";


import * as recipeService from "./services/recipeService";
import { AuthProvider } from './contexts/AuthContext';


import { CreateRecipe } from "./components/CreateRecipe/CreateRecipe";
import { DetailsRecipe } from "./components/DetailsRecipe/DetailsRecipe";
import { EditRecipe } from "./components/EditRecipe/EditRecipe";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Profile } from "./components/Profile/Profile";
import { RecipeCatalog } from "./components/RecipesCatalog/RecipesCatalog";
import { Register } from "./components/Register/Register";
// import { NotFound } from "./components/Home/NotFound";
import { Logout } from "./components/Logout/Logout";



function App() {
    const navigate = useNavigate();
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        recipeService.getAll().then(res => { setRecipes(res) });
        
    }, []);


    const onCreateRecipeSubmit = async (data) => {
   
        const newRecipe = await recipeService.create( data ); 

        setRecipes(state => [...state, newRecipe])


        navigate('/recipes');
    };


    const onEditSubmitHandler = async (values) => {
        let recipeId = values._id;
        const editRecipe = await recipeService.edit(recipeId, values); 

        setRecipes(state => state.map(x => x._id === recipeId ? editRecipe : x));

        navigate(`/recipes/${recipeId}`);
    };


    const onDeleteClick = async(recipe) => {
        // eslint-disable-next-line no-restricted-globals
        const result = confirm(`Are you sure you want to delete ${recipe.title}`);

        if (result) {
            await recipeService.del(recipe._id);
            
            setRecipes(state => state.filter(x => x._id !== recipe._id));          

            navigate('/recipes');
        };
    };

    return (
        <AuthProvider>
        <div className="app">
            <Header />

            <main id="main">
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/users/login" element={<Login />}/>
                    <Route path="/users/logout" element={<Logout />}/>
                    <Route path="/users/register" element={<Register />}/>
                    <Route path="/recipes/create-recipe" element={<CreateRecipe onCreateRecipeSubmit={onCreateRecipeSubmit}/>}/>
                    <Route path="/recipes" element={<RecipeCatalog recipes={recipes} />}/>
                    <Route path="/recipes/:recipeId" element={<DetailsRecipe onDeleteClick={onDeleteClick} />}/>
                    <Route path="/recipes/:recipeId/edit" element={<EditRecipe onEditSubmitHandler={onEditSubmitHandler}/>}/>
                    <Route path="/users/profile" element={<Profile />} />
                    {/* <Route path='*' element={<NotFound /> }/> */}
                </Routes>
            </main>
            
            <Footer />
        </div>
        </AuthProvider>
    );
}

export default App;
