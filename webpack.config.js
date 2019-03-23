const pkg = require('./package');
const path = require('path');
const webpack = require('webpack');
const glob = require('glob');
const CaseSensitivePlugin = require('case-sensitive-paths-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const NotifierPlugin = require('webpack-notifier');

const icons = glob.sync('./src/*.js').slice(0, 2000).reduce((accumulator, file) => { // remove slice after https://github.com/webpack/webpack/issues/7731 is solved
    const name = path.basename(file, '.js');
    accumulator[name] = file;
    return accumulator;
}, {});

const config = module.exports = {
    devtool: false,
    profile: true,
    entry: {
        index: path.resolve('./src/index.js'),
        ...icons,
    },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].js',
        library: pkg.name,
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    plugins: [
        new CaseSensitivePlugin(),
        new CleanPlugin({
            cleanOnceBeforeBuildPatterns: path.resolve('./dist'),
        }),
        new webpack.EnvironmentPlugin(['NODE_ENV']),
        new NotifierPlugin({
            title: pkg.name,
            alwaysNotify: true,
        }),
    ],
    module: {
        rules: [{
            test: /\.(js|jsx|mjs)$/i,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                },
            }],
        }],
    },
    resolve: {
        alias: {
            'prop-types': path.resolve(__dirname, './node_modules/prop-types'),
            'react': path.resolve(__dirname, './node_modules/react') ,
            'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
        },
    },
    externals: {
        'prop-types': {
            root: 'PropTypes',
            amd: 'prop-types',
            commonjs: 'prop-types',
            commonjs2: 'prop-types',
        },
        react: {
            root: 'React',
            amd: 'react',
            commonjs: 'react',
            commonjs2: 'react',
        },
        'react-dom': {
            root: 'ReactDOM',
            amd: 'react-dom',
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
        },
    },
};

if(process.env.NODE_ENV !== 'development') {
    config.optimization = {
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: true,
                terserOptions: {
                    compress: {
                        inline: false,
                    },
                    keep_fnames: true,
                    keep_classnames: true,
                },
            }),
        ],
    };
}