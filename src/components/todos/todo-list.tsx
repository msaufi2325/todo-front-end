'use client';
import { useEffect, useState } from 'react';
import { Card } from '@nextui-org/react';

interface Todo {
  id: number;
  title: string;
  details: string;
  priority: string;
  completed: boolean;
}

export default function TodoList() {
  const [todos, setTodos] = useState([] as Todo[]);

  useEffect(() => {
    let todoList = [
      {
        id: 1,
        title: "Learn Next.js",
        details: "Learn Next.js and how to use it to build a web app",
        priority: "High",
        completed: false,
      },
      {
        id: 2,
        title: "Learn React",
        details: "Learn React and how to use it to build a web app",
        priority: "Medium",
        completed: false,
      },
      {
        id: 3,
        title: "Learn Tailwind CSS",
        details: "Learn Tailwind CSS and how to use it to style a web app",
        priority: "Low",
        completed: false,
      },
    ];

    setTodos(todoList);
  }, []);

  return (
    <div>
      <h2 style={{ color: 'blue' }}>To Do</h2>
      <hr style={{ border: '1px solid black' }} />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <div className="p-4 border mt-2 mb-2">
              <Card className="max-2-[400px] p-2">
                <h3 style={{ fontWeight: 'bold' }}>{todo.title}</h3>
                <p>{todo.details}</p>
                <p>Priority: {todo.priority}</p>
                <p>{todo.completed ? "Completed" : "Not Completed"}</p>
              </Card>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
