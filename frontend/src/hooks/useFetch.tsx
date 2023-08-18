import React, { useEffect } from 'react'

interface Props {
    url?: string;
}

export const useFetch = ({ url }: Props) => {
    const [data, setData] = React.useState<any>(null);
    const [error, setError] = React.useState<{} | null>(null);

    const PATH = url || '';
    const options: RequestInit = {};

    const fetchData = async () => {
        try {
            const request = await fetch(PATH, options);

            if (!request.ok) {
                const err = {
                    'errorNumber': request.status,
                    'statusText': request.statusText
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

    useEffect(() => {
        fetchData();
    }, []);

    return { data, error } as const;
};