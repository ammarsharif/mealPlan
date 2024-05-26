import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useDrop } from 'react-dnd';
import RecipeCard from '../common/RecipeCard';
import { toggleSidebar, moveRecipe } from '../../features/recipes/recipesSlice';

const DayColumn = ({ dayIndex }) => {
  const planner = useSelector((state) => state.recipes.planner[dayIndex]);
  const dispatch = useDispatch();

  const [, dropBreakfast] = useDrop(() => ({
    accept: 'RECIPE_CARD',
    drop: (item) => handleDrop(item.id, `breakfast-${dayIndex}`),
  }));

  const [, dropLunch] = useDrop(() => ({
    accept: 'RECIPE_CARD',
    drop: (item) => handleDrop(item.id, `lunch-${dayIndex}`),
  }));

  const [, dropDinner] = useDrop(() => ({
    accept: 'RECIPE_CARD',
    drop: (item) => handleDrop(item.id, `dinner-${dayIndex}`),
  }));

  const handleDrop = (sourceId, destinationId) => {
    dispatch(moveRecipe({ source: sourceId, destination: destinationId }));
  };

  return (
    <div className="day-column p-2">
      <h2 className="text-center text-xl font-bold mb-2 ml-10">
        Day {dayIndex + 1}
      </h2>
      <div ref={dropBreakfast} className="mb-4 pr-20">
        <RecipeCard
          onClick={() =>
            dispatch(toggleSidebar({ dayIndex, mealType: 'breakfast' }))
          }
          recipe={planner.breakfast}
          mealType="breakfast"
          dayIndex={dayIndex}
        />
      </div>
      <div ref={dropLunch} className="mb-4">
        <RecipeCard
          onClick={() =>
            dispatch(toggleSidebar({ dayIndex, mealType: 'lunch' }))
          }
          recipe={planner.lunch}
          mealType="lunch"
          dayIndex={dayIndex}
        />
      </div>
      <div ref={dropDinner} className="mb-4">
        <RecipeCard
          onClick={() =>
            dispatch(toggleSidebar({ dayIndex, mealType: 'dinner' }))
          }
          recipe={planner.dinner}
          mealType="dinner"
          dayIndex={dayIndex}
        />
      </div>
    </div>
  );
};

DayColumn.propTypes = {
  dayIndex: PropTypes.number.isRequired,
};

export default DayColumn;
