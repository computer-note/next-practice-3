import AddTodo from './_components/AddTodo';
import TodoList from './_components/TodoList';
import { createClient } from '../utils/supabase/server';
import { Todo } from '@/types/types';
import Link from 'next/link';

export default async function Home() {
  const supabase = createClient();

  const result = await supabase.from('todos').select();
  const todoList = result.data as Todo[];

  return (
    <main>
      <nav className='flex bg-slate-100 justify-around'>
        <Link href={'/login'}> 로그인페이지로 </Link>
        <Link href={'/account'}> 마이페이지로 </Link>
      </nav>

      <TodoList todoList={todoList} />
      <AddTodo />
    </main>
  );
}
