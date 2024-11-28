import getPetType from './getPetType';
import { Owner } from '../types/owners';

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

describe('getPetType', () => {
    it('should return cats for male owners only', () => {
        const result = getPetType(MockData, 'Male', 'Cat');
        expect(result).toEqual([
            { name: 'Garfield', type: 'Cat' },
            { name: 'Jim', type: 'Cat' },
            { name: 'Max', type: 'Cat' },
            { name: 'Tom', type: 'Cat' },
        ]);
    });

    it('should return cats for female owners only', () => {
        const result = getPetType(MockData, 'Female', 'Cat');
        expect(result).toEqual([
            { name: 'Garfield', type: 'Cat' },
            { name: 'Simba', type: 'Cat' },
            { name: 'Tabby', type: 'Cat' },
        ]);
    });

    it('should return an empty array for owners that are THEY/THEM', () => {
        const result = getPetType(MockData, 'They/Them', 'Cat');
        expect(result).toEqual([]);
    });

    it('should return an empty array for owners without pets', () => {
        const NoPetMockData: Owner[] = [
            { name: 'Steve', gender: 'Male', age: 45, pets: null },
        ];
        const result = getPetType(NoPetMockData, 'Female', 'Cat');
        expect(result).toEqual([]);
    });
});
