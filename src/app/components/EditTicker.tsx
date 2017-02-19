import * as React from 'react';
import {IStore, IStoreContext} from '../reducers';


// The mapping function tailors the store's state to the view's state.
function mapStateFromStore(store: IStore): any {
  return {
    recentEdits: store.edits.recentEdits
  };
}

export default class EditTicker extends React.Component<any, any> {
  static contextTypes: React.ValidationMap<any> = {
    store: React.PropTypes.object
  };

  context: IStoreContext;
  unsubscribe: Function;

  constructor(props: any) {
    super(props);
    if (!this.state) {
      this.state = {
        recentEdits: []
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

  renderLink(data: any, index: number) {
    console.log(JSON.stringify(data));
    return (
      <li key={ index }>
        <a href={data.url}>
          {data.url}
        </a>
      </li>
    );
  }

  render() {
    const {recentEdits} = this.state;
    return (
      <div className="ticker section">
        <h2 className="section-title">Most recent edits</h2>
        <ul className="recent-events">
          {recentEdits.map(this.renderLink)}
        </ul>
      </div>
    );
  }
};
