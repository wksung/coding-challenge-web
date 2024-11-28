import { useEffect, useState } from 'react';
import { OwnerResponse } from '../types/owners';
import getOwners from '../api/getOwners';

const useFetchOwners = () => {
    const [owners, setOwners] = useState<OwnerResponse>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchOwners = async () => {
            try {
                const data = await getOwners();
                setOwners(data);
            } catch (error) {
                setError('Error fetching data');
            } finally {
                setLoading(false);
            }
        };

        fetchOwners();
    }, []);

    return { owners, loading, error };
};

export default useFetchOwners;
