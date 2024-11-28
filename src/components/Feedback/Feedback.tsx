import React from 'react';

import { Alert } from '@mui/material';

const Feedback = ({
    children,
    type,
}: {
    children: React.ReactNode;
    type: string;
}) => {
    return (
        <Alert
            className="Feedback"
            severity={type === 'loading' ? 'info' : 'error'}
        >
            {children}
        </Alert>
    );
};

export default Feedback;
