import { type TodoWithCreator } from '@/types/types';

interface TodoItemProps {
  todo: TodoWithCreator;
}

async function TodoItem(props: TodoItemProps) {
  const { todo } = props;

  return (
    <article className='w-[300px] border-solid border-[1px] bg-slate-100 p-[10px]'>
      <p className='flex flex-col'>
        <span>
          {todo.id}. {todo.created_at}
        </span>
        <span>By {todo.creater}</span>
      </p>
      <p>{todo.title}</p>
    </article>
  );
}

export default TodoItem;
