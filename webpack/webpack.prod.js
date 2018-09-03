const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const uglify = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: "js/[name].[chunkhash:16].js",
  },
  module: {
    rules:
        [
            {
                test: /\.(css)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                        }
                    },
                    {
                        loader: 'css-loader',
                    }
                ]
            },
            {
                test: /\.(scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                        }
                    },
                    {
                        loader: 'css-loader',
                    }, {
                        loader: 'sass-loader',
                    }
                ]
            }
        ]
  },
  plugins:[
    new CleanWebpackPlugin(['../dist'], { allowExternal: true }),
    new uglify(),  //js压缩插件
    new HtmlWebpackPlugin({
        minify:{ //是对html文件进行压缩
            removeAttributeQuotes: true  //removeAttrubuteQuotes是却掉属性的双引号。
        },
        hash:true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
        template:'./src/index.html' //是要打包的html模版路径和文件名称。
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
      chunkFilename: 'css/[id].[hash].css',
    }),
    new OptimizeCssAssetsPlugin({
        assetNameRegExp:  /\.css\.*(?!.*map)/g,
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }],
        },
        canPrint: true
      }),
  ],
});