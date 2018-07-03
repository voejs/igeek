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
      if (index === undefined) throw new Error('[animation-group] children node miss `data-index`');
      if (typeof _delay === 'function') {
        _delay = _delay(index) || 0;
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
      if (index === undefined) throw new Error('[animation-group] children node miss `data-index`');
      if (typeof _delay === 'function') {
        _delay = _delay(index) || 0;
      } else {
        _delay = _delay * index;
      }
      if (_delay > 0) {
        setTimeout(() => Velocity(el, name).then(done), _delay);
      } else {
        Velocity(el, name).then(done);
      }
    }
  }
}