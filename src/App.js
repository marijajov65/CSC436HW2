import UserBar from "./UserBar";
import TodoList from "./TodoList"

function App() {

  const todoItems =[
    {
      title: "Do laundry",
      description: "Do laundry before Thursday",
    },
    {
      title: "Get groceries",
      description: "Get eggs, milk, and bread"
    },
    {
      title: "Go to the gym",
      description: "Do a 1-hour workout"
    }
  ]

  return (
    <div className="App">
      <UserBar></UserBar>
      <TodoList todoList = {todoItems}>
      </TodoList>
    </div>
  );
}

export default App;
