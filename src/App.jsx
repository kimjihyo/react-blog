import React from 'react';
import './App.css';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import theme from './theme.js';

import MainPage from './components/pages/MainPage.jsx';

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <MainPage />
            </MuiThemeProvider>
        );
    }
}

export default App;
