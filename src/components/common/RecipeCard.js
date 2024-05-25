import React from 'react';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card bg-white shadow p-4">
      {recipe ? (
        <>
          <img src={recipe.image} alt={recipe.title} className="w-full h-32 object-cover"/>
          <h3 className="mt-2 font-bold">{recipe.title}</h3>
          <p>{recipe.duration}</p>
        </>
      ) : (
        <p>Empty!</p>
      )}
    </div>
  );
};

export default RecipeCard;
