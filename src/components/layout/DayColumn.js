import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import RecipeCard from '../common/RecipeCard';
import { toggleSidebar } from '../../features/recipes/recipesSlice';

const DayColumn = ({ dayIndex }) => {
  const planner = useSelector((state) => state.recipes.planner[dayIndex]);
  const dispatch = useDispatch();

  return (
    <div className="day-column p-2 ">
      <h2 className="text-center text-xl font-bold mb-2">Day {dayIndex + 1}</h2>
      <div className="mb-4">
        <RecipeCard
          onClick={() =>
            dispatch(toggleSidebar({ dayIndex, mealType: 'breakfast' }))
          }
          recipe={planner.breakfast}
        />
      </div>
      <div className="mb-4">
        <RecipeCard
          onClick={() =>
            dispatch(toggleSidebar({ dayIndex, mealType: 'lunch' }))
          }
          recipe={planner.lunch}
        />
      </div>
      <div className="mb-4">
        <RecipeCard
          onClick={() =>
            dispatch(toggleSidebar({ dayIndex, mealType: 'dinner' }))
          }
          recipe={planner.dinner}
        />
      </div>
    </div>
  );
};

DayColumn.propTypes = {
  dayIndex: PropTypes.number.isRequired,
};

export default DayColumn;
