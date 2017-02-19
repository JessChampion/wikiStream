import * as React from 'react';
import {reset} from '../actions/stats';
import {IStore, IStoreContext} from '../reducers';


export default class Reset extends React.Component<any, any> {
  static contextTypes: React.ValidationMap<any> = {
    store: React.PropTypes.object
  };

  context: IStoreContext;
  unsubscribe: Function;

  constructor(props: any) {
    super(props);
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  reset() {
    //noinspection TypeScriptValidateTypes
    this.context.store.dispatch(reset());
  }

  render() {
    const classes = 'resetButton button';
    return (
      <div className="buttonHolder">
        <button className={classes}
                onClick={this.reset.bind(this)}>
          Reset Stats
        </button>
      </div>
    );
  }
};
