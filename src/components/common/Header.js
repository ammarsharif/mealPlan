import mainLogo from '../../assets/images/mainLogo.png';
import { FaSearch, FaFacebook, FaInstagram } from 'react-icons/fa';

const Header = () => {
  return (
    <header
      className="text-white p-2 flex items-center justify-between"
      style={{ background: '#FF644C' }}
    >
      <div className="flex flex-column gap-20">
        <div className="flex items-center ">
          <img
            src={mainLogo}
            alt="Logo"
            className="custom-logo mr-4"
            style={{ width: '70.83px', height: '50px' }}
          />
        </div>
        <div className="relative flex flex-column justify-between items-center gap-10">
          <div className="flex items-center">
            <FaSearch className="absolute left-3 text-white" />
            <input
              type="text"
              placeholder="Search by recipe name, food type, etc."
              className="pl-10 pr-3 rounded-full border border-none  focus:outline-none text-white placeholder-white"
              style={{
                width: '466px',
                height: '36px',
                background: '#F9F9F92E',
              }}
            />
          </div>
          <div
            className="text-white font-semibold hover:underline text-base"
            style={{ fontSize: '16px' }}
          >
            BROWSE IN LOCATION
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4 mr-20">
        <FaFacebook className="text-white text-xl hover:text-gray-300" />
        <FaInstagram className="text-white text-xl hover:text-gray-300" />
      </div>
    </header>
  );
};

export default Header;
