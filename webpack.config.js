// モジュールをバンドルする設定
module.exports = {
  mode: "development",

  entry: "./src/box.js",
  output: {
    filename: "main.js",
    path: __dirname + "/dist"
  },
  module: {
    rules: [
      {
        // 拡張子 .js の場合
        test: /\.js$/,
        use: [
          {
            // Babel を利用する
            loader: 'babel-loader',
            // Babel のオプションを指定する
            options: {
              presets: [
                // プリセットを指定することで、ES2019 を ES5 に変換
                '@babel/preset-env',
                // React の JSX を解釈
                '@babel/react'
              ]
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: "./dist/"
  }
};