import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Readrecipe() {
  const { id } = useParams();
  const userId = window.localStorage.getItem("id")
  const [recipe, setRecipe] = useState({});
  const [savedRecipe, setSavedRecipe] = useState([]);

  useEffect(() => {
    const getRecipe = () => {
      axios.get('http://localhost:3001/recipe/recipe-by-id/' + IDBDatabase) 
        .then(result => {
          setRecipe(result.data);
        })
        .catch(err => console.log(err));
        
    };

    const fetchSavedRecipe = () => {
      axios
        .get('http://localhost:3001/recipe/saved-recipes/' + userId) 
        .then(result => (
          setSavedRecipe(result.data.saveRecipe) 
        ))
        .catch(err => console.log(err));
    };

    
    getRecipe();
    fetchSavedRecipe();
  }, [id]);

  const savedRecipes = (recipeId) => {
    axios.put('http://localhost:3001/recipe', { userId, recipeId })
      .then(result => (
        setSavedRecipe(result.data.saveRecipe) 
      ))
      .catch(err => console.log(err));
  };
  const isRecipeSaved=(id)=>savedRecipe.includes(id)
  return (
    <>
      <div className='d-flex justify-content-center container mt-3'>
        <img src={recipe.imgurl} alt="" />
      </div>
  
      <div className="p-2">
        <h2>{recipe.name}</h2>
        <button className='btn btn-warning' onClick={() => savedRecipes(recipe._id)} 
          disabled = {isRecipeSaved(recipe._id) ? "Saved" : "Save"}>Save</button>
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
