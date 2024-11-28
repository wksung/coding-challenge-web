export interface Pet {
    name: string;
    type: string;
}

export interface Owner {
    name: string;
    gender: 'Male' | 'Female';
    age: number;
    pets: Pet[] | null;
}

export type OwnerResponse = Owner[];
