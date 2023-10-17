import { Box } from '@chakra-ui/react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import './App.css';
import Navbar from './commons/components/Navbar';
import LandingPage from './commons/pages/LandingPage';
import { HomePage } from './commons/pages/HomePage';
import { TasksPage } from './modules/Tasks/commons/TasksOverviewPage';
import { CreateTaskPageBusiness } from './modules/Tasks/business/CreateTaskPageBusiness';
import { AppModeContext } from './AppModeContext';
import { NotFoundPage } from './commons/pages/NotFoundPage';
import { getFromLocalStorage } from './utils/localStorage';
import { APP_MODE } from './commons/constants';

export const AppContent = () => {
  const excludeNavbarOnPages: string[] = ['/', '*'];

  const navigate = useNavigate();
  const location = useLocation();
  // useEffect(() => {
  //   if (appMode === null) {
  //     navigate('/');
  //   }
  // }, [appMode]);
  const appMode = getFromLocalStorage(APP_MODE);

  const BusinessRoutes = () => {
    if (appMode !== '/business') {
      return <NotFoundPage />;
    }
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="tasks" element={<TasksPage />} />
        <Route path="create/task" element={<CreateTaskPageBusiness />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    );
  };

  const PersonalRoutes = () => {
    if (appMode !== '/personal') {
      return <NotFoundPage />;
    }
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="tasks" element={<TasksPage />} />
        {/* <Route path="create/task" element={<CreateTaskPage />} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    );
  };

  return (
    <>
      {!excludeNavbarOnPages.includes(location.pathname) && (
        <Box
          as="header"
          position="fixed"
          top="0"
          left="0"
          right="0"
          zIndex="1000"
          paddingBottom="4rem"
        >
          <Navbar />
        </Box>
      )}
      <Box as="main" paddingTop={location.pathname !== '/' ? '4rem' : '0'}>
        <Routes>
          {/* Common route */}
          <Route path="/" element={<LandingPage />} />

          <Route path="/business/*" element={<BusinessRoutes />} />
          <Route path="/personal/*" element={<PersonalRoutes />} />

          {/* If appMode is null or no route matches, render NotFound */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Box>
    </>
  );
};
