import { useAtom } from 'jotai';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { isLoggedInAtom } from './stores/useStore';

import Login from './pages/login/Login';
import Sidebar from './components/sidebar/Sidebar';
import Dashboard from './pages/dashboard/Dashboard';
import CycleTime from './pages/cycleTime/CycleTime';
import ProjectDeliveryTracker from './pages/projectDeliveryTracker/ProjectDeliveryTracker';

import './assets/css/global.css';

function App() {
  const [isLoggedIn] = useAtom(isLoggedInAtom);

  return (
    <Router>
      {isLoggedIn ? (
        <div className="container">
          <Sidebar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
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
          <Route path="*" element={<Login />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
