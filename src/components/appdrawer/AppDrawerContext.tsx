import React, { useContext } from "react";

interface IAppDrawerContext {
    open: boolean;
    toggleOpen?: () => void;
  }
  
  const defaultState = {
    open: false,
  };
  
  export const AppDrawerContext = React.createContext<IAppDrawerContext>(defaultState);

  export const useAppDrawerContext = () =>  useContext(AppDrawerContext);