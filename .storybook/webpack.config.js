const path = require('path');

module.exports = async ({ config }) => {
  //styles
  config.module.rules.push(
    {
      test: /\.(scss)$/,
      use: ['sass-loader'],
      include: path.resolve(__dirname, '../'),
    },
    {
      test: /\.(svg|eot|ttf|woff|woff2|png)$/,
      loader: ['file-loader'],
      include: path.resolve(__dirname, '../'),
    }
  );

  return config;
};
