import Alert from '@/components/Alert';
import Vue from 'vue';

const alert = (ref, message, onOk, onClose) => {
  let ComponentClass = Vue.extend(Alert);
  let instance = new ComponentClass();

  instance.onOk = onOk;
  instance.onClose = onClose;
  instance.$slots.default = [message];

  instance.$mount();
  ref.appendChild(instance.$el);
}

export default alert;