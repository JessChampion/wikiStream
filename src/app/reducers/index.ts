import {Store} from 'redux';
import {IEditsState} from './reducers/edits';
import {IStatsState} from './reducers/stats';
import {IStreamState} from './reducers/stream';


//
// Store interfaces
//
// The interfaces may be used by reducers to help enforce type safety.
// They may also be used by components that have state mappers that
// subscribe to store changes.
//

export interface IStore {
  stream: IStreamState;
  edits: IEditsState;
  stats: IStatsState;
}

export interface IStoreContext { store: Store<any>; }

export {default as stats} from './reducers/stats';
export {default as stream} from './reducers/stream';
export {default as edits} from './reducers/edits';
