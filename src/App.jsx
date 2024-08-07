import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { isLoggedInAtom } from './stores/useStore';

import Login from './pages/login/Login';
import Container from './pages/container/Container';
import SelectedRepo from './pages/login/SelectedRepo';
import Dashboard from './pages/dashboard/Dashboard';
import CycleTime from './pages/cycleTime/CycleTime';
import ProjectDeliveryTracker from './pages/projectDeliveryTracker/ProjectDeliveryTracker';

import './assets/css/global.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
  const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem('token');

  const validateToken = async token => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/validate-token`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const data = await response.json();
      return data.isValid;
    } catch (error) {
      console.error('토큰 유효성 에러:', error);
      return false;
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      try {
        if (token) {
          const isValid = await validateToken(token);
          setIsLoggedIn(isValid);
          if (!isValid) {
            localStorage.removeItem('token');
          }
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error('Auth check error:', error);
        setIsLoggedIn(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [token, setIsLoggedIn]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/select-repo" element={<SelectedRepo />} />
        <Route
          path="/dashboard"
          element={
            isLoggedIn ? (
              <Container>
                <Dashboard />
              </Container>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/cycle-time"
          element={
            isLoggedIn ? (
              <Container>
                <CycleTime />
              </Container>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/project-delivery-tracker"
          element={
            isLoggedIn ? (
              <Container>
                <ProjectDeliveryTracker />
              </Container>
            ) : (
              <Navigate to="/login" />
            )
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
