import React from 'react';
import ReactDOM from 'react-dom';
import { EnvProvider } from '@react-force/core';
import { App } from './App';

ReactDOM.render(
    <React.StrictMode>
        <EnvProvider>
            <App />
        </EnvProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
