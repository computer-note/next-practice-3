import { Todo } from '@/types/types';
import TodoItem from './TodoItem';

interface TodoListProps {
  todoList: Todo[];
}

function TodoList(props: TodoListProps) {
  const { todoList } = props;

  return (
    <section>
      {todoList.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </section>
  );
}

export default TodoList;
