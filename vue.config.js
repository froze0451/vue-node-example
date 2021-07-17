module.exports = {
  chainWebpack: config => {
    config.module.rules.delete("svg");
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: [
            'babel-loader',
            'vue-svg-loader',
          ],
        },
      ],
    }
  },
}