import React from 'react';
import './RecipeList.css';

const recipes = [
  { name: 'Roasted Tomato Soup', rating: 4.7, time: '25 mins' },
  { name: 'Peanut Butter Cookies', rating: 4.8, time: '20 mins' },
  { name: 'Chicken Parmesan', rating: 4.9, time: '40 mins' },
  { name: 'Chicken Parmesan', rating: 4.9, time: '40 mins' },
  { name: 'Chicken Parmesan', rating: 4.9, time: '40 mins' },
  { name: 'Chicken Parmesan', rating: 4.9, time: '40 mins' },
  { name: 'Chicken Parmesan', rating: 4.9, time: '40 mins' },
  { name: 'Chicken Parmesan', rating: 4.9, time: '40 mins' },
  { name: 'Chicken Parmesan', rating: 4.9, time: '40 mins' },
  { name: 'Chicken Parmesan', rating: 4.9, time: '40 mins' },
  // Añade más recetas aquí...
];

const RecipeList = () => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe, index) => (
        <div key={index} className="recipe-card">
          <img src={`src/assets/${index}.png`} alt={recipe.name} className="recipe-image" />
          <h3>{recipe.name}</h3>
          <p>{recipe.rating} - {recipe.time}</p>
          
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
