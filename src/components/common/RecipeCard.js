import PropTypes from 'prop-types';
import { useDrag } from 'react-dnd';
import image from '../../assets/images/gray.jpeg';
import { FaArrowRight } from 'react-icons/fa';

const RecipeCard = ({ recipe, onClick, mealType, dayIndex }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'RECIPE_CARD',
    item: { id: `${mealType}-${dayIndex}` },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className="flex flex-col items-center border rounded-lg overflow-hidden shadow-lg m-1"
      style={{
        height: '226.02px',
        width: '185.99px',
        marginBottom: '3em',
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      <img
        src={recipe ? recipe.image : image}
        alt={recipe ? recipe.title : 'Title Image'}
        className="w-full h-28 object-cover"
        style={{ height: '72.02px', width: '185px' }}
      />
      <div className="p-2 flex flex-col justify-around flex-1">
        <div className="pl-2">
          <h3 className="font-semibold">
            {recipe ? recipe.title : 'One Pot Creamy Cajun Pasta'}
          </h3>
          <p>{recipe ? recipe.duration : '15 min'}</p>
        </div>
        <button
          onClick={onClick}
          className="flex items-center pl-8 mt-2 px-4 py-2 bg-transparent text-red-200 border border-red-200 rounded-lg"
          style={{ borderColor: '#FF644C', color: '#FF644C' }}
        >
          View Recipe
          <FaArrowRight className="ml-2 mt-1" style={{ color: '#FF644C' }} />
        </button>
      </div>
    </div>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    duration: PropTypes.string,
  }),
  onClick: PropTypes.func,
  mealType: PropTypes.string.isRequired,
  dayIndex: PropTypes.number.isRequired,
};

export default RecipeCard;
