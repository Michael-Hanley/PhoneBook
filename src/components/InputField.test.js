import { shallowMount } from '@vue/test-utils';
import InputField from './InputField.vue';

let wrapper;
let testProps = {
  value: 'test-value',
  label: 'test-label'
}
describe('InputField', () => {
  beforeEach(() => {
    wrapper = shallowMount(InputField, {
      slots: {
        default: 'test'
      },
      propsData: { ...testProps }
    })
  });
  it('should set localValue based on inputed value', () => {
    expect(wrapper.vm.localValue).toBe(testProps.value);

    let newTestValue = 'new-test-value';
    let input = wrapper.find('input');

    input.element.value = newTestValue;
    input.trigger('input');

    expect(wrapper.vm.localValue).toBe(newTestValue);
  });
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});