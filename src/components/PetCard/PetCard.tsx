import React from 'react';
import { Pet } from '../../types/owners';

import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';

const PetCard = ({ gender, pets }: { gender: string; pets: Pet[] }) => {
    return (
        <Card sx={{ padding: '1rem' }} className="PetCard" variant="outlined">
            <p
                data-testid="PetCard--gender"
                className="PetCard--heading"
                style={{ margin: 0, fontWeight: 'bold' }}
            >
                {gender}
            </p>
            <Divider sx={{ paddingTop: '0.5rem' }} />
            {pets.map((pet, index) => {
                return (
                    <p
                        key={index}
                        data-testid={`${gender}-PetCard--name`}
                        className="PetCard--name"
                        style={{
                            marginBottom: index === pets.length - 1 ? 0 : '',
                        }}
                    >
                        {pet.name}
                    </p>
                );
            })}
        </Card>
    );
};

export default PetCard;
