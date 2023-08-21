import { apiCall } from "../utils/ApiUtils";

export const TodoService = (url: RequestInfo | URL = import.meta.env.VITE_BASE_PATH + '/todo') => {
    const BASE_URL = url;

    /**
     * Get all resources
     * 
     * @returns {Promise<any>}
     */
    const getTodos = async (): Promise<any> => {
        const config: RequestInit = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        };

        try {
            const request = await apiCall(BASE_URL, config);

            if (!request || request instanceof Error) {
                throw request ?? new Error('Undefined');
            }

            if (request.ok) {
                return await request.json();
            }
        } catch (error) {
            console.error(error);
        }
    };

    /**
     * Get single resource
     * 
     * @param {string} id
     * @returns {Promise<any>}
     */
    const getTodo = async (id: string): Promise<any> => {
        const config: RequestInit = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        };

        try {
            const request = await apiCall(BASE_URL + '/' + id, config);

            if (!request || request instanceof Error) {
                throw request ?? new Error('Undefined');
            }

            if (request.ok) {
                return await request.json();
            }
        } catch (error) {
            console.error(error);
        }
    };

    /**
     * Create a new resource
     * 
     * @param {Object} payload
     * @returns {Promise<any>}
     */
    const insertTodo = async (payload: Object): Promise<any> => {
        const config: RequestInit = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        };

        try {
            const request = await apiCall(BASE_URL, config);

            if (!request || request instanceof Error) {
                throw request ?? new Error('Undefined');
            }

            if (request.ok) {
                return await request.json();
            }
        } catch (error) {
            console.error(error);
        }
    };

    /**
     * Update an existing resource
     * 
     * @param {string} id
     * @param {Object} payload
     * @returns {Promise<any>}
     */
    const updateTodo = async (id: string, payload: Object): Promise<any> => {
        const config: RequestInit = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        };

        try {
            const request = await apiCall(BASE_URL + '/' + id, config);

            if (!request || request instanceof Error) {
                throw request ?? new Error('Undefined');
            }

            if (request.ok) {
                return await request.json();
            }
        } catch (error) {
            console.error(error);
        }
    };

    /**
     * Delete an existing resource
     * 
     * @param {string} id
     * @returns {Promise<any>}
     */
    const deleteTodo = async (id: string): Promise<any> => {
        const config: RequestInit = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const request = await apiCall(BASE_URL + '/' + id, config);

            if (!request || request instanceof Error) {
                throw request ?? new Error('Undefined');
            }

            if (request.ok) {
                return await request.json();
            }
        } catch (error) {
            console.error(error);
        }
    };

    return {
        getTodos: () => getTodos(),
        getTodo: (id: string) => getTodo(id),
        insertTodo: (payload: Object) => insertTodo(payload),
        updateTodo: (id: string, payload: Object) => updateTodo(id, payload),
        deleteTodo: (id: string) => deleteTodo(id),
    };
};