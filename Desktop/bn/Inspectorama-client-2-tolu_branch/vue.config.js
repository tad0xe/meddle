module.exports = {
  runtimeCompiler: true,
  lintOnSave: true,
  devServer: {
    disableHostCheck: true,
    historyApiFallback: true
  },
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(args => {
        args.compilerOptions.whitespace = 'preserve'
      })
  },
  css: { 
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/index.scss";`
      }
    }
  }
}