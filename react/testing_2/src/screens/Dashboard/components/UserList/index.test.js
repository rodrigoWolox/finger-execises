import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import UserList from './index';

configure({ adapter: new Adapter() });

describe('UserList', () => {
  it('UserList shows new user when props are changed', () => {
    const wrapper = mount(<UserList users={[
      { id:1, name: 'Jane', active: false }, 
      { id:2, name: 'Robert', active: true }
    ]} />);
    expect(wrapper.find('UserRow').find('h3').first().text()).toBe('Jane');
    wrapper.setProps({users: [
      { id:20, name: 'Justin', active: false }, 
      { id:21, name: 'Marilyn', active: true }
    ]});
    expect(wrapper.find('UserRow').find('h3').first().text()).toBe('Justin');
  });
});