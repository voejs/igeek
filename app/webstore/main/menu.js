import { ChildVuex } from 'super-vuex';

export default app => {
  const child = new ChildVuex('menu');
  child.setState({
    closed: false,
    navigate: app.config.navigate
  });
  return child;
}
