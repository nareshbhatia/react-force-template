import React from 'react';
import { ScrollingContainer } from '@react-force/core';
import { observer } from 'mobx-react';
import Typography from '@material-ui/core/Typography';

export const MasterDetailExample = observer(() => {
    return (
        <ScrollingContainer flex="1" p={2}>
            <Typography variant="h5" component="h2">
                Master Detail Example
            </Typography>
        </ScrollingContainer>
    );
});
