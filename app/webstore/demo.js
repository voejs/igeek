import { ChildVuex } from 'super-vuex';
const child = new ChildVuex('demo');
export default child;
child.setState({
  value: 'Hello World',
  mode: 0,
  gmode: 0,
  animates: ["bounce", "flash", "pulse", "rubberBand", "shake", "swing", "tada", "wobble", "jello", "bounceIn", "bounceInDown", "bounceInLeft", "bounceInRight", "bounceInUp", "bounceOut", "bounceOutDown", "bounceOutLeft", "bounceOutRight", "bounceOutUp", "fadeIn", "fadeInDown", "fadeInDownBig", "fadeInLeft", "fadeInLeftBig", "fadeInRight", "fadeInRightBig", "fadeInUp", "fadeInUpBig", "fadeOut", "fadeOutDown", "fadeOutDownBig", "fadeOutLeft", "fadeOutLeftBig", "fadeOutRight", "fadeOutRightBig", "fadeOutUp", "fadeOutUpBig", "flip", "flipInX", "flipInY", "flipOutX", "flipOutY", "lightSpeedIn", "lightSpeedOut", "rotateIn", "rotateInDownLeft", "rotateInDownRight", "rotateInUpLeft", "rotateInUpRight", "rotateOut", "rotateOutDownLeft", "rotateOutDownRight", "rotateOutUpLeft", "rotateOutUpRight", "slideInUp", "slideInDown", "slideInLeft", "slideInRight", "slideOutUp", "slideOutDown", "slideOutLeft", "slideOutRight", "zoomIn", "zoomInDown", "zoomInLeft", "zoomInRight", "zoomInUp", "zoomOut", "zoomOutDown", "zoomOutLeft", "zoomOutRight", "zoomOutUp", "hinge", "jackInTheBox", "rollIn", "rollOut"],
  groups: ["callout.bounce", "callout.shake", "callout.flash", "callout.pulse", "callout.swing", "callout.tada", "transition.fadeIn", "transition.fadeOut", "transition.flipXIn", "transition.flipXOut", "transition.flipYIn", "transition.flipYOut", "transition.flipBounceXIn", "transition.flipBounceXOut", "transition.flipBounceYIn", "transition.flipBounceYOut", "transition.swoopIn", "transition.swoopOut", "transition.whirlIn", "transition.whirlOut", "transition.shrinkIn", "transition.shrinkOut", "transition.expandIn", "transition.expandOut", "transition.bounceIn", "transition.bounceOut", "transition.bounceUpIn", "transition.bounceUpOut", "transition.bounceDownIn", "transition.bounceDownOut", "transition.bounceLeftIn", "transition.bounceLeftOut", "transition.bounceRightIn", "transition.bounceRightOut", "transition.slideUpIn", "transition.slideUpOut", "transition.slideDownIn", "transition.slideDownOut", "transition.slideLeftIn", "transition.slideLeftOut", "transition.slideRightIn", "transition.slideRightOut", "transition.slideUpBigIn", "transition.slideUpBigOut", "transition.slideDownBigIn", "transition.slideDownBigOut", "transition.slideLeftBigIn", "transition.slideLeftBigOut", "transition.slideRightBigIn", "transition.slideRightBigOut", "transition.perspectiveUpIn", "transition.perspectiveUpOut", "transition.perspectiveDownIn", "transition.perspectiveDownOut", "transition.perspectiveLeftIn", "transition.perspectiveLeftOut", "transition.perspectiveRightIn", "transition.perspectiveRightOut"],
  list: [
    { msg: 'Thomas' },
    { msg: 'Dave Klingeberg' },
    { msg: 'Berni Leitzke' },
    { msg: 'Toni D\'Angelo' },
    { msg: 'Dimitri Reifschneider' },
    { msg: 'Sebastian Appelt' },
    { msg: 'Sergei Kulichkov' },
    { msg: 'Jakob Hirscheider' },
    { msg: 'Claus Gehrke' },
    { msg: 'Axel Klemm' }
  ],
  list1: [],
  list2: []
});