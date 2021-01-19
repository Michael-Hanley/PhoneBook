import { shallowMount } from '@vue/test-utils';
import Card from './Card.vue';

let wrapper;
describe('Card', () => {
  beforeEach(() => {
    wrapper = shallowMount(Card, {
        slots: {
            default: 'test'
        }
    })
  });
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});