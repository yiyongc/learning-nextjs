import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Refresh React" />
      <Todo text="Learn Next" />
      <Todo text="Plan timeline" />
    </div>
  );
}

export default App;
