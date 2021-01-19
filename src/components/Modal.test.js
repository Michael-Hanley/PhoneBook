import { shallowMount } from '@vue/test-utils';
import Modal from './Modal.vue';

let wrapper;
describe('Modal', () => {
  beforeEach(() => {
    wrapper = shallowMount(Modal, {
        slots: {
            default: 'test'
        }
    })
  });
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});