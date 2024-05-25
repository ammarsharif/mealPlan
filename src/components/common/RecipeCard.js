import PropTypes from 'prop-types';
import image from '../../assets/images/gray.jpeg';

const RecipeCard = ({ recipe, onClick }) => {
  return (
    <div
      className="flex flex-col items-center border rounded-lg overflow-hidden shadow-lg"
      style={{ height: '206.02px', width: '185.99px' }}
    >
      <img
        src={recipe ? recipe.image : image}
        alt={recipe ? recipe.title : 'Title Image'}
        className="w-full h-28 object-cover"
        style={{ height: '72.02px', width: '185px' }}
      />
      <div className="p-2 text-center flex flex-col justify-between flex-1">
        <div>
          <h3 className="font-semibold">
            {recipe ? recipe.title : 'One Pot Creamy Cajun Pasta'}
          </h3>
          <p>{recipe ? recipe.duration : '15 min'}</p>
        </div>
        <button
          onClick={onClick}
          className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg"
        >
          View Recipe
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
};

export default RecipeCard;
