import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Readrecipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const [savedRecipe, setSavedRecipe] = useState([]);

  useEffect(() => {
    const getRecipe = () => {
      axios
        .get('http://localhost:3001/recipe/recipe-by-id/' + id) // Added '/' before id
        .then(result => {
          setRecipe(result.data);
        })
        .catch(err => console.log(err));
    };

    const fetchSavedRecipe = () => {
      axios
        .get('http://localhost:3001/recipe/saved-recipes/' + id) // Added '/' before id
        .then(result => {
          setSavedRecipe(result.data.savedRecipe); // Fixed to use setSavedRecipe
        })
        .catch(err => console.log(err));
    };

    // Call the functions to fetch data
    getRecipe();
    fetchSavedRecipe();
  }, [id]);

  const saveRecipe = (recipeId) => {
    axios
      .put('http://localhost/recipes', { id, recipeId })
      .then(result => {
        console.log(result);
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <div className='d-flex justify-content-center container mt-3'>
        <img src={recipe.imgurl} alt="" />
      </div>
  
      <div className="p-2">
        <h2>{recipe.name}</h2>
        <button className='btn btn-warning' onClick={() => saveRecipe(recipe._id)}>Save</button>
        <h3>Description</h3>
        <p>{recipe.description}</p>
        <h2>Ingredients</h2>
        <p>{recipe.ingredients}</p>
        <img src={recipe.imgurl} alt="" />
      </div>
    </>
  );
}

export default Readrecipe;
