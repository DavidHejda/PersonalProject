import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/HomePage';
import { TasksPage } from './pages/Tasks/TasksOverviewPage';
import Navbar from './components/Navbar';
import { Box } from '@chakra-ui/react';
import React from 'react';
import { CreateTaskPage } from './pages/Tasks/CreateTaskPage';
import 'react-datepicker/dist/react-datepicker.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Box
          as="header"
          position="fixed"
          top="0"
          left="0"
          right="0"
          zIndex="1000"
        >
          <Navbar />
        </Box>
        <Box as="main" paddingTop="4rem">
          {' '}
          {/* Adjust the padding to the height of your navbar */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Tasks */}
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="create/task" element={<CreateTaskPage />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
