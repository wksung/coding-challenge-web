import { Alert } from '@mui/material';
import React from 'react';

const Feedback = ({
    children,
    type,
}: {
    children: React.ReactNode;
    type: string;
}) => {
    return (
        <Alert severity={type === 'loading' ? 'info' : 'error'}>
            {children}
        </Alert>
    );
};

export default Feedback;
