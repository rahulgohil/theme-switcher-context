
import { useEffect, useState } from 'react';
import './App.css'
import { ThemProvider } from './context/theme';
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';

function App() {
const [themeMode,setThemeMode ] =useState("light")

const lightThem=() =>{
  setThemeMode("light")
}
const darkTheme =() =>{
  setThemeMode("dark")
}
useEffect(() =>
{
document.querySelector("html").classList.remove("dark","light");
document.querySelector("html").classList.add(themeMode);
},[themeMode])
  return (
    <ThemProvider value={{themeMode,lightThem,darkTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
{/* toggle */}
<ThemeBtn />
        </div>

        <div className="w-full max-w-sm mx-auto">
{/* card */}
<Card />
        </div>
      </div>
    </div>
    </ThemProvider>
  );
}

export default App
