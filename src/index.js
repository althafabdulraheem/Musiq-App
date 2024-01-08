import React from 'react';
import ReactDOM  from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import UserContext from './context/UserContext';

ReactDOM.render(<BrowserRouter><UserContext><App/></UserContext></BrowserRouter>,document.getElementById('root'))