import React, { useCallback } from "react";
import Button from "../../components/Button";
import AddTodo from "./AddTodo";

import { Todo } from "../../types/Todo";
import { TodoService } from "../../services/TodoService";
import { debounce } from "../../utils/ApiUtils";

const TodoList = () => {
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const service = TodoService();
  const debouncedRef = React.useRef<Todo>({} as Todo);
  const debounceReq = useCallback(debounce(handleUpdate, 500), []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    const toggleable = ['checkbox', 'radio'];
    let value: Todo = {} as Todo;

    const newTodos = todos.map((todo) => {
      if (id == todo._id) {
        const key: string = e.target.name;

        if (toggleable.includes(e.target.type)) {
          value = {
            ...todo,
            [key]: e.target.checked
          };

          return value;
        }

        value = {
          ...todo,
          [key]: e.target.value
        };

        return value;
      }

      return todo;
    });


    debouncedRef.current = value;

    debounceReq();

    setTodos(newTodos);
  };

  async function handleUpdate() {
    const payload = debouncedRef.current;

    if (payload && Object.entries(payload).length) {
      await service.updateTodo(payload._id, payload);
      debouncedRef.current = {} as Todo;
    }
  }

  const handleDelete = async (id: string) => {
    const response = await service.deleteTodo(id);

    if (response) {
      setTodos(todos.filter((todo) => todo._id !== id));
    }
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