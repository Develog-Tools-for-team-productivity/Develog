import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/css/global.css';
import Sidebar from './components/sidebar/Sidebar';
import DashBoard from './pages/dashBoard/DashBoard';
import CycleTime from './pages/cycleTime/CycleTime';
import ProjectDeliveryTracker from './pages/projectDeliveryTracker/ProjectDeliveryTracker';
import Login from './pages/login/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <Router>
      {isLoggedIn ? (
        <div className="container">
          <Sidebar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<DashBoard />} />
              <Route path="/cycle-time" element={<CycleTime />} />
              <Route
                path="/project-delivery-tracker"
                element={<ProjectDeliveryTracker />}
              />
            </Routes>
          </main>
        </div>
      ) : (
        <Login />
      )}
    </Router>
  );
}

export default App;
