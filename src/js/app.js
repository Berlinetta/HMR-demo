import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Home from './components/home';

export default class App extends Component {
    render() {
        const {store} = this.props;
        return (
            <div>
                <Provider store={store}>
                    <Home/>
                </Provider>
            </div>
        );
    }
}
