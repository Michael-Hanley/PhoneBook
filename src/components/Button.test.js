import { shallowMount } from '@vue/test-utils';
import Button from './Button.vue';

let wrapper;
describe('Button', () => {
  beforeEach(() => {
    wrapper = shallowMount(Button, {
        slots: {
            default: 'test'
        }
    })
  });
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});