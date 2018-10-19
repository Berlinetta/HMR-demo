import React from 'react';
import ReactDOM from 'react-dom';

import {configureStore} from './js/store/configure-store';
import App from './js/app.js';

const store = configureStore();

const render = (appCom) => {
    ReactDOM.render(
        <div id="main-content">
            {appCom}
        </div>,
        document.getElementById('app')
    );
};

render(<App store={store}/>);

if (module.hot) {
    module.hot.accept("./js/app.js", () => {
        const NextApp = require('./js/app.js').default;
        render(<NextApp store={store}/>);
    });
}
