import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useAtom } from 'jotai';
import { isLoggedInAtom } from './stores/useStore';

import Login from './pages/login/Login';
import SelectRepo from './pages/login/SelectRepo';
import Sidebar from './components/sidebar/Sidebar';
import Dashboard from './pages/dashboard/Dashboard';
import CycleTime from './pages/cycleTime/CycleTime';
import ProjectDeliveryTracker from './pages/projectDeliveryTracker/ProjectDeliveryTracker';

import './assets/css/global.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
  const token = localStorage.getItem('token');

  if (token) {
    setIsLoggedIn(true);
  } else {
    setIsLoggedIn(false);
  }

  return (
    <Router>
      {isLoggedIn ? (
        <div className="container">
          <Sidebar />
          <main className="main-content">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/cycle-time" element={<CycleTime />} />
              <Route
                path="/project-delivery-tracker"
                element={<ProjectDeliveryTracker />}
              />
            </Routes>
          </main>
        </div>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/select-repo" element={<SelectRepo />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
