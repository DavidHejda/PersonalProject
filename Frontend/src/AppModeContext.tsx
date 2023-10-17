import { createContext, useContext, useState } from 'react';

type AppModeContextType = {
  appMode: string | null;
  setAppMode: React.Dispatch<React.SetStateAction<string | null>>;
};

export const AppModeContext = createContext<AppModeContextType>({
  appMode: null,
  setAppMode: () => {},
});

export const useAppMode = () => useContext(AppModeContext);

export const AppModeProvider = ({ children }: any) => {
  const [appMode, setAppMode] = useState<string | null>(null);

  return (
    <AppModeContext.Provider value={{ appMode, setAppMode }}>
      {children}
    </AppModeContext.Provider>
  );
};
