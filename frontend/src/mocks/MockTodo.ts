import { Todo } from "../types/Todo";

export const mockTodos: Todo[] = new Array(10).fill(null).map((_, index: number) => {
    return {
        _id: index + 1,
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia sunt voluptatibus neque dolore error unde atque soluta excepturi non magni?",
        is_checked: index % 2 == 0 ? true : false,
    };
});