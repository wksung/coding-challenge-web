import { OwnerResponse } from '../types/owners';

// Returns all owners from the specific API endpoint and returns the promise to resolve to an array of owner objects.
const getOwners = async (): Promise<OwnerResponse> => {
    const response = await fetch(
        `${process.env.REACT_APP_API_URL}/people.json`,
    );

    if (!response.ok) {
        throw new Error('Unable to process API');
    }

    return response.json();
};

export default getOwners;
