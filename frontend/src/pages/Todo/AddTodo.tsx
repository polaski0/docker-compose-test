import React from 'react';
import { Todo } from '../../types/Todo';

const AddTodo = ({ dispatch }: { dispatch: React.Dispatch<React.SetStateAction<Todo[]>> }) => {
  const [todo, setTodo] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      dispatch((prev: Todo[]) => {
        const LARGEST_ID = prev.reduce((acc, curr) => {
          return Math.max(acc, curr._id);
        }, 0);

        return [
          ...prev,
          {
            _id: LARGEST_ID + 1,
            text: todo,
            is_checked: false
          }
        ];
      });

      setTodo('');
    }
  };

  return (
    <input type="text" name="text" onChange={handleChange} onKeyDown={handleSubmit} value={todo} className="w-full hide-scrollbar rounded-lg bg-slate-800 border border-slate-700 divide-y divide-slate-700 p-4 outline-none" placeholder="Add new todo here..." />
  )
};

export default AddTodo;