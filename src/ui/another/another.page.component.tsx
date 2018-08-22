import * as React from 'react';

interface IComponentProps { }

interface IComponentState { }

export default class AnotherPageComponent extends React.Component<IComponentProps, IComponentState> {
  constructor(props: IComponentProps) {
    super(props);
  }

  render() {
    return (
      <div className="main-container">
        <p>Another page</p>
      </div>
    );
  }
}