import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Savedrecipe() {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const userId = window.localStorage.getItem("id"); // Correctly retrieving the user ID

  useEffect(() => {
    // Correctly concatenate the userId in the URL
    axios.get(`http://localhost:3001/recipe/user-recipes/${userId}`)
      .then((response) => {
        setSavedRecipes(response.data); // Setting the saved recipes to state
      })
      .catch((err) => console.log(err));
  }, [userId]);

  return (
    <div>
      <div>
        <h2>Saved Recipes</h2>
        {savedRecipes.map((recipe) => (
          <div key={recipe._id} className="mt-4 p-3 border">
            <Link to={`/read-recipe/${recipe._id}`} className="text-decoration-none">
              <h3>{recipe.name}</h3>
              <p>{recipe.description}</p>
            </Link>
            <img src={recipe.imgurl} alt={recipe.name} className="img-fluid" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Savedrecipe;
