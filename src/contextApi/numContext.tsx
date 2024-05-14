import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface IThemeContext {
  numcount: number;
  setNumber?: () => void;
}

export const Abc = createContext<IThemeContext>({
  numcount: 0,
  setNumber: () => {},
});
