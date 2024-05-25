import { useSelector, useDispatch } from 'react-redux';

import { addRecipeToPlanner, toggleSidebar } from '../../features/recipes/recipesSlice';

const Sidebar = () => {
  const { recipes, currentDayIndex, currentMealType } = useSelector((state) => state.recipes);
  const dispatch = useDispatch();

  const handleAddToPlanner = (recipe) => {
    dispatch(addRecipeToPlanner({ dayIndex: currentDayIndex, mealType: currentMealType, recipe }));
    dispatch(toggleSidebar({}));
  };

  return (
    <div className="fixed right-0 top-0 bg-gray-100 h-full w-1/3 p-4 shadow-lg">
      <button className="mb-4" onClick={() => dispatch(toggleSidebar({}))}>Close</button>
      <h2 className="text-xl font-bold mb-4">Recipes</h2>
      <div className="space-y-4">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card bg-white shadow p-4">
            <img src={recipe.image} alt={recipe.title} className="w-full h-32 object-cover"/>
            <h3 className="mt-2 font-bold">{recipe.title}</h3>
            <p>{recipe.duration}</p>
            <button 
              className="bg-blue-500 text-white p-2 mt-2"
              onClick={() => handleAddToPlanner(recipe)}
            >
              Add to Planner
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
