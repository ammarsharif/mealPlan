import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import RecipeCard from '../common/RecipeCard';
import { toggleSidebar } from '../../features/recipes/recipesSlice';

const DayColumn = ({ dayIndex }) => {
  const planner = useSelector((state) => state.recipes.planner[dayIndex]);
  const dispatch = useDispatch();

  return (
    <div className="day-column">
      <h2 className="text-xl font-bold mb-4">Day {dayIndex + 1}</h2>
      <div onClick={() => dispatch(toggleSidebar({ dayIndex, mealType: 'breakfast' }))}>
        <RecipeCard recipe={planner.breakfast} />
      </div>
      <div onClick={() => dispatch(toggleSidebar({ dayIndex, mealType: 'lunch' }))}>
        <RecipeCard recipe={planner.lunch} />
      </div>
      <div onClick={() => dispatch(toggleSidebar({ dayIndex, mealType: 'dinner' }))}>
        <RecipeCard recipe={planner.dinner} />
      </div>
    </div>
  );
};

DayColumn.propTypes = {
    dayIndex: PropTypes.number.isRequired,
  };

export default DayColumn;
