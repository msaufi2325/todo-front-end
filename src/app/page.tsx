import TodoList from '@/components/todos/todo-list';
import PriorityList from '@/components/todos/priority/priority-list';

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <TodoList />  
      </div>
      <div className="border shadow py-3 px-2">
        <PriorityList />
      </div>
    </div>
  );
}
