'use client';

import React from 'react';
import { createClient } from '../../utils/supabase/client';

function AddTodo() {
  const supabase = createClient();

  async function handleAddTodo(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newTodo = {};

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    newTodo['title'] = formData.get('todo-title');

    const { data } = await supabase.auth.getUser();
    newTodo['user_id'] = data.user ? data.user.id : null;

    await supabase.from('todos').insert(newTodo).select();

    form.reset();
  }

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input name='todo-title' />
        <button>Add Todo</button>
      </form>
    </div>
  );
}

export default AddTodo;
