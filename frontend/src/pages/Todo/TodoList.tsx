import React from "react";
import Button from "../../components/Button";

interface Todo {
  id: number;
  text: string;
  is_checked: boolean;
};

const mockTodos: Todo[] = new Array(10).fill(null).map((_, index: number) => {
  return {
    id: index + 1,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia sunt voluptatibus neque dolore error unde atque soluta excepturi non magni?",
    is_checked: index % 2 == 0 ? true : false,
  };
});

const TodoList = () => {
  const [todos, setTodos] = React.useState<Todo[]>(mockTodos);

  const handleUpdate = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const toggleable = ['checkbox', 'radio'];

    setTodos(todos.map((todo, index) => {
      if (idx == index) {
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

  return (
    <div className="flex justify-center w-full -mt-16">
      <div className="w-2/4">
        <div className="w-full overflow-auto max-h-[32rem] hide-scrollbar rounded-lg bg-slate-800 border border-slate-700 divide-y divide-slate-700">
          {
            todos.map((item, index) => {
              return (
                <div className="w-full p-4 flex flex-row justify-between items-center gap-6" key={item.id}>
                  <div className="flex flex-row gap-4 flex-1">
                    <input onChange={(e) => handleUpdate(e, index)} type="checkbox" name="is_checked" checked={item.is_checked} />
                    <input onChange={(e) => handleUpdate(e, index)} type="text" name="text" className={`${item.is_checked ? "line-through" : ""} bg-transparent w-full overflow-ellipsis`} value={item.text} />
                  </div>
                  <div className="flex flex-row gap-4">
                    <Button className="text-red-500 px-4 py-2 outline outline-1 outline-red-500 rounded-md hover:bg-red-500 hover:text-white transition-all duration-200">Delete</Button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default TodoList;