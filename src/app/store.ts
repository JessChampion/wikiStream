import {combineReducers, createStore, Store} from 'redux';
import * as reducers from './reducers';

const rootReducer = combineReducers(reducers as any); // ES6 trick
const store = createStore(rootReducer);

store.subscribe(() => {
  // console.log(store.getState()); // Log the state whenever the store changes.
});

export interface IStoreContext {
  store: Store<any>;
}

export default store;
