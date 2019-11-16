import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {
    Header,
    HeaderTitle,
    ViewVerticalContainer
} from '@nareshbhatia/react-force';
import { PersonList } from '../../components';

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4)
    },
    section: {
        marginTop: theme.spacing(3)
    }
}));

export const HomePage = () => {
    const classes = useStyles();

    return (
        <ViewVerticalContainer>
            <Header>
                <HeaderTitle>React Force Template</HeaderTitle>
            </Header>
            <Container maxWidth="lg" className={classes.container}>
                <Typography component="h1" variant="h3" color="textSecondary">
                    Hi people
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Welcome to React Force
                </Typography>

                <Typography>
                    This template is intended to be a starting point for serious
                    React applications. It offers an opinionated directory
                    structure and demonstrates best practices in layout, error
                    handling, hooks and more. To see a quick example, disconnect
                    from Internet and try to reload this application.
                </Typography>

                <section className={classes.section}>
                    <Typography component="h2" variant="h6" gutterBottom>
                        Sample Data (from JSONPlaceholder)
                    </Typography>
                    <PersonList />
                </section>
            </Container>
        </ViewVerticalContainer>
    );
};
