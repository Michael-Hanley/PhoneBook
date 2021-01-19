import { mount, shallowMount } from '@vue/test-utils';
import Modal from './Modal.vue';
import { escape } from "@/utils/escape";

let wrapper;
let options = {
  slots: {
    default: 'test'
  },
  propsData: {
    onClose: jest.fn()
  },
  mixins: [escape]
}
describe('Modal', () => {
  beforeEach(() => {
    wrapper = shallowMount(Modal, { ...options })
  });
  it('should fire close event on backdrop click', () => {
    wrapper.find('#modalBackdrop').trigger('click');
    expect(wrapper.emitted('onClose')).toHaveLength(1);
  })
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});