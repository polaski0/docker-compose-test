export const apiCall = async (input: URL | RequestInfo, init: RequestInit): Promise<any> => {
    try {
        const request = await fetch(input, init);

        if (!request.ok) {
            const error = {
                "errorNumber": request.status,
                "statusText": request.statusText,
            }

            throw error;
        }

        return request;
    } catch (error) {
        if (error instanceof Error) {
            return error;
        }
    }
};

export const debounce = (callback: any, ms: number) => {
    let timeout: ReturnType<typeof setTimeout>;

    return () => {
        clearTimeout(timeout);
        timeout = setTimeout(callback, ms);
    };
}