import { createContext ,useContext} from "react";

export const ThemContext =createContext({
    themeMode:'light',
    darkTheme:() =>{},
    lightThem:() =>{},
})

export const ThemProvider =ThemContext.Provider;


export default function useTheme(){
    return useContext(ThemContext)
}