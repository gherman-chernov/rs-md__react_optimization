import { createContext, useContext } from "react";

export type User = {
  id: number;
  name: string;
};

export type AuthContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {},
});

export function useAuth() {
  return useContext(AuthContext);
}
