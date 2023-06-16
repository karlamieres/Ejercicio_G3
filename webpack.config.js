const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),   
        filename: 'bundle.js'
    },
    module : {
        rules: [
            {
                test: /\.js$/, //expresiones regulares, forma de encontrar patrones dentro de textos
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}