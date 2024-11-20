import logo from "./logo.svg";
import "./App.css";
import SwitchTheme from "./components/SwitchTheme";
import Todo from "./components/Todo";

function App() {
  return (
    <>
      <SwitchTheme>
        <Todo />
      </SwitchTheme>
    </>
  );
}

export default App;
