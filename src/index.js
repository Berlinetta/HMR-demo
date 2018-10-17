import React from 'react';
import ReactDOM from 'react-dom';

import {configureStore} from './js/store/configure-store';
import App from './js/app';

const store = configureStore();

ReactDOM.render(
    <div id="main-content">
        <App store={store}/>
    </div>,
    document.getElementById('app')
);
