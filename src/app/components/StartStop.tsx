import * as React from 'react';
import {startStream, stopStream} from '../actions/stream';
import {IStore, IStoreContext} from '../reducers';

// The mapping function tailors the store's state to the view's state.
function mapStateFromStore(store: IStore): any {
  return {
    active: store.stream.active
  };
}

export default class StartStop extends React.Component<any, any> {
  static contextTypes: React.ValidationMap<any> = {
    store: React.PropTypes.object
  };

  context: IStoreContext;
  unsubscribe: Function;

  constructor(props: any) {
    super(props);
    if (!this.state) {
      this.state = {
        active: false
      };
    }
  }

  componentDidMount() {
    // This helper wraps common code so we can initialze state and then subscribe.
    this.setStateFromStore();
    this.unsubscribe = this.context.store.subscribe(this.setStateFromStore.bind(this));
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  setStateFromStore() {
    this.setState(mapStateFromStore(this.context.store.getState()));
  }

  startStop() {
    if (this.state.active) {
      //noinspection TypeScriptValidateTypes
      this.context.store.dispatch(stopStream());
      return;
    }
    //noinspection TypeScriptValidateTypes
    this.context.store.dispatch(startStream());
  }

  render() {
    const label = this.state.active ? 'Stop' : 'Start';
    let classes = 'startButton button';
    classes += this.state.active ? ' active' : '';
    return (
      <div className="buttonHolder">
        <button className={classes}
                onClick={this.startStop.bind(this)}>
          {label}
        </button>
      </div>
    );
  }
};
