import React from "react";
import Button from "../../components/Button";
import AddTodo from "./AddTodo";

import { Todo } from "../../types/Todo";
import { mockTodos } from "../../mocks/MockTodo";

const TodoList = () => {
  const [todos, setTodos] = React.useState<Todo[]>(mockTodos);

  const handleUpdate = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const toggleable = ['checkbox', 'radio'];

    setTodos(todos.map((todo) => {
      if (id == todo._id) {
        const key: string = e.target.name;

        if (toggleable.includes(e.target.type)) {
          return {
            ...todo,
            [key]: e.target.checked
          }
        }

        return {
          ...todo,
          [key]: e.target.value
        }
      }

      return todo;
    }));
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  return (
    <div className="flex justify-center w-full -mt-32">
      <div className="flex flex-col gap-4 w-full">
        <AddTodo dispatch={setTodos} />
        {
          todos.length ? (
            <div className="w-full overflow-auto max-h-[32rem] rounded-lg bg-slate-800 border border-slate-700 divide-y divide-slate-700">
              {
                todos.map((item) => {
                  return (
                    <div className="w-full p-4 flex flex-row justify-between items-center gap-6" key={item._id}>
                      <div className="flex flex-row gap-4 flex-1">
                        <input onChange={(e) => handleUpdate(e, item._id)} type="checkbox" name="is_checked" checked={item.is_checked} />
                        <input onChange={(e) => handleUpdate(e, item._id)} type="text" name="text" className={`${item.is_checked ? "line-through" : ""} bg-transparent w-full overflow-ellipsis h-full outline-none`} value={item.text} />
                      </div>
                      <div className="flex flex-row gap-4">
                        <Button onClick={() => handleDelete(item._id)} variant="danger">Delete</Button>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          ) : null
        }
      </div>
    </div>
  )
}

export default TodoList;