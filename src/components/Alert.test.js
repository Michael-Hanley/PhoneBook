import { shallowMount } from '@vue/test-utils';
import Alert from './Alert.vue';

let wrapper;
describe('Alert', () => {
  beforeEach(() => {
    wrapper = shallowMount(Alert, {
        slots: {
            default: 'test'
        }
    })
  });
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});