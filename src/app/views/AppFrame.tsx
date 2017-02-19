import * as React from 'react';

export default class AppFrame extends React.Component<any, any> {
  render() {
    return (
      <div>
        <h1 className="header">WikiStream</h1>
        {this.props.children}
      </div>
    );
  }
}
