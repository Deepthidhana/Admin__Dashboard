import { createContext } from "react";
import  CssBaseline  from "@mui/material/CssBaseline";
import {ThemeProvider as Provider} from '@mui/material'
import { useMode } from "./theme";


const ThemeContext: React.Context<any> = createContext(null);


export const ThemeProvider = ({ children }: any) => {

  const [ theme, toggleMode] : any= useMode();
  return (
    <ThemeContext.Provider value={toggleMode}>
      <Provider theme={theme}>
        <CssBaseline />
        {children}
      </Provider>
    </ThemeContext.Provider>
  );
};
