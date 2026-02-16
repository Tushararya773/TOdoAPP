import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:8080/api/todos";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const fetchTodos = async () => {
    const res = await axios.get(API_URL);
    setTodos(res.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async () => {
    if (!title || !description) return;

    await axios.post(API_URL, {
      title,
      description,
      completed: false,
    });

    setTitle("");
    setDescription("");
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchTodos();
  };

  const toggleComplete = async (todo) => {
    await axios.put(`${API_URL}/${todo.id}`, {
      ...todo,
      completed: !todo.completed,
    });
    fetchTodos();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          ✨ Todo App
        </h1>

        {/* Add Todo */}
        <div className="space-y-3 mb-6">
          <input
            type="text"
            placeholder="Enter title..."
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter description..."
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button
            onClick={addTodo}
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            ➕ Add Todo
          </button>
        </div>

        {/* Todo List */}
        <div className="space-y-4">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="flex justify-between items-center bg-gray-100 p-4 rounded-xl shadow-sm"
            >
              <div>
                <h3
                  className={`text-lg font-semibold ${
                    todo.completed
                      ? "line-through text-gray-400"
                      : "text-gray-800"
                  }`}
                >
                  {todo.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {todo.description}
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => toggleComplete(todo)}
                  className={`px-3 py-1 rounded-lg text-white text-sm ${
                    todo.completed
                      ? "bg-yellow-500 hover:bg-yellow-600"
                      : "bg-green-500 hover:bg-green-600"
                  }`}
                >
                  {todo.completed ? "Undo" : "Done"}
                </button>

                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {todos.length === 0 && (
          <p className="text-center text-gray-500 mt-4">
            No Todos Found 😢
          </p>
        )}
      </div>
    </div>
  );
}

export default App;