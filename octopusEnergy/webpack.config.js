var path = require("path");
var PUB_DIR = path.resolve(__dirname, "public");
var SRC_DIR = path.resolve(__dirname, "src");

console.log('wroeohjsidfasdg', PUB_DIR, SRC_DIR);

var config = {
    entry: SRC_DIR + "/index.js",
    output: {
        path: PUB_DIR,
        filename: "bundle.js",
    },
    module: {
        rules: [{
            test: /\.js?/,
            exclude: /node_modules/,
            loader: "babel-loader",
        }],
    },
    devServer: {
        contentBase: PUB_DIR,
        historyApiFallback: true
    },
    mode: 'development',
};
module.exports = config;