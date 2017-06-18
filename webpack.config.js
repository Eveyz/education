module.exports = {
  entry: './client.js',
  output: {
    filename: "public/bundle.js"
  },
  watch: true,
  module: {
    loaders: [
      { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.jsx$/, loader: "babel-loader", exclude: /node_modules/ }
    ]
  }
};
