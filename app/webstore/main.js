import { ChildVuex } from 'super-vuex';

export default app => {
  const toggleName = 'iGeek:' + app.config.name + ':toggle';
  const child = new ChildVuex('main');
  child.setState({
    closed: !!Number(global.localStorage.getItem(toggleName)),
    current: null,
    title: app.config.title,
    description: app.config.description,
    nav: [
      {
        label: '模板演示',
        data: app.config.navigate
      }
    ]
  });
  
  child.setCommit('toggle', (state, data) => {
    state.closed = data;
    global.localStorage.setItem(toggleName, Number(data));
  });
  
  child.setGetter('navArray', state => {
    const result = [];
    const nav = state.nav;
    for (let i = 0, j = nav.length; i < j; i++) {
      result.push({
        label: nav[i].label,
        data: injectNavArray(nav[i].data)
      })
    }
    return result;
  });
  
  child.setGetter('navMap', state => {
    const nav = state.nav;
    const map = {};
    for (let i = 0, j = nav.length; i < j; i++) {
      const data = nav[i].data;
      injectNavMap(data, map);
    }
    return map;
  });
  
  return child;
}

function injectNavArray(data, path = []) {
  const result = [];
  for (let i = 0, j = data.length; i < j; i++) {
    const paths = path.slice();
    const res = data[i];
    paths.push(res.id);
    res.idPath = paths.join(':');
    if (res.children && res.children.length) {
      res.children = injectNavArray(res.children, paths);
    }
    result.push(res);
  }
  return result;
}

function injectNavMap(data, map, path = []) {
  for (let i = 0, j = data.length; i < j; i++) {
    const id = data[i].id;
    const paths = path.slice();
    paths.push(id);
    if (data[i].children && data[i].children.length) {
      map[paths.join(':')] = {
        icon: data[i].icon,
        name: data[i].name
      };
      injectNavMap(data[i].children, map, paths);
    } else {
      map[paths.join(':')] = {
        icon: data[i].icon,
        name: data[i].name,
        link: data[i].link
      }
    }
  }
}