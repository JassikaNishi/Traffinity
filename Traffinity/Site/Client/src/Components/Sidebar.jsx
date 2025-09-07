import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-1/4 h-screen bg-black text-green-400 p-5">
      <h2 className="text-2xl font-bold mb-5">Dashboard</h2>
      <ul className="space-y-4">
        <li>
          <Link to="/" className="block p-3 bg-gray-800 rounded">🏠 Home</Link>
        </li>
        <li>
          <Link to="/crash-detection" className="block p-3 bg-gray-800 rounded">🚗 Crash Detection</Link>
        </li>
        <li>
          <Link to="/accident-graph" className="block p-3 bg-gray-800 rounded">📊 Accident Prone Areas</Link>
        </li>
        <li>
          <Link to="/nearest-hospitals" className="block p-3 bg-gray-800 rounded">🏥 Nearest Hospitals</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
