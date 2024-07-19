'use client';

import React from 'react';
import { createClient } from '../../utils/supabase/client';

function AddTodo() {
  const supabase = createClient();

  async function handleAddTodo(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const title = formData.get('todo-title');

    await supabase.from('todos').insert({ title }).select();

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
