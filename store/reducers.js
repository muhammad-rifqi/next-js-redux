import { combineReducers } from '@reduxjs/toolkit';
import person from './person/';
import test from './test/';

import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
    person,
    test
 });

 export const config = {
    key: 'my-apps',
    storage,
    whitelist: ['person','test'],
 };

 
export default rootReducer