'use strict';


var params = {
  env: process.env.NODE_ENV || 'development'
};

// Require local webpack
var webpack = require('webpack');

// Externals plugins
var plugins = {
  bower: require("bower-webpack-plugin"),
  extText: require("extract-text-webpack-plugin"),
  svgStore:  require('webpack-svgstore-plugin'),
  cssOptimize: require('optimize-css-assets-webpack-plugin')
};

// PostCss plugins

var postCssPlugins = {
    autoprefixer: require("autoprefixer"),
    postcssImport: require('postcss-import'),
    postcssMixins: require('postcss-mixins'),
    nested: require('postcss-nested'),
    customProperties: require("postcss-custom-properties"),
    postcssMedia: require("postcss-custom-media"),
    postcssMediaNested: require("postcss-nesting"),
    posctcssFlexBugFix: require("postcss-flexbugs-fixes"),
    postcssInput: require("postcss-input-style"),
    postcssExtend: require("postcss-extend"),
    postcssObjFit: require("postcss-object-fit-images"),
    postcssNesting: require("postcss-nesting"),
    postcssGradientTransparencyFix: require('postcss-gradient-transparency-fix'),
};

module.exports = {
  context: __dirname + "/app",
  entry: './app.js',
  stats: { children: false },

  // Watcher
  watch: params.env == 'development',
  watchOptions: {
    aggregateTimeout: 50
  },

  // Resolve params
  resolve: {
    root: __dirname,
    modulesDirectories: [
      __dirname,
      __dirname + '/vendor',
      __dirname + '/node_modules'
    ],
    packageFiles: ['package.json', 'bower.json', '.bower.json'],
    extensions: ['', '.js', '.css']
  },

  resolveLoader: {
    root: __dirname,
    modulesDirectories: [__dirname + "/node_modules"]
  },

  // Output params
  output: {
    path: __dirname + '/build',
    publicPath: '/build/',
    filename: '[name].js',
    library: 'App'
  },

  // Loaders params
  module: {
    loaders: [
      {
        test: /jquery\.js$/,
        loader: 'expose?$!expose?jQuery'
      },{
            test:   /\.css$/,
            loader:  plugins.extText.extract('style-loader', '!css-loader!postcss-loader')
        }, {
        test: /\.js$/,
        exclude: /(node_modules|vendor)/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          plugins: ['transform-decorators-legacy'],
          presets: [
            require.resolve('babel-preset-es2015'),
            require.resolve('babel-preset-stage-0')
          ]
        }
      }, {
        test: /\.jpe?g$|\.gif$|\.png$|\.woff$|\.eot$|\.svg$|\.ttf$|\.wav$|\.mp3$/,
        loader: "file?name=[path][name].[ext]",
        exclude: /(icons)/
      },
      { test: /\.(svg)$/,
        loader: 'url-loader?limit=100000'
      },
    ]
  },

   postcss: function () {
       return [
           postCssPlugins.postcssImport({
               addDependencyTo: webpack
           }),
           postCssPlugins.customProperties,
           postCssPlugins.postcssMixins,
           postCssPlugins.nested,
           postCssPlugins.postcssNesting,
           postCssPlugins.postcssExtend,
           postCssPlugins.posctcssFlexBugFix,
           postCssPlugins.postcssInput,
           postCssPlugins.postcssMedia,
           postCssPlugins.postcssGradientTransparencyFix,
           postCssPlugins.autoprefixer,
           postCssPlugins.postcssObjFit
       ];
   },

    // Plugins
  plugins: [
    new plugins.extText('[name].css', {
      allChunks: true
    }),
    new plugins.svgStore(
     //=========> input path
     [
       'icons/*.svg'
     ],
     //=========> output path
     'svgSprite',
     //=========> options
    {
       name: 'sprite.svg',
       prefix: 'icon-',
       svgoOptions: {
         plugins: [
           { removeTitle: true }
         ]
       }
     }
    )
  ]
};

if (params.env == 'production') {

  module.exports.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          // don't show unreachable variables etc
          warnings:     false,
          drop_console: true,
          unsafe:       true
        }
      })
  );

  module.exports.plugins.push(

      new plugins.cssOptimize({
          cssProcessor: require('cssnano'),
          cssProcessorOptions: {
              discardDuplicates: true
          },
      })
  );
}
