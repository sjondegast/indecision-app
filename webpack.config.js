const path = require("path");

module.exports = (env) => {
  return {
    entry: "./src/app.js",
    output: {
      path: path.join(__dirname, "public"),
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          test: /\.s?css$/,
          use: ["style-loader", "css-loader", "sass-loader"]
        }
      ]
    },
    mode: env.production ? "production" : "development",
    devtool: env.production ? "source-map" : "cheap-module-eval-source-map",
    devServer: {
      contentBase: path.join(__dirname, "public")
    }
  };
};
