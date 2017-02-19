import * as React from 'react';
import StartStop from '../components/StartStop';
import EditTicker from '../components/EditTicker';
import Reset from '../components/Reset';
import Stats from '../components/Stats';

export default React.createClass({
  getInitialState() {
    return {loaded: false};
  },

  componentDidMount() {
    this.setState({loaded: true});
  },

  renderLoading() {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  },

  render() {
    if (this.state.loaded === false) {
      return this.renderLoading();
    }

    return (
      <div>
        <EditTicker/>
        <Stats/>
        <div className="controls section">
          <StartStop/>
          <Reset/>
        </div>
      </div>
    );
  }
});
