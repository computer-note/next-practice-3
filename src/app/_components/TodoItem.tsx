function TodoItem(props: any) {
  const { todo } = props;

  //<article {...className['todo-card']}>
  return (
    <article className='w-[300px] border-solid border-[1px] bg-slate-100 p-[10px]'>
      <p>
        {todo.id}: {todo.created_at}
      </p>
      <p>{todo.title}</p>
    </article>
  );
}

export default TodoItem;
