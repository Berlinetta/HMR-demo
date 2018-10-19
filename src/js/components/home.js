import React from "react";
import {connect} from "react-redux";
import Footer from './footer';
import {decreaseCounter, increaseCounter} from "../actions/home";
import {testPrint} from '../utils';

import './home.less';

class HomeApp extends React.Component {
    render() {
        const {counter, increaseCounter, decreaseCounter} = this.props;
        return (
            <section>
                <h2 className="title">Counter: {counter}</h2>
                <div>
                    <button onClick={increaseCounter}>Increase</button>
                    &nbsp;&nbsp;
                    <button onClick={decreaseCounter}>Decrease</button>
                </div>
                <br/>
                <p>{testPrint()}</p>
                <Footer/>
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    counter: state.home.counter
});

const mapDispatchToProps = {
    increaseCounter,
    decreaseCounter
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeApp);
