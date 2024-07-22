export type Todo = {
  id: string;
  created_at: string;
  title: string;
  user_id: string;
};

export type TodoWithCreator = Todo & {
  creater: string;
};
