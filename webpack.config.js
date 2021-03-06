module.exports = {
  entry: {
    app: './src/app.tsx'
  },
  output: {
    path: 'dist',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.tsx', '.ts', '.js', '.css']
  },
  //externals: {
  //  react: 'React',
  //  'react-dom': 'ReactDOM'
  //},
  module: {
    loaders: [
      { 
        test: /\.ts(x?)$/, 
        loader: 'ts-loader' 
      }, {
        test: /\.css$/,
        loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' 
      }
    ]
  },
  devServer: {
    port: 8081
  }
};
