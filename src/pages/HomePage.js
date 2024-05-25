import Header from '../components/common/Header';
import Sidebar from '../components/common/Sidebar';
import MainSidebar from '../components/common/MainSidebar';
import PlannerGrid from '../components/layout/PlannerGrid';
import { useSelector } from 'react-redux';
import '../assets/styles/HomePage.css';

const HomePage = () => {
  const sidebarVisible = useSelector((state) => state.recipes.sidebarVisible);

  return (
    <div className="home-page">
      <Header />
      <div className="planner-container">
        <MainSidebar />
        <PlannerGrid />
        {sidebarVisible && <Sidebar />}
      </div>
    </div>
  );
};

export default HomePage;
