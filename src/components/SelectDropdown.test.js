import { shallowMount } from '@vue/test-utils';
import SelectDropdown from './SelectDropdown.vue';

let wrapper;
describe('SelectDropdown', () => {
  beforeEach(() => {
    wrapper = shallowMount(SelectDropdown, {
      slots: {
        default: 'test'
      },
      propsData: {
        options: ['test-option-1, test-option-2']
      }
    })
  });
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});