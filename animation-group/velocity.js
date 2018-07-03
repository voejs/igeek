import Velocity from 'velocity-animate';
import 'velocity-animate/velocity.ui';

export default (name, delay) => {
  return {
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      let _delay = delay;
      const index = el.dataset.index;
      const length = el.dataset.length;
      if (index === undefined) throw new Error('[animation-group] children node miss `data-index`');
      if (length === undefined) throw new Error('[animation-group] children node miss `data-length`');
      if (typeof _delay === 'function') {
        _delay = _delay(index, length) || 0;
      } else {
        _delay = _delay * index;
      }
      if (_delay > 0) {
        setTimeout(() => Velocity(el, name).then(done), _delay);
      } else {
        Velocity(el, name).then(done);
      }
    },
    leave(el, done) {
      let _delay = delay;
      const index = el.dataset.index;
      const length = el.dataset.length;
      if (index === undefined) throw new Error('[animation-group] children node miss `data-index`');
      if (length === undefined) throw new Error('[animation-group] children node miss `data-length`');
      if (typeof _delay === 'function') {
        _delay = _delay(index, length) || 0;
      } else {
        _delay = _delay * (length - index);
      }
      if (_delay > 0) {
        setTimeout(() => Velocity(el, name).then(done), _delay);
      } else {
        Velocity(el, name).then(done);
      }
    }
  }
}