import { shallowMount } from '@vue/test-utils';
import SelectDropdown from './SelectDropdown.vue';

let wrapper;
let testOptions = ['test-option-1', 'test-option-2']
describe('SelectDropdown', () => {
  beforeEach(() => {
    wrapper = shallowMount(SelectDropdown, {
      slots: {
        default: 'test'
      },
      propsData: {
        options: [...testOptions],
        value: testOptions[0]
      }
    })
  });
  it('should display the proper option when selected', () => {
    expect(wrapper.vm.localValue).toBe(testOptions[0]);

    wrapper.findAll('select > option').at(1).element.selected = true;
    wrapper.find('select').trigger('change');

    expect(wrapper.vm.localValue).toBe(testOptions[1])
  });
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});