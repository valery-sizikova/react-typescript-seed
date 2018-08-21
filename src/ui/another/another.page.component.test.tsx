import * as React from "react";
import { shallow } from 'enzyme';

import AnotherPageComponent from "./another.page.component";

describe('Another page component', () => {
  it('renders', () => {
    const wrapper = shallow(<AnotherPageComponent />)
    expect(wrapper.find('p').html()).toMatch(/Another page/)
  })

  it('renders snapshots, too', () => {
    const wrapper = shallow(<AnotherPageComponent />)
    expect(wrapper).toMatchSnapshot()
  })
})