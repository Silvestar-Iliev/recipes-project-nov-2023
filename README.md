
# Recipes Project - November 2023

# Description:

This project is an exam assignment for the ReactJS course at SoftUni in October 2023. The project is in the development stage, with the final submission deadline set for December 9, 2023. The project is a Single Page Application (SPA) developed using React (create-react-app), with custom HTML and CSS. It utilizes the SoftUni educational server as a backend. The application serves as a recipe website where users can create, modify, delete, and read various recipes.

# Installation:

1. Download the project folder and place it in the same directory as the SoftUni educational server folder.
2. Install the required node_modules by running npm i in the recipes-project folder.
3. In the project folder, open the terminal and start the project with "npm start".
4. In the server folder, open the terminal and start the server with "node server.js".

### The project has the following pages and basic functionalities:
  * Home page - renders the last three recipes added.
The information for each recipe is in a card containing a photo, title and likes of the recipe;
  * All recipes page (Catalog page) - renders all added recipes, with the recipes sorted by the number of likes (from most to least).
The information for each recipe is in a card containing a photo, title and likes of the recipe;
    Login page - representing a login form in the application, requiring email and password;
  * Register page - representing a registration form in the application, requiring email, username, password and repeatPassword;
  * Create recipe page - representing a form to create a recipe, accepting data for title, imgURL, short description, calories, protein, carbohydrates and fat.
  * Edit recipe page - representing a form for editing an existing recipe;
  * Details page - the page contains information about the recipe and comments to it.
    1. If the user is a guest, he will be able to see the comments for each recipe.
    2. If the user is a logged in user, he will be able to write comments.
       - As well as being able to delete their own comments.
    3. If the user is a logged-in user and is the owner of the recipe, he has access to buttons for deleting and changing the recipe.
    4. If the user is a logged in user and is not the owner of the recipe, he has access to buttons for liking and adding to favorites.
       - If the user has liked, the button is disabled and cannot re-like and cannot un-like.
       - If it has been added to favorites, the button is turned off, but the same can be turned on again if the user deletes the recipe from the list of favorites.
  * Profile page - contains information about the user's username and email.
     The page also contains two lists:
    1. List of own recipes - created by the user, with each link leading to the corresponding recipe.
    2. List of favorite recipes - added by the user with the button "add to favorites" from the detailed page of each recipe. Each link leads to the corresponding recipe.
       Each recipe has two buttons for:
        - A button to remove the recipe from the list of favorites, after which the button "Add to favorites" in the detailed page of the corresponding recipe will be active again.
        - Recipe selection button.
        - To the list of favorite recipes there is a button for calculating all selected recipes. After pressing it, a modal is rendered containing information about the selected recipes and how many total calories, proteins, carbohydrates and fats are contained per 100g. from each recipe.

I. Non-logged users have access to:
    - Home page;
    - All recipes (Catalog page);
    - Login;
    - Register;
    - Details page - next to the recipe information and read comments, cannot write comments, like or add to favorites.

II. A logged in user has access to:
    - Home page;
    - All recipes (Catalog page);
    - Details page - can read and write comments (delete own comments), can like and add to favorites (if not owner of the recipe) or change and delete (if owner of the recipe);
    - Profile page;
    - Logout;

# License:

This project is licensed under the MIT License.

# Contact:

For any inquiries or feedback, feel free to contact the project team at s_iliew@abv.bg

# Work on the project will continue until the defense date - 09.12.2023


