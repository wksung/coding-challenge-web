import React, { act } from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import getOwners from './api/getOwners';
import { Owner } from './types/owners';

jest.mock('./api/getOwners');
const MockData: Owner[] = [
    {
        name: 'Bob',
        gender: 'Male',
        age: 23,
        pets: [
            { name: 'Garfield', type: 'Cat' },
            { name: 'Fido', type: 'Dog' },
        ],
    },
    {
        name: 'Jennifer',
        gender: 'Female',
        age: 18,
        pets: [{ name: 'Garfield', type: 'Cat' }],
    },
    { name: 'Steve', gender: 'Male', age: 45, pets: null },
    {
        name: 'Fred',
        gender: 'Male',
        age: 40,
        pets: [
            { name: 'Tom', type: 'Cat' },
            { name: 'Max', type: 'Cat' },
            { name: 'Sam', type: 'Dog' },
            { name: 'Jim', type: 'Cat' },
        ],
    },
    {
        name: 'Samantha',
        gender: 'Female',
        age: 40,
        pets: [{ name: 'Tabby', type: 'Cat' }],
    },
    {
        name: 'Alice',
        gender: 'Female',
        age: 64,
        pets: [
            { name: 'Simba', type: 'Cat' },
            { name: 'Nemo', type: 'Fish' },
        ],
    },
];
const mockedgetOwners = getOwners as jest.MockedFunction<typeof getOwners>;

const MockApp = () => {
    return <App />;
};

describe('App', () => {
    beforeEach(() => {
        mockedgetOwners.mockResolvedValue(MockData);
    });

    it('should show up a loading message during API retrieval', async () => {
        // mock API taking 1s
        mockedgetOwners.mockClear();
        mockedgetOwners.mockImplementation(
            () =>
                new Promise((resolve) =>
                    setTimeout(() => resolve(MockData), 1000),
                ),
        );

        await act(async () => render(<MockApp />));
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('should show up an error message if the API fails', async () => {
        // mock failed API
        mockedgetOwners.mockRejectedValue(new Error('Error fetching data'));

        await act(async () => render(<MockApp />));
        expect(screen.getByText(/Error fetching data.../i)).toBeInTheDocument();
    });

    it('should show up the list of male owners cats alphabetically', async () => {
        await act(async () => render(<MockApp />));

        const petNamesElements =
            await screen.findAllByTestId('Male-PetCard--name');
        const petNames = petNamesElements.map(
            (element) => element.textContent?.trim() || '',
        );
        const sortedPetNames = [...petNames].sort((a, b) => a.localeCompare(b));
        expect(petNames).toStrictEqual(sortedPetNames);
    });

    it('should show up the list of female owners cats alphabetically', async () => {
        await act(async () => render(<MockApp />));

        const petNamesElements = await screen.findAllByTestId(
            'Female-PetCard--name',
        );
        const petNames = petNamesElements.map(
            (element) => element.textContent?.trim() || '',
        );
        const sortedPetNames = [...petNames].sort((a, b) => a.localeCompare(b));
        expect(petNames).toStrictEqual(sortedPetNames);
    });
});
