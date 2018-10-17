const home = (state = {counter: 0}, action) => {
    switch (action.type) {
        case 'HOME_INCREASE_COUNTER':
            return {
                ...state,
                counter: state.counter + 1
            };
        case 'HOME_DECREASE_COUNTER':
            return {
                ...state,
                counter: state.counter - 1
            };
        default:
            return state;
    }
};

export default home;
