import { useEffect, useState } from "react";

function App() {

  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false,
      isEditing: false
    }

    setTodos([...todos, newTodo]);
    setTask("");
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id))
  }

  const toggleTodo = (id) => {
    setTodos(
      todos.map(t =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    )
  }

  const editTodo = (id) => {
    setTodos(
      todos.map(t =>
        t.id === id ? { ...t, isEditing: true } : t
      )
    )
  }

  const saveTodo = (id, newText) => {
    setTodos(
      todos.map(t =>
        t.id === id ? { ...t, text: newText, isEditing: false } : t
      )
    )
  }

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-10">

      <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md">
        
        <div className="flex gap-2 mb-5">
          <input
            type="text"
            placeholder="Enter task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="border p-2 w-full rounded-md"
          />

          <button
            onClick={addTodo}
            className="bg-blue-500 text-white px-4 rounded-md"
          >
            Add
          </button>
        </div>

        <div className="space-y-3">
          {
            todos.map((todo) => (
              <div
                key={todo.id}
                className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg shadow-sm"
              >
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />

                {todo.isEditing ? (
                  <input
                    defaultValue={todo.text}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") saveTodo(todo.id, e.target.value)
                    }}
                    className="border p-1 rounded-md w-full"
                  />
                ) : (
                  <span
                    className={`flex-1 ${todo.completed ? "line-through text-gray-500" : ""}`}
                  >
                    {todo.text}
                  </span>
                )}

                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-red-500"
                >
                  Delete
                </button>

                {
                  !todo.isEditing &&
                  <button
                    onClick={() => editTodo(todo.id)}
                    className="text-blue-500"
                  >
                    Edit
                  </button>
                }
              </div>
            ))
          }
        </div>

      </div>

    </div>
  );
}

export default App;
