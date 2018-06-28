import { ChildVuex } from 'super-vuex';
const child = new ChildVuex('demo');
export default child;
child.setState({
  value: 'Hello World'
});