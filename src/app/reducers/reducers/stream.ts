import * as R from 'ramda';

import {recievedEdit} from '../../actions/edits';
import {START_STREAM, STOP_STREAM} from '../../actions/stream';
import store from '../../store';

const WIKI_ENDPOINT = 'https://stream.wikimedia.org/v2/stream/recentchange';
const SELECT_KEYS = ['bot', 'comment', 'id', 'length', 'minor', 'revision', 'server_name', 'timestamp', 'title', 'type'];

const selectData = R.pickAll(SELECT_KEYS);
const calculateValues = R.applySpec({
  url: R.path(['meta', 'uri'])
});
const processData = R.converge(R.merge, [selectData, calculateValues]);

export interface IStreamState {
  active: boolean;
  eventStream: any;
}

export default function streamReducer(state: IStreamState = {active: false, eventStream: null}, action): IStreamState {
  switch (action.type) {
    case START_STREAM: {
      state.active = true;
      state.eventStream = start(state.eventStream);
      return state;
    }
    case STOP_STREAM: {
      state.active = false;
      state.eventStream = stop(state.eventStream);
      return state;
    }
  }
  return state;
}

function start(eventStream) {
  if (eventStream) {
    eventStream = stop(eventStream);
  }
  eventStream = new EventSource(WIKI_ENDPOINT);
  eventStream.onmessage = onNewMessage;
  return eventStream;
}

function stop(eventStream) {
  if (eventStream) {
    eventStream.close();
  }
  return null;
}

function onNewMessage(e) {
  const data = processData(JSON.parse(e.data));
  console.log(JSON.stringify(data));
  store.dispatch(recievedEdit(data));
}
