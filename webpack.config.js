const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var obj={
entry: './main.js',
output: {
path: path.join(__dirname, '/bundle'),
filename: 'index_bundle.js'
},
module: {
rules: [
{
test: /\.jsx?$/,
test: /\.(js)$/,
exclude: /node_modules/,
use: {
loader: "babel-loader",
}
},
{
test: /\.css$/,
use: [
'style-loader',
'css-loader'
]
},
{
test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
loader: 'url-loader?limit=100000'
},

]
},
devServer: {
inline: true,
port: 8080,
historyApiFallback: true,
disableHostCheck: true
},
plugins:[
new HtmlWebpackPlugin({
template: './index.html'
})
]
};

module.exports=obj;