import React, { useState, useEffect } from 'react';
import getPetType from './utils/getPetType';
import useFetchOwners from './hooks/useFetchOwners';
import Feedback from './components/Feedback/Feedback';
import PetCard from './components/PetCard/PetCard';
import { Pet } from './types/owners';

import './styles/App.css';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid2';

const App = () => {
    const { owners, error, loading } = useFetchOwners();

    // split cats based on their owner's gender
    const [malePetOwners, setMaleOwners] = useState<Pet[]>([]);
    const [femaleOwners, setFemaleOwners] = useState<Pet[]>([]);

    // retrieve cats name based on owner's gender & pet type
    useEffect(() => {
        setMaleOwners(getPetType(owners, 'Male', 'Cat'));
        setFemaleOwners(getPetType(owners, 'Female', 'Cat'));
    }, [owners]);

    return (
        <Container
            maxWidth="xl"
            sx={{ paddingTop: '2.5rem', paddingBottom: '2.5rem' }}
        >
            <Grid container rowSpacing={1} spacing={2}>
                <Grid size={12}>
                    <h1 style={{ fontSize: '1rem' }}>Cat Names by Gender</h1>
                </Grid>
                {loading ? (
                    <Grid size={12}>
                        <Feedback type="loading">Loading...</Feedback>
                    </Grid>
                ) : error ? (
                    <Grid size={12}>
                        <Feedback type="error">{error}</Feedback>
                    </Grid>
                ) : (
                    <>
                        <Grid size={6}>
                            {' '}
                            <PetCard
                                gender="Male"
                                pets={malePetOwners}
                            ></PetCard>
                        </Grid>
                        <Grid size={6}>
                            <PetCard
                                gender="Female"
                                pets={femaleOwners}
                            ></PetCard>
                        </Grid>
                    </>
                )}
            </Grid>
        </Container>
    );
};

export default App;
