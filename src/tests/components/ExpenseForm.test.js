import React from 'react'
import { shallow } from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'

test('should render Expense correctly', () => {
  const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
})
