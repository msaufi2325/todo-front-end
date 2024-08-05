import TodoList from '@/components/todos/todo-list';

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <TodoList />      
    </div>
  );
}
