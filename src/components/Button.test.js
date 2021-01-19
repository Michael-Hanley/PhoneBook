import { shallowMount } from '@vue/test-utils';
import Button from './Button.vue';

let wrapper;
let testProps = {
  onClick: jest.fn()
}
describe('Button', () => {
  beforeEach(() => {
    wrapper = shallowMount(Button, {
      slots: {
        default: 'test'
      },
      propsData: { ...testProps }
    })
  });
  it('should fire onClick on click', () => {
    wrapper.find('.button').trigger('click')
    expect(testProps.onClick).toBeCalled();
  })
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});