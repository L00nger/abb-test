import React from 'react';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme }  from './theme';
import configureStore from './store/store';
import {Provider} from "react-redux"
import Home from './home/Home'

export const store = configureStore()

function App() {
    return (
        <Provider store={store}>
            <MuiThemeProvider theme={theme}>
                <Home/>
            </MuiThemeProvider>
        </Provider>
    )
} 

export default App;
