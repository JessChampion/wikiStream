import * as R from 'ramda';
import {RECIEVED_EDIT, RESET} from '../../actions/stats';


export interface IStatsState {
  total: number;
  counts: any;
}

export default function statsReducer(state: IStatsState = {total: 0, counts: {}}, action): IStatsState {
  switch (action.type) {
    case RECIEVED_EDIT: {
      state.total++;
      return state;
    }
    case RESET: {
      state.total = 0;
      state.counts = {};
      return state;
    }
  }
  return state;
}
