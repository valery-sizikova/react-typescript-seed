import * as React from 'react';
import { resolveInject } from './../../di';


import './main.page.component.css';
import { IMainService } from '../../services/main/main.service';

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