export default {
  name: 'animation',
  props: {
    enter: String,
    leave: String,
    appear: Boolean,
    mode: String
  },
  render(createElement) {
    const data = {};
    data.props = { name: 'animate' };
    if (this.enter) data.props.enterActiveClass = 'animated ' + this.enter;
    if (this.leave) data.props.leaveActiveClass = 'animated ' + this.leave;
    if (this.appear) data.props.appear = true;
    if (this.mode) data.props.mode = this.mode;
    return createElement('transition', data, this.$slots.default);
  }
}