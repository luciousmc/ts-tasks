import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';

function App() {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          todo,
          isCompleted: false,
        },
      ]);
      setTodo('');
    }
  };

  console.log(todos);

  return (
    <div className='App'>
      <h1 className='app__heading'>Taskify</h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />

      {todos.map((todo) => (
        <li key={todo.id}>{todo.todo}</li>
      ))}
    </div>
  );
}

export default App;
