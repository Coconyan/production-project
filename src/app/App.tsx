import "./styles/index.scss";
import { classNames } from "helpers/classNames/classNames";
import { useTheme } from "app/provider/ThemeProvider";
import { Theme } from "app/provider/ThemeProvider/lib/ThemeContext";
import { AppRouter } from "./provider/router";
import { Navbar } from "widgets/Navbar";

export const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <button onClick={toggleTheme}>Toggle theme to {theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT}</button>
      <AppRouter />
    </div>
  )
};
