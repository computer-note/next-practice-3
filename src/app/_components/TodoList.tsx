import { type Todo, type TodoWithCreator } from '@/types/types';
import TodoItem from './TodoItem';
import { createClient } from '@/utils/supabase/server';

interface TodoListProps {
  todoList: Todo[];
}

async function TodoList(props: TodoListProps) {
  const { todoList } = props;
  const supabase = createClient();

  const todoWithCreatorList: TodoWithCreator[] = [];
  for (const todo of todoList) {
    const response = await supabase
      .from('profiles')
      .select('username')
      .eq('id', todo.user_id);

    const creator = response.data
      ? response.data[0].username
      : '익명의 사용자';

    todoWithCreatorList.push({ ...todo, creater: creator });
  }

  return (
    <section className='flex flex-wrap'>
      {todoWithCreatorList.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </section>
  );
}

export default TodoList;
