const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    css: {
      loaderOptions: {
        postcss: {
          plugins: [
            autoprefixer(),
            pxtorem({
              rootValue: 16,
              propList: ['*']
            })
          ]
        }
      }
    }
}
