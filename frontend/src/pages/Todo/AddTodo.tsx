import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoService } from '../../services/TodoService';

const AddTodo = ({ dispatch }: { dispatch: React.Dispatch<React.SetStateAction<Todo[]>> }) => {
  const [todo, setTodo] = React.useState('');
  const service = TodoService();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleSubmit = async (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      const payload = {
        text: todo
      };

      const response: Todo = await service.insertTodo(payload);

      if (response) {
        dispatch((prev: Todo[]) => {
          return [
            ...prev,
            response
          ];
        });
      }

      setTodo('');
    }
  };

  return (
    <input type="text" name="text" onChange={handleChange} onKeyDown={handleSubmit} value={todo} className="w-full hide-scrollbar rounded-lg bg-slate-800 border border-slate-700 divide-y divide-slate-700 p-4 outline-none" placeholder="Add new todo here..." />
  )
};

export default AddTodo;