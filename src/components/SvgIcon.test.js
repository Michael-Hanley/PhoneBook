import { shallowMount } from '@vue/test-utils';
import SvgIcon from './SvgIcon.vue';

let wrapper;
describe('SvgIcon', () => {
  beforeEach(() => {
    wrapper = shallowMount(SvgIcon, {
      propsData: {
        name: 'clear'
      }
    })
  });
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});