import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { isLoggedInAtom } from './stores/useStore';

import Login from './pages/login/Login';
import Container from './pages/container/Container';
import SelectRepo from './pages/login/SelectRepo';
import Dashboard from './pages/dashboard/Dashboard';
import CycleTime from './pages/cycleTime/CycleTime';
import ProjectDeliveryTracker from './pages/projectDeliveryTracker/ProjectDeliveryTracker';

import './assets/css/global.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [token, setIsLoggedIn]);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/select-repo" element={<SelectRepo />} />
        <Route
          path="/dashboard"
          element={
            <Container>
              <Dashboard />
            </Container>
          }
        />
        <Route
          path="/cycle-time"
          element={
            <Container>
              <CycleTime />
            </Container>
          }
        />
        <Route
          path="/project-delivery-tracker"
          element={
            <Container>
              <ProjectDeliveryTracker />
            </Container>
          }
        />
        <Route
          path="/"
          element={<Navigate to={isLoggedIn ? '/dashboard' : '/login'} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
