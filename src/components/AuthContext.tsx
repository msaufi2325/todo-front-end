import { createContext, useContext, useState, ReactNode } from 'react';

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

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
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
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
