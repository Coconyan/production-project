import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Counter } from "./components/Counter";
import "./styles/index.scss";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { Theme } from "./theme/ThemeContext";
import { useTheme } from "./theme/useTheme";

export const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>Toggle theme to {theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT}</button>
      <br />
      <Link to={'/'}>Main Page</Link>
      <Link to={'/about'}>About Page</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageAsync />}/>
          <Route path={'/'} element={<MainPageAsync />}/>
        </Routes>
      </Suspense>
        <Counter />
    </div>
  )
};
