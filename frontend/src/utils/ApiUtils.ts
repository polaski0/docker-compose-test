export const apiCall = async (url: string, config: RequestInit): Promise<any> => {
    try {
        const request = await fetch(url, config);

        if (!request.ok) {
            const error = {
                "errorNumber": request.status,
                "statusText": request.statusText,
            }

            throw error;
        }

        return await request.json();
    } catch (error) {
        if (error instanceof Error) {
            return error;
        }
    }
};