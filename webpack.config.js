const path = require('path');

module.exports = {
    // Arquivo JS de entrada da aplicação
    entry: './src/index',
    // Configurações do Babel
    module: {
        rules: [{
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }]
    },
    resolve: {
        extensions: ['*', '.js']
    },
    // Definições dos arquivos de saída
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    // Configurações do servidor
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true
    }
}