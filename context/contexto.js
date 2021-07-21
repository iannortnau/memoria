import React from "react";
import {createContext, useState} from "react";
import {contextoGlobal} from "./data";


export const ContextoGlobal = createContext();

function ContextoHome({ children }) {
    const [state,setState] = useState(contextoGlobal)
    return(
        <ContextoGlobal.Provider value={{state,setState}}>
            { children }
        </ContextoGlobal.Provider>
    );

}
export default ContextoHome;