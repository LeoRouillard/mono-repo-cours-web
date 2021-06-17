const path = require('path')

module.exports = {
    devServer: { 
        proxy: {
            '/api': {
                target: 'http://localhost:8000',
                changeOrigin: true
            }
        }
    },
    outputDir: path.resolve(__dirname,'../laravel/public'),
    publicPath:'./dist',
    indexPath: path.resolve(__dirname,'../laravel/resources/views/index.html')
}