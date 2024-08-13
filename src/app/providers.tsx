'use client';

import { createContext, useContext, useState } from 'react';
import { NextUIProvider } from '@nextui-org/react';

interface AuthContextType {
  jwtToken: string | null;
  setJwtToken: (token: string | null) => void;
  alertClassName: string;
  setAlertClassName: (className: string) => void;
  alertMessage: string;
  setAlertMessage: (message: string) => void;
  toggleRefresh: boolean;
  setToggleRefresh: (refresh: boolean) => void;
}

interface ProvidersProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default function Providers({ children }: ProvidersProps) {
  const [jwtToken, setJwtToken] = useState<string | null>(null);
  const [alertClassName, setAlertClassName] = useState<string>('');
  const [alertMessage, setAlertMessage] = useState<string>('');
  const [toggleRefresh, setToggleRefresh] = useState<boolean>(false);

  return (
    <AuthContext.Provider
      value={{
        jwtToken,
        setJwtToken,
        alertClassName,
        setAlertClassName,
        alertMessage,
        setAlertMessage,
        toggleRefresh,
        setToggleRefresh,
      }}
    >
      <NextUIProvider>
        { children }
      </NextUIProvider>
    </AuthContext.Provider>
  )
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
