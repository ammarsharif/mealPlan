import '../../assets/styles/MainSidebar.css';
import { CiGlobe } from 'react-icons/ci';
import { GrPlan } from 'react-icons/gr';
import { TfiBookmarkAlt } from 'react-icons/tfi';
import { CgProfile } from 'react-icons/cg';

const MainSidebar = () => {
  return (
    <div className="relative bottom-0 left-0 bg-white custom-wh p-0 shadow-lg overflow-y-auto flex flex-col justify-between h-full">
      <div>
        <div className="flex flex-col items-center justify-center mb-7 mt-7 cursor-pointer">
          <CiGlobe className="text-4xl mb-1" />
          <h4 className="text-base font-semibold text-center">Explore Recipes</h4>
        </div>
        <div
          className="flex flex-col items-center justify-center mb-7 p-2 border-r-4 border-yellow-400 cursor-pointer"
          style={{
            background: '#FFFDD0',
          }}
        >
          <GrPlan className="text-4xl mb-1" />
          <h1 className="text-base font-semibold text-center">Meal Planning</h1>
        </div>
        <div className="flex flex-col items-center justify-center cursor-pointer mb-7">
          <TfiBookmarkAlt className="text-4xl mb-1" />
          <h4 className="text-base font-semibold text-center">My Saved Recipes</h4>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center cursor-pointer mb-20">
        <CgProfile className="text-4xl mb-1" style={{ color: '#005A5B' }}/>
      </div>
    </div>
  );
};

export default MainSidebar;
