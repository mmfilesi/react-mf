import { createContext, ReactNode } from 'react';

interface EnvironmentProviderProps {
  children: ReactNode;
  value: any;
}

const EnvironmentContext = createContext(null);


export const EnvironmentProvider = ({ children, value }: EnvironmentProviderProps) => {
  return (
    <EnvironmentContext.Provider value={value}>
      {children}
    </EnvironmentContext.Provider>
  );
};

export default EnvironmentContext;
