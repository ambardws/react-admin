import { createContext, useReducer } from "react"
import DarkModeReducer from "./darkModeReducer";

const INITIAL_STATE = {
    darkMode: false,
}

export const DarkkModeContext = createContext(INITIAL_STATE)

export const DarkModeContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

    return (
    <DarkkModeContext.Provider value={{ darkMode:state.darkMode, dispatch }}>;
    {children}
    </DarkkModeContext.Provider>
    );
};