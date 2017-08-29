const path = require('path');
const webpack = require('webpack');

module.exports = {

    entry: '',
    output: {
        path: path.resolve(__dirname, "dist"),

    },
    module: {

    },
    resolve: {
        extensions: ['', '.ts', '.js']
    }
}