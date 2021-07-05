module.exports = {
  lintOnSave: false,
  publicPath: '/gralig-vue',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "gralig/scss/abstracts/all.scss";
          @import "gralig/scss/modes/modes.scss";
          @import "gralig/scss/base/all.scss";
          @import "gralig/scss/grid/all.scss";
        `,
      },
    },
  },
}
