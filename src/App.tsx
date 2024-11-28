import React, { useState, useEffect } from 'react';
import getPetType from './utils/getPetType';
import useFetchOwners from './hooks/useFetchOwners';
import { Pet } from './types/owners';

import { Container } from '@mui/material';
import Grid from '@mui/material/Grid2';
import './styles/App.css';

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
            style={{ paddingTop: '40px', paddingBottom: '40px' }}
        >
            <Grid container rowSpacing={1}>
                <Grid size={12}>
                    {loading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p>{error}</p>
                    ) : (
                        <>
                            <p>{JSON.stringify(malePetOwners)}</p>
                            <p>{JSON.stringify(femaleOwners)}</p>
                        </>
                    )}
                </Grid>
            </Grid>
        </Container>
    );
};

export default App;
