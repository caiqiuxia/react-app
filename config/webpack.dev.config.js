const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 生成html模板

const resolve = (dir) => path.join(__dirname, '..', dir);

module.exports = {
  mode: 'development', // webpack4新增属性，默认返回production,提供一些默认配置，例如cache:true
  devtool: 'cheap-module-eval-source-map',
  // source-map每个module生成对应的map文件
  // eval 每一个module模块执行eval，不生成map文件，在尾部生成一个sourceURL对应前后关系，所以更快
  // cheap 列信息 VLQ编码
  // module 包含了模块之间的sourcemap
  entry: {
    home: './src/index.js', // 设置入口文件
  },
  output: {
    filename: '[name].js', // 生成的js文件的名字
    path: resolve('dist'), // 生成的js存放目录
  },
  module: { // 配置loader
    rules: [
      {
        test: /\.m?js$/,
        include: resolve('src'), // 只解析src下面的文件,不推荐用exclude
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]--[hash:base64:5]'
              },
              importLoaders: 2
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass')
            }
          }
        ]
      },
      {
        test: /\.css$/,
        include: [
          /node_modules[\\/]antd/,
          /node_modules[\\/]normalize\.css/,
          /node_modules[\\/]braft-editor/,
          /iconfont\.css$/
        ],
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: false
            }
          }
        ]
      }
    ],
  },
  devServer: {
    contentBase: resolve('dist'),  // 设置服务器从那个目录提供内容，默认当前 推荐使用绝对路径。
  },
  plugins: [
      new HtmlWebpackPlugin({
        filename: resolve('/dist/index.html'), // 生成的html文件存放的地址和文件名
        template: resolve("/index.html"), // 基于index.html模板进行生成html文件
        vendor: './vendor/vendor.dll.js',
      }),
    new webpack.DllReferencePlugin({
      context: __dirname, // 跟dll.config里面DllPlugin的context一致
      manifest: require(path.join(__dirname, '..', 'dist', '/vendor/manifest.json')),
    }),
  ]
}

