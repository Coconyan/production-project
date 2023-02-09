import { Counter } from "./components/Counter"
import "./index.scss"

export const App = () => {
  return (
    <div className="app">
      Some Text in App component
        <Counter />
    </div>
  )
}