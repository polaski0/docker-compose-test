import React from "react";
import Button from "../../components/Button";
import AddTodo from "./AddTodo";

import { Todo } from "../../types/Todo";
import { TodoService } from "../../services/TodoService";
// import { debounce } from "../../utils/ApiUtils";

const TodoList = () => {
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const service = TodoService();

  // const handleUpdate = React.useCallback((id: string) => {
  //   const payload = todos.find((item) => item._id === id);

  //   console.log(payload);
  //   // if (payload) {
  //   //   const response = service.updateTodo(id, payload);
  //   // }
  // }, []);

  // const debounceRequest = React.useMemo(() => {
  //   return debounce(handleUpdate, 1000);
  // }, [handleUpdate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    const toggleable = ['checkbox', 'radio'];

    setTodos(todos.map((todo) => {
      if (id == todo._id) {
        const key: string = e.target.name;
        let value: Todo = {} as Todo;

        if (toggleable.includes(e.target.type)) {
          value = {
            ...todo,
            [key]: e.target.checked
          };

          handleUpdate(value);
          return value;
        }

        value = {
          ...todo,
          [key]: e.target.value
        };

        handleUpdate(value);
        return value;
      }

      return todo;
    }));
  };

  const handleUpdate = (payload: Todo) => {
    if (payload) {
      const response = service.updateTodo(payload._id, payload);
    }
  };

  const handleDelete = (id: string) => {
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  const fetchData = async () => {
    const response = await service.getTodos();

    if (response) {
      setTodos(response);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

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
                        <input onChange={(e) => handleChange(e, item._id)} type="checkbox" name="is_checked" checked={item.is_checked} />
                        <input onChange={(e) => handleChange(e, item._id)} type="text" name="text" className={`${item.is_checked ? "line-through" : ""} bg-transparent w-full overflow-ellipsis h-full outline-none`} value={item.text} />
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