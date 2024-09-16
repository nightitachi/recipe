import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Home() {
  const [recipes, setRecipes]= useState([])
  useEffect(()=>{
    axios.get('/http://localhost:3001/recipe/recipes')
    .then(recipes=>{
      setRecipes(recipes.data)
    }).catch(err=> console.log(err))
  })
  return (
    <div>
      <div>
        <h2>
          {recipes.map(recipe=>(
            <div>
              <h3>{recipe.name}</h3>
              <img src={recipe.imgurl} alt="" />
              </div>
          ))}
        </h2>
      </div>
    </div>
  )
}

export default Home
