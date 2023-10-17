import { BrowserRouter } from 'react-router-dom';
import { AppModeProvider } from './AppModeContext';
import { AppContent } from './AppContent';

const App = () => {
  return (
    <BrowserRouter>
      <AppModeProvider>
        <AppContent />
      </AppModeProvider>
    </BrowserRouter>
  );
};

export default App;
