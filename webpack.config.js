const path = require('path')
const webpack = require('webpack')
const  VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {   //  == return
    // 入口
    entry: './src/main.js',
    // 出口
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
    },
    devServer:{
        open:true,
        port:8080,
        contentBase:"./src/",
        hot:true
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin()
    ],
      // 使用第三方的编译工具
      module:{
          rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            {
                     test: /\.(png|svg|jpg|gif)$/,
                       use: [
                         {   // vue-cli
                           loader:'file-loader',
                           options:{
                             publicPath:'./images',
                             name:"14.png"
                           }
                         }
                       ]
            },
            {test:/\.vue$/ ,use:['vue-loader']}
            
        ]
      }
  };