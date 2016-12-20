
import { Store } from 'redux';

import { ISampleState } from './reducers/sample';

//
// Store interfaces
//
// The interfaces may be used by reducers to help enforce type safety.
// They may also be used by components that have state mappers that
// subscribe to store changes.
//

export interface IStore {
    sample: ISampleState;
}

export interface IStoreContext { store: Store<any>; }

export { default as sample } from './reducers/sample';
