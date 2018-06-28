const ExtractTextPlugin = require('extract-text-webpack-plugin');
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  vue, less, css
};

function cssLoader() {
  return {
    loader: 'css-loader',
    options: {
      minimize: true,
      sourceMap: !isProd
    }
  }
}

function styleLoader() {
  return {
    loader: 'vue-style-loader',
    options: {
      sourceMap: !isProd
    }
  }
}

function lessLoader() {
  return {
    loader: 'less-loader',
    options: {
      sourceMap: !isProd
    }
  }
}

function postCssLoader() {
  return {
    loader: 'postcss-loader',
    options: {
      sourceMap: !isProd
    }
  }
}

function cssBlock(isVue) {
  const devArray = [cssLoader()];
  const proArray = [styleLoader(), cssLoader()];
  
  if (!isVue) {
    devArray.push(postCssLoader());
    proArray.push(postCssLoader());
  }
  
  return isProd
    ? ExtractTextPlugin.extract({
      use: devArray,
      fallback: styleLoader()
    })
    : proArray
}

function lessBlock(isVue) {
  const devArray = [cssLoader(), lessLoader()];
  const proArray = [styleLoader(), cssLoader(), lessLoader()];
  
  if (!isVue) {
    devArray.splice(1, 1, postCssLoader(), devArray[1]);
    proArray.splice(2, 1, postCssLoader(), proArray[2]);
  }
  
  return isProd
    ? ExtractTextPlugin.extract({
        use: devArray,
        fallback: styleLoader()
      })
    : proArray
}

function css() {
  return {
    test: /\.css$/,
    use: cssBlock()
  }
}

function less() {
  return {
    test: /\.less$/,
    use: lessBlock()
  }
}

function vue() {
  return {
    test: /\.vue$/,
    loader: "vue-loader",
    options: {
      preserveWhitespace: false,
      loaders: {
        css: cssBlock(true),
        less: lessBlock(true)
      }
    }
  }
}