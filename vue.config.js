const webpack = require('webpack')
module.exports = {
  configureWebpack: {
    devServer: {
      disableHostCheck: true
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',

        jQuery: 'jquery',
        'windows.jQuery': 'jquery'
      })
    ]
  }
}
