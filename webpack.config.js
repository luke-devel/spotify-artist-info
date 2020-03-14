const path = require("path");

module.exports = {
  entry: "./index.js",
  devtool: "inline-source-map",
  mode: "development",
  // the webpack config just works
  // SEE https://github.com/webpack/webpack/issues/1599
  target: "node",
  node: {
    __dirname: false,
    __filename: false
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.ts$/,
        loader: "tslint-loader",
        enforce: "pre",
        options: {
          fix: true,
          tsConfigFile: "tsconfig.json"
        }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  externals: {
    puppeteer: 'require("puppeteer")',
    fs: 'require("fs")'
  }
};
