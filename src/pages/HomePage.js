import Header from '../components/common/Header';
import PlannerGrid from '../components/layout/PlannerGrid';
import Sidebar from '../components/common/Sidebar';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const sidebarVisible = useSelector((state) => state.recipes.sidebarVisible);

  return (
    <div className="home-page">
      <Header />
      <PlannerGrid />
      {sidebarVisible && <Sidebar />}
    </div>
  );
};

export default HomePage;
