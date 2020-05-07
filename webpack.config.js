const path = require('path'); // De Node, nos ayudara con las rutas de donde nos estamos moviendo en el proyecto.
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Para trabajar con HTML
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js', // Donde esta mi archivo principal o el Core
    output: { // Este sera el output para cuando el archivo este listo para production, se guardara el archivo main.js con todo traspilado a ese path
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    // extensiones del proyecto
    resolve: {
        extensions: ['.js'], // Solo utilizaremos .js asi que solo le pasamos .js
    },
    // Modulo para que con el uso de babel, sea compatible con todos los navegadores, transpilando nuestro codigo js.
    module: {
        // reglas
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/, // Excluimos todos los archivos .js de la carpeta node_modules
                use: { // configuracion que utilizaremos.
                    loader: 'babel-loader',
                }
            }
        ]
    },
    // Los plugins que utilizaremos de HTML
    plugins: [
        new HtmlWebpackPlugin( // Inyectar el HTML a la carpeta de production 'dist'
            {
                inject: true,
                template: './public/index.html',
                filename: './index.html',
            }
        ),
        new CopyWebpackPlugin ([{ // Inyectar los estilos css a la carpeta de production 'dist'
            from: './src/styles/styles.css',
            to: '',
        }])
    ]
}