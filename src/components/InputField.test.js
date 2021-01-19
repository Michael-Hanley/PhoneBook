import { shallowMount } from '@vue/test-utils';
import InputField from './InputField.vue';

let wrapper;
describe('InputField', () => {
  beforeEach(() => {
    wrapper = shallowMount(InputField, {
      slots: {
        default: 'test'
      },
      propsData: {
        value: 'test-value',
        label: 'test-label'
      }
    })
  });
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});