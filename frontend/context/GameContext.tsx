import { createContext } from "react";

interface GameContextProps {
    turn: number
}

export const GameContext = createContext({} as GameContextProps);