import * as React from "react";
import { shallow } from 'enzyme';

import { container } from "../../di";
import { IMainService } from "../../services/main/main.service";
import { FakeMainService } from "../../services/main/main.service.fake";

import MainPageComponent from "./main.page.component";

describe('Main page component', () => {

  beforeAll(() => {
    container.bind(IMainService).to(FakeMainService);
  })

  it('renders', () => {
    const wrapper = shallow(<MainPageComponent />)
    expect(wrapper.find('p').html()).toMatch(/Fake main page/)
  })

  it('renders snapshots, too', () => {
    const wrapper = shallow(<MainPageComponent />);
    expect(wrapper).toMatchSnapshot()
  })

  afterAll(() => {
    container.unbind(IMainService);
  })
})