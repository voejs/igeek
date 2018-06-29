import MenuTip from './tip.vue';
import MenuGroup from './group.vue';
export default {
  name: 'menu-list',
  render() {
    const nav = this.$store.menu.get('navArray');
    const result = [];
    for (let i = 0, j = nav.length; i < j; i++) {
      const item = nav[i];
      result.push(
        <MenuTip>{item.label}</MenuTip>,
        <MenuGroup data-source={item.data}></MenuGroup>
      )
    }
    return <div>{result}</div>;
  }
}