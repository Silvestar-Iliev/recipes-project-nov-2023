import { Routes, Route } from "react-router-dom";

import { AuthProvider } from './contexts/AuthContext';
import { RecipeProvider } from './contexts/RecipeContext';


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
import { NotFound } from "./components/Home/NotFound";
import { Logout } from "./components/Logout/Logout";
import { GuestsRouteGuard, UsersRouteGuard, IsOwnerRecipeGuard } from "./components/common/RouteGuard";


function App() {

    return (
        <AuthProvider>
            <RecipeProvider>
                <div className="app">
                    <Header />

                    <main id="main">
                        <Routes>
                            <Route path="/" element={<Home />}/>
                            <Route path="/recipes" element={<RecipeCatalog />}/>
                            <Route path="/recipes/:recipeId" element={<DetailsRecipe />}/>
                            

                            <Route element={<UsersRouteGuard />}>
                                <Route path="/users/login" element={<Login />}/>
                                <Route path="/users/register" element={<Register />}/>
                            </Route>

                            <Route element={<GuestsRouteGuard />}>
                                <Route path="/users/profile" element={<Profile />} />   
                                <Route element={<IsOwnerRecipeGuard />}>
                                    <Route path="/recipes/:recipeId/edit" element={<EditRecipe />}/> 
                                </Route> 
                                <Route path="/recipes/create-recipe" element={<CreateRecipe />}/> 
                                <Route path="/users/logout" element={<Logout />}/>                  
                            </Route>
                            <Route path='*' element={<NotFound /> }/>
                        </Routes>
                    </main>
                    
                    <Footer />
                </div>
            </RecipeProvider>
        </AuthProvider>
    );
}

export default App;
