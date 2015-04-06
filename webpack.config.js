module.exports = {
    entry: "./entry.js",
    output: {
        path: 'build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'webpack-traceur?runtime&sourceMaps&experimental' }
        ]
    }
};
