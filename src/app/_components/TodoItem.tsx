import { createClient } from '@/utils/supabase/server';

async function TodoItem(props: any) {
  const { todo } = props;

  const supabase = createClient();
  const response = await supabase
    .from('profiles')
    .select('username')
    .eq('id', todo.user_id);

  const creater = response.data
    ? response.data[0].username
    : '익명의 사용자';

  //<article {...className['todo-card']}>
  return (
    <article className='w-[300px] border-solid border-[1px] bg-slate-100 p-[10px]'>
      <p className='flex flex-col'>
        <span>
          {todo.id}. {todo.created_at}
        </span>
        <span>By {creater}</span>
      </p>
      <p>{todo.title}</p>
    </article>
  );
}

export default TodoItem;
