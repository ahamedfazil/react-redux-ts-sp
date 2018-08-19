const path = require("path");
// const SPSaveWebpackPlugin = require("spsave-webpack-plugin");
const webpackMerge = require("webpack-merge");
const webpack = require("webpack");
const config = require("./webpack.config.js");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const { URL, targetPath } = require("./webpack.env.js");
// How to use environment variables:
// https://webpack.js.org/guides/environment-variables/
module.exports = env => {
  let environment = env || "test";
  environment = environment.ENV || "test";

  return webpackMerge(config(), {
    devtool: false,
    module: {
      // String replacements for TEST, QA, PROD builds:
      // https://www.npmjs.com/package/@clayne/string-replace-loader
      rules: [
        {
          test: /\.(js|ts|tsx)$/i,
          use: [
            {
              loader: "string-replace-loader",
              options: {
                multiple: [
                  {
                    search: "http://localhost:8080",
                    replace: URL[environment].siteUrl
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(["dist"]),
      new ExtractTextPlugin({
        filename: "[name].[hash].bundle.css"
      }),
      new UglifyJSPlugin({
        sourceMap: true,
        // mangle: {
        //   screw_ie8: true,
        //   keep_fnames: true
        // },
        // compress: {
        //   screw_ie8: true,
        //   warnings: false
        // },
        // comments: false
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new webpack.EnvironmentPlugin({
        NODE_ENV: environment,
        DEBUG: false
      })
      // new SPSaveWebpackPlugin({
      //   coreOptions: {
      //     checkin: false,
      //     // checkinType: 1,
      //     siteUrl: URL[environment].siteUrl
      //   },
      //   credentialOptions: {
      //     username:  credentials[environment].username,
      //     password:  credentials[environment].password,
      //     domain:  credentials[environment].domain
      //     /* See https://github.com/s-KaiNet/node-sp-auth#params for authentication options */
      //   },
      //   fileOptions: {
      //     folder: "Style Assets/dist"
      //   }
      // })
    ],
    output: {
      filename: "[name].[hash].bundle.js",
      path: path.resolve(__dirname, "dist"),
      publicPath: URL[environment].siteUrl + targetPath
    }
    // output: {
    //   path: path.resolve("dist"),
    //   filename: "[name].min.[hash].js",
    //   publicPath: "/"
    // }
  });
};