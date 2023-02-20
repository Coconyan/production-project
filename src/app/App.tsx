import "./styles/index.scss";
import { classNames } from "helpers/classNames/classNames";
import { useTheme } from "app/provider/ThemeProvider";
import { AppRouter } from "./provider/router";
import { Navbar } from "widgets/Navbar";

export const App = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  )
};
