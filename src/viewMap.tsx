import React from 'react';
import { NotFound } from '@react-force/core';
import { ExamplesPage, HomePage } from './features';

export const viewMap = {
    examples: <ExamplesPage />,
    home: <HomePage />,
    notFound: <NotFound />,
};
