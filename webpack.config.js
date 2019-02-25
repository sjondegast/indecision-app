const path = require('path');
const CSSExtract = require('extract-text-webpack-plugin');

module.exports = (env) => {
  const isProduction = env === 'production';

  return {
    entry: "./src/app.js",
    output: {
      path: path.join(__dirname, "public"),
      filename: "bundle.js"
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: CSSExtract.extract({
              fallback: "style-loader",
              use: [
                {
                  loader: 'css-loader',
                  options: {
                    sourseMap: true
                  }
                },
                {
                  loader: 'sass-loader',
                  options: {
                    sourseMap: true
                  }
                }
              ]
            })
        }]
    },
    plugins: [
      new CSSExtract('styles.css')
    ],
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, "public")
    }
  };
};
