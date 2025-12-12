const path = require('path');

module.exports = {
    entry: './components/output-types/default.jsx',
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.js', '.jsx', '.mjs', '.json'],
        fullySpecified: false,
    },
    module: {
        rules: [
            {
                // Procesa TODOS los archivos .mjs de node_modules con babel-loader
                // Esto es necesario para paquetes modernos que solo exportan módulos ES
                test: /\.mjs$/,
                include: /node_modules/,
                type: 'javascript/auto',
                resolve: {
                    fullySpecified: false,
                },
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                modules: 'auto',
                            }],
                            '@babel/preset-react'
                        ]
                    }
                }
            },
            {
                // Aplica el loader a archivos que terminan en .js, .jsx, .mjs
                test: /\.(js|jsx|mjs)$/,
                // Excluye node_modules (los .mjs ya se procesan arriba)
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                modules: 'auto',
                            }],
                            '@babel/preset-react'
                        ]
                    }
                }
            }
        ]
    }
};