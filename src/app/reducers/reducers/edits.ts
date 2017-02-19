import * as R from 'ramda';
import {RECIEVED_EDIT} from '../../actions/edits';

const MAX_RECENT_EDITS = 10;

const trimEnd = R.ifElse(R.compose((x) => x >= MAX_RECENT_EDITS, R.length), R.dropLast(1), R.identity);
const addEdit = (recentEdits: any[], edit: any) => R.compose(R.prepend(edit), trimEnd)(recentEdits);

export interface IEditsState {
  recentEdits: any[];
}

export default function editsReducer(state: IEditsState = {recentEdits: []}, action): IEditsState {
  switch (action.type) {
    case RECIEVED_EDIT: {
      state.recentEdits = addEdit(state.recentEdits, action.edit);
      return state;
    }
  }
  return state;
}
