import ContentContainer from '../ReuseableComponent/ContentContainer';
import { GiShoppingCart } from 'react-icons/gi';
import DayColumn from './DayColumn';
import breakfast from '../../assets/images/muffins.jpeg';
import lunch from '../../assets/images/chicken.jpeg';
import dinner from '../../assets/images/daal.jpeg';

const PlannerGrid = () => {
  return (
    <ContentContainer width={100}>
      <div
        className="flex justify-center items-center min-h-screen min-w-screen rounded-lg"
        style={{ width: '100%', height: '1030' }}
      >
        <div
          className="bg-white rounded-lg p-5 shadow-lg"
          style={{ paddingRight: '2em' }}
        >
          <h2 className="text-sm ml-6">New!</h2>
          <div className="flex justify-between items-center mb-4 ml-6">
            <h1 className="text-4xl" style={{ fontWeight: '900' }}>
              WWL Meal Plan for December 5 - 12
            </h1>
            <button
              className="flex items-center border border-gray-300 rounded-lg p-3"
              style={{ backgroundColor: '#D2D82C' }}
            >
              <GiShoppingCart />
              <h2
                className="ml-2"
                style={{ color: '#005A5B', fontWeight: '800' }}
              >
                Get the Shopping List
              </h2>
            </button>
          </div>
          <p className="text-sm mb-4 ml-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            ullamcorper mattis lorem non.
          </p>
          <div className="flex">
            <div className="flex flex-col justify-around -mr-5">
              <div className="flex flex-col items-center mt-10">
                <p className="text-1xl font-bold transform -rotate-90">
                  Breakfast
                </p>
                <img
                  src={breakfast}
                  alt="Separator"
                  className="rounded-full w-6 h-6 "
                  style={{ marginTop: '2em' }}
                />
              </div>
              <div className="flex flex-col items-center ">
                <p className="text-1xl font-bold transform -rotate-90 ">
                  Lunch
                </p>
                <img
                  src={lunch}
                  alt="Separator"
                  className="rounded-full  w-6 h-6 "
                  style={{ marginTop: '1.3em' }}
                />
              </div>
              <div className="flex flex-col items-center ">
                <p className="text-1xl font-bold transform -rotate-90">
                  Dinner
                </p>
                <img
                  src={dinner}
                  alt="Separator"
                  className="rounded-full  w-6 h-6 "
                  style={{ marginTop: '1.3em' }}
                />
              </div>
            </div>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 ">
              {Array.from({ length: 6 }, (_, dayIndex) => (
                <DayColumn key={dayIndex} dayIndex={dayIndex} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
};

export default PlannerGrid;
