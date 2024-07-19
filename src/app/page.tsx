import AddTodo from './_components/AddTodo';
import TodoList from './_components/TodoList';
import { createClient } from '../utils/supabase/server';
import { Todo } from '@/types/types';

export default async function Home() {
  const supabase = createClient();

  const result = await supabase.from('todos').select();
  const todoList = result.data as Todo[];

  return (
    <main>
      <TodoList todoList={todoList} />
      <AddTodo />
    </main>
  );
}
