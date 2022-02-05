import { GET_ACCOUNT } from './types';

const initState = {
    isFetching: true,
    account: {},
    clients: {}
};

const addWalletReducer = (state = initState, action) => {
    switch (action.type) {
    case GET_ACCOUNT:
        return {
            ...state,
            isFetching: false,
            account: action.payload
        };
    default:
        return state;
    }
};

export default addWalletReducer;
