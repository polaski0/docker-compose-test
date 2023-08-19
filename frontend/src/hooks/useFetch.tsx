import React from "react";

interface Props {
    url?: string | URL;
    params: string;
    config: RequestInit;
};

const BASE_PATH = "http://localhost:3001/";

export const useFetch = ({ url, params, config }: Props) => {
    const [data, setData] = React.useState<any>(null);
    const [error, setError] = React.useState<any>(null);

    const PATH = url || BASE_PATH + params;

    const fetchData = async () => {
        try {
            const request = await fetch(PATH, config);

            if (!request.ok) {
                const err = {
                    "errorNumber": request.status,
                    "statusText": request.statusText
                }

                throw err;
            }

            const response = await request.json();
            setData(response);
        } catch (error) {
            if (error instanceof Error) {
                setError(error);
            }
        }

    };

    React.useEffect(() => {
        fetchData();
    }, []);

    return { data, error } as const;
};