import React from 'react';
import ReactDOM from 'react-dom';

import {configureStore} from './store/configure-store';
import App from './app';

const store = configureStore();

ReactDOM.render(
    <div id="main-content">
        <App store={store}/>
    </div>,
    document.getElementById('app')
);
