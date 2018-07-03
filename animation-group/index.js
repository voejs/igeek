import velocity from './velocity';

export default {
  name: 'animation-group',
  props: {
    enter: String,
    leave: String,
    appear: [String, Boolean],
    delay: {
      type: [Number, Function],
      default: 0
    },
    tag: String,
    mode: String
  },
  render(createElement) {
    const data = {};
    data.props = {};
    data.attrs = this.$attrs;
    data.on = {};
    if (this.enter) choose(this.enter, 'enter', data.on, this.delay);
    if (this.leave) choose(this.leave, 'leave', data.on, this.delay);
    if (typeof this.appear === 'string') {
      choose(this.appear, 'appear', data.on, this.delay);
      data.props.appear = true;
    } else if (this.appear) {
      data.props.appear = true;
    }
    data.props.tag = this.tag;
    data.props.css = false;
    data.props.name = 'animation-group';
    if (this.mode) data.props.mode = this.mode;
    return createElement('transition-group', data, this.$slots.default);
  }
}

function choose(name, type, target, delay) {
  const animation = velocity(name, delay);
  switch (type) {
    case 'enter':
      importExtend('beforeEnter', animation, target);
      importExtend('enter', animation, target);
      importExtend('afterEnter', animation, target);
      break;
    case 'leave':
      importExtend('beforeLeave', animation, target);
      importExtend('leave', animation, target);
      importExtend('afterLeave', animation, target);
      break;
    case 'appear':
      importExtend('beforeAppear', animation, target);
      importExtend('appear', animation, target);
      importExtend('afterAppear', animation, target);
      break;
  }
}

function importExtend(name, animation, target) {
  if (animation[name]) {
    target[name] = animation[name];
  }
}