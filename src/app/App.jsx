import '../styles/index.scss';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { AppAccess } from 'cond-app-core/session';
import { AppRouter } from 'cond-app-core/router';
import { ResourcesProvider } from 'cond-app-core/resource';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import routes from 'routes';

const theme = createTheme({
    typography: {
        fontFamily: [
            'proxima-nova',
            'sans-serif'
        ].join(',')
    }
});

const history = createBrowserHistory({
    basename: '/u'
});

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Router history={history}>
                <AppAccess>
                    <ResourcesProvider>
                        <AppRouter routes={routes} />
                    </ResourcesProvider>
                </AppAccess>
            </Router>
        </ThemeProvider>
    );
};

export default App;
