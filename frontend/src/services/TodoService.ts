import { apiCall } from "../utils/ApiUtils";

export const TodoService = (url: string | URL = 'http://localhost:3001/todo') => {
    const BASE_URL = url;

    // Get all
    const getTodos = async (): Promise<any> => {
        // code here...
    };

    // Get one
    const getTodo = async (id: string): Promise<any> => {
        // code here...
    };

    // Insert new
    const insertTodo = async (payload: Object): Promise<any> => {
        // code here...
    };

    // Update existing
    const updateTodo = async (id: string, payload: Object): Promise<any> => {
        // code here...
    };

    // Delete existing
    const deleteTodo = async (id: string): Promise<any> => {
        // code here...
    };

    // GET / users: This route returns a list of all users.
    // GET / users /: id: This route returns a single user by ID.
    // POST / users: This route creates a new user.
    // PUT / users /: id: This route updates an existing user.
    // DELETE / users /: id: This route deletes an existing user.

    return {
        getTodos: () => getTodos(),
        getTodo: (id: string) => getTodo(id),
        insertTodo: (payload: Object) => insertTodo(payload),
        updateTodo: (id: string, payload: Object) => updateTodo(id, payload),
        deleteTodo: (id: string) => deleteTodo(id),
    };
};