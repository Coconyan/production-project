import "./styles/index.scss";
import { classNames } from "helpers/classNames/classNames";
import { useTheme } from "app/provider/ThemeProvider";
import { AppRouter } from "./provider/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

export const App = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  )
};
