import { createContext } from "react";

export interface IDarkModeStates {
  isDarkMode: boolean | null;
  setIsDarkMode: (isDarkMode: boolean | null) => void;
}

const DarkModeContext = createContext<IDarkModeStates>({
  isDarkMode: false,
  setIsDarkMode: (isDarkMode: boolean | null) => {},
});

export const DarkModeContextConsumer = DarkModeContext.Consumer;
export const DarkModeContextProvider = DarkModeContext.Provider;
export default DarkModeContext;
