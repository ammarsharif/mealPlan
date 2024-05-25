import '../../assets/styles/MainSidebar.css';

const MainSidebar = () => {
  return (
    <div className="relative bottom-0 left-0 bg-gray-100 custom-wh p-4 shadow-lg overflow-y-auto">
      <div className="flex flex-col items-center justify-center mb-4">
        <img src="/path/to/logo.png" alt="Logo" className="h-16 w-16 mb-2" />
        <h2 className="text-xl font-bold">Heading1</h2>
      </div>
      <div className="flex flex-col items-center justify-center mb-4">
        <img src="/path/to/logo.png" alt="Logo" className="h-16 w-16 mb-2" />
        <h2 className="text-xl font-bold">Heading2</h2>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img src="/path/to/logo.png" alt="Logo" className="h-16 w-16 mb-2" />
        <h2 className="text-xl font-bold">Heading3</h2>
      </div>
    </div>
  );
};

export default MainSidebar;
