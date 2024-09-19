import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/recipe/recipes') 
      .then((response) => { 
        setRecipes(response.data);
      })
      .catch((err) => console.log(err));
  }, []); 

  return (
    <div>
      <div>
        <h2>Recipes</h2>
        {recipes.map(recipe => (
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

export default Home;
