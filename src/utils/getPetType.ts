import { Owner, Pet } from '../types/owners';

const getPetType = (owners: Owner[], gender: string, type: string): Pet[] => {
    return owners
        .flatMap((owner) =>
            owner.pets
                ? owner.pets.filter(
                      (pet) => owner.gender === gender && pet.type === type,
                  )
                : [],
        )
        .filter((pets) => pets !== undefined)
        .sort((a, b) => a.name.localeCompare(b.name));
};

export default getPetType;
