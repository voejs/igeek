import Velocity from 'velocity-animate';
import 'velocity-animate/velocity.ui';

export default {
  beforeEnter(el) {
    el.style.opacity = 0;
  },
  enter(el, done, delay = 0) {
    const index = el.dataset.index;
    if (index === undefined) throw new Error('[animation-group] children node miss `data-index`');
    if (delay > 0) {
      setTimeout(() => Velocity(el, 'transition.bounceDownIn', { complete: done }), delay * index);
    } else {
      Velocity(el, 'transition.bounceDownIn', { complete: done });
    }
  }
}