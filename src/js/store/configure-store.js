import {createStore} from 'redux';
import rootReducer from '../reducers';

export const configureStore = () => {
    const store = createStore(
        rootReducer
    );

    // if (module.hot) {
    //     // Enable Webpack hot module replacement for reducers
    //     module.hot.accept('../reducers', () => {
    //         console.log("configureStore rerun");
    //         const nextRootReducer = require('../reducers/index');
    //         store.replaceReducer(nextRootReducer);
    //     });
    // }

    return store;
};
