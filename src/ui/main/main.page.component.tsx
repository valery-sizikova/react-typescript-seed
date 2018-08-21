import * as React from 'react';
import { resolveInject } from 'src/di';

import { IMainService } from 'src/services/main/main.service';

import './main.page.component.css';

interface IComponentProps { }

interface IComponentState {
  pageTitle: string;
}

export default class MainPageComponent extends React.Component<IComponentProps, IComponentState> {
  private mainService = resolveInject(IMainService);
  constructor(props: IComponentProps) {
    super(props);
    this.state = {
      pageTitle: ""
    };
  }

  componentDidMount() {
    const text = this.mainService.getPageTitle();
    this.setState({
      pageTitle: text
    })
  }

  render() {
    return (
      <div className="main-container">
        <p>{this.state.pageTitle}</p>
      </div>
    );
  }
}