import React from 'react';
import { Todo } from '../../types/Todo';

const AddTodo = ({ dispatch }: { dispatch: React.Dispatch<React.SetStateAction<Todo[]>> }) => {
  const [todo, setTodo] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      // Send to backend and wait for the response.
      dispatch((prev: Todo[]) => {
        return [
          ...prev
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