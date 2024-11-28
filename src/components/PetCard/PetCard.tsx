import React from 'react';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import { Pet } from '../../types/owners';

const PetCard = ({ gender, pets }: { gender: string; pets: Pet[] }) => {
    return (
        <Card sx={{ padding: '1rem' }} variant="outlined">
            <p style={{ margin: 0, fontWeight: 'bold' }}>{gender}</p>
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
