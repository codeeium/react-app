import {createContext} from "react";

// Define the types for the context
export interface ThemeContextType {
    theme: 'light' | 'dark';
}

export interface UserContextType {
    name: string;
    age: number;
}
export const ThemeContext =
    createContext<ThemeContextType | undefined>(undefined);
export const UserContext =
    createContext<UserContextType | undefined>(undefined);
