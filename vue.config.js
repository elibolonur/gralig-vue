const InjectPlugin = require('webpack-inject-plugin').default

module.exports = {
  lintOnSave: false,
  publicPath: '/gralig-vue',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "gralig/scss/abstracts/all.scss";
          @import "gralig/scss/modes/modes.scss";
          @import "gralig/scss/grid/all.scss";
        `,
      },
    },
  },
  configureWebpack: {
    plugins: [
      new InjectPlugin(() => {
        // Import all.scss file only once through JS entry
        return "import 'gralig/scss/base/all.scss'"
      }),
    ],
  },
}
