import * as React from 'react';
import {IStore, IStoreContext} from '../reducers';


// The mapping function tailors the store's state to the view's state.
function mapStateFromStore(store: IStore): any {
  return {
    total: store.stats.total,
    counts: store.stats.counts
  };
}

export default class Stats extends React.Component<any, any> {
  static contextTypes: React.ValidationMap<any> = {
    store: React.PropTypes.object
  };

  context: IStoreContext;
  unsubscribe: Function;

  constructor(props: any) {
    super(props);
    if (!this.state) {
      this.state = {
        total: 0,
        counts: []
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

  renderRow(key: string, value: number) {
    return (
      <tr>
        <td className="headingCell">
          {key}
        </td>
        <td>
          {value}
        </td>
      </tr>
    );
  }

  render() {
    const {total} = this.state;
    return (
      <div className="stats section">
        <h2 className="section-title">Stats for this session</h2>
        <table className="stats-table">
          <tbody>
          {this.renderRow('Total', total)}
          </tbody>
        </table>
      </div>
    );
  }
};
