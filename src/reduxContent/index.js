import { combineReducers } from 'redux';

import addWalletReducer from './addWallet/reducers';

const rootReducer = combineReducers({
    addWallet: addWalletReducer
});

export default rootReducer;
