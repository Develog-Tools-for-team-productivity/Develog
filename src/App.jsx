import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { isLoggedInAtom } from './stores/useStore';
import ReactGA from 'react-ga4';

import Login from './pages/Login/Login';
import Container from './pages/container/Container';
import SelectedRepo from './pages/Login/SelectedRepo';
import Dashboard from './pages/Dashboard/Dashboard';
import CycleTime from './pages/cycleTime/CycleTime';
import ProjectDeliveryTracker from './pages/projectDeliveryTracker/ProjectDeliveryTracker';
import MobileView from './pages/mobileView/MobileView';
import useIsMobile from './utils/useIsMobile';

import './assets/css/global.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useIsMobile();
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

  if (isMobile) {
    return <MobileView />;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Tracking />
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

const Tracking = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname + location.search,
    });
  }, [location]);

  return null;
};

export default App;
