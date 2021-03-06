const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const { TampermonkeyWebpackPlugin } = require('tampermonkey-webpack-plugin');
const { version, author, source, license } = require('./package.json');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: { filename: 'index.js' },
  plugins: [
    new TampermonkeyWebpackPlugin({
      minAlignSpace: 2,
      header: {
        author,
        name: ['NUISTHealthReport', ['zh', '南京信息工程大学每日健康申报']],
        source,
        version,
        license,
        include: 'http://i.nuist.edu.cn/qljfwapp/sys/lwNuistHealthInfoDailyClock/*',
        icon: 'https://github.githubassets.com/images/icons/emoji/unicode/1f389.png',
        grant: ['unsafeWindow', 'GM_setValue', 'GM_setValue', 'GM_xmlhttpRequest'],
      },
    }),
  ],
  devServer: {
    hot: false,
    allowedHosts: 'all',
    static: {
      directory: path.resolve(__dirname, 'dist'),
      publicPath: 'http://localhost:4000/',
    },
    compress: true,
    port: 4000,
    host: 'localhost',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
  },
});
