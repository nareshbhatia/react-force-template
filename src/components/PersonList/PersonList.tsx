import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { usePeople } from './usePeople';

export const PersonList = () => {
    const { isLoading, isError, data: people, error } = usePeople();

    // Allow ErrorBoundary to handle errors
    if (isError) {
        throw error;
    }

    if (isLoading || people === undefined) {
        return null;
    }

    return (
        <Table size="small">
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Company</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>City</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {people.map((person) => (
                    <TableRow key={person.id}>
                        <TableCell>{person.name}</TableCell>
                        <TableCell>{person.company}</TableCell>
                        <TableCell>{person.email}</TableCell>
                        <TableCell>{person.city}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};
