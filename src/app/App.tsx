import { Link } from "react-router-dom";
import "./styles/index.scss";
import { classNames } from "helpers/classNames/classNames";
import { useTheme } from "app/provider/ThemeProvider";
import { Theme } from "app/provider/ThemeProvider/lib/ThemeContext";
import { AppRouter } from "./provider/router";

export const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme to {theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT}</button>
      <br />
      <Link to={'/'}>Main Page</Link>
      <Link to={'/about'}>About Page</Link>
      <AppRouter />
    </div>
  )
};
