import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Createdrecipe() {
  const [recipe, setRecipe] = useState({
    name: "",
    description: "",
    ingredients: "",
    imgurl: "",
    userId: window.localStorage.getItem("id")
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3001/recipe/createdrecipe', recipe)
      .then(result => {
        navigate('/');
        console.log(result.data);
        alert("Recipe created!");
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <div className='p-3 border border-1'>
        <h3>Create Recipe</h3>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='name' className='form-label'>Name</label>
            <input
              type='text'
              className='form-control'
              placeholder='Enter recipe name'
              name='name' 
              value={recipe.name}
              onChange={handleChange}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='description' className='form-label'>Description</label>
            <input
              type='text'
              className='form-control'
              placeholder='Enter description'
              name='description' 
              value={recipe.description}
              onChange={handleChange}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='ingredients' className='form-label'>Ingredients</label>
            <input
              type='text'
              className='form-control'
              placeholder='Enter ingredients'
              name='ingredients' 
              value={recipe.ingredients}
              onChange={handleChange}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='imgurl' className='form-label'>ImgUrl</label>
            <input
              type='text'
              className='form-control'
              placeholder='Enter image URL'
              name='imgurl' 
              value={recipe.imgurl}
              onChange={handleChange}
            />
          </div>
          <button type='submit' className='btn btn-success'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Createdrecipe;
