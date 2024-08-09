'use client';
import React from 'react';
import { useEffect, useState } from 'react';
import { Card, CardHeader, CardBody, Divider, Checkbox } from '@nextui-org/react';
import { Popover, PopoverTrigger,PopoverContent, Button } from '@nextui-org/react';

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


  const handleComplete = (id: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const getBackgroundColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "#DF3562";
      case "Medium":
        return "#E9A845";
      case "Low":
        return "#D4D4D8";
      default:
        return "white";
    }
  }

  return (
    <div>
      <h2 style={{ color: "blue" }}>To Do</h2>
      <hr style={{ border: "1px solid black" }} />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <div className="p-4 border mt-2 mb-2">
              <Card className="max-2-[400px] p-2">
                <CardHeader style={{ backgroundColor: getBackgroundColor(todo.priority) }}>
                  <h3 style={{ fontWeight: "bold" }}>{todo.title}</h3>
                </CardHeader>
                <CardBody>
                  <div className="flex">
                    <Popover placement="bottom" showArrow={true}>
                      <PopoverTrigger>
                        <Button>Details</Button>
                      </PopoverTrigger>
                      <PopoverContent>
                        <div className="px-1 py-2">
                          <div>
                            {todo.details}
                          </div>
                        </div>
                      </PopoverContent>
                    </Popover>
                    <Checkbox
                      className="ml-2"
                      checked={todo.completed}
                      onChange={() => handleComplete(todo.id)}
                    >
                      {todo.completed ? "Completed" : "Not Completed"}
                    </Checkbox>
                  </div>
                </CardBody>
              </Card>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
