const path = require('path')
module.exports = {
    devServer: { proxy: 'http://localhost:8000' },
    outputDir: path.resolve(__dirname,'../laravel/public/dist'),
    publicPath:'/dist',
    indexPath: path.resolve(__dirname,'../laravel/resources/views/index.html')
  }