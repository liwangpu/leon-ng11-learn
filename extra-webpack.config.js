// const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

// module.exports = (config, options) => {
//   const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

//   // Feel free to modify this webpack config however you'd like to
//   return singleSpaWebpackConfig;
// };


const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;
const { merge } = require('webpack-merge');
// const { name } = require('./package');
const name = 'app1';

module.exports = (angularWebpackConfig, options) => {
  console.log('cfg:',angularWebpackConfig);
  const singleSpaWebpackConfig = singleSpaAngularWebpack(angularWebpackConfig, options);
  singleSpaWebpackConfig.entry.main = [...new Set(singleSpaWebpackConfig.entry.main)];
  const singleSpaConfig = {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd',
    },
    externals: {
      'zone.js': 'Zone',
    },
  };
  const mergedConfig = merge(singleSpaWebpackConfig, singleSpaConfig);
  return mergedConfig;
};
