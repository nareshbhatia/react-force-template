import React, { Suspense } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { ErrorBoundary, Loading } from '@nareshbhatia/react-force';
import { theme } from './components';
import { HomePage } from './pages';

export const App: React.FC = () => {
    return (
        <ErrorBoundary>
            <Suspense fallback={<Loading />}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <HomePage />
                </ThemeProvider>
            </Suspense>
        </ErrorBoundary>
    );
};
