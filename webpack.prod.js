const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const { TampermonkeyWebpackPlugin } = require('tampermonkey-webpack-plugin');
const { version, author, source, license } = require('./package.json');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new TampermonkeyWebpackPlugin({
      minAlignSpace: 2,
      header: {
        author,
        name: ['NUISTHealthReport', ['zh', '南京信息工程大学每日健康申报']],
        version,
        source,
        license,
        include: 'http://i.nuist.edu.cn/qljfwapp/sys/lwNuistHealthInfoDailyClock/*',
        icon: 'https://github.githubassets.com/images/icons/emoji/unicode/1f389.png',
        grant: ['unsafeWindow', 'GM_setValue', 'GM_setValue', 'GM_xmlhttpRequest'],
      },
    }),
  ],
});
