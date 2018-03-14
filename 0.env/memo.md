# 設定メモ
## npmの初期
npm init
## webpackインストール
npm i -D webpack webpack-cli
## ディレクトリ構成
srcを作りindex.jsを作製
読み込みテスト様にsub.jsを作製
index.js

```
// import 文を使って sub.js ファイルを読み込む。
import { hello } from './sub';

// sub.jsに定義されたJavaScriptを実行する。
hello();
```

sub.js

```
// import 文を使って sub.js ファイルを読み込む。
import { hello } from './sub';

// sub.jsに定義されたJavaScriptを実行する。
hello();
```

## npxを実行
npx webpack
distのディレクトリとmain.jsが出力される確認
テスト用のindex.htmlを作製してリンクしておく

## pakage.jsonとwebpack.config.js追記
```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",
```

```
module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: 'development',

  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: `./src/index.js`,

  // ファイルの出力設定
  output: {
    // 出力ファイル名
    filename: 'main.js'
  }
};
 ```

追記してビルドできるか確認

## ビルド
npm run build
エラーが出ないか確認

## テストサーバ設定
npm i -D webpack-dev-server
追記
```
{
  "name": "0.env",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",
    "start": "webpack-dev-server"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^4.1.1",
    "webpack-cli": "^2.0.12",
    "webpack-dev-server": "^3.1.1"
  }
}
```

```
module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: 'development',

  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: `./src/index.js`,

  // ファイルの出力設定
  output: {
    // 出力ファイル名
    filename: 'main.js'
  },
  devServer: {
    contentBase: 'dist',
    open: true,
    port: 3003
  }
};
```

npm run start
でスタート

## babelインストール
npm i -D babel-core babel-loader babel-preset-env

```
module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: 'development',

  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: `./src/index.js`,

  // ファイルの出力設定
  output: {
    // 出力ファイル名
    filename: 'main.js'
  },
  devServer: {
    contentBase: 'dist',
    open: true,
    port: 3003
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
                // env を指定することで、ES2017 を ES5 に変換。
                // {modules: false}にしないと import 文が Babel によって CommonJS に変換され、
                // webpack の Tree Shaking 機能が使えない
                ['env', { 'modules': false }]
              ]
            }
          }
        ]
      }
    ]
  }
};
```

## jqueryインストール
npm install -S jquery
rulesの部分でbabel-loaderを指定し、excludeでnode_modulesフォルダーを除外します。

```
module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: 'development',

  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: `./src/index.js`,

  // ファイルの出力設定
  output: {
    // 出力ファイル名
    filename: 'main.js'
  },
  devServer: {
    contentBase: 'dist',
    open: true,
    port: 3003
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
                // env を指定することで、ES2017 を ES5 に変換。
                // {modules: false}にしないと import 文が Babel によって CommonJS に変換され、
                // webpack の Tree Shaking 機能が使えない
                ['env', { 'modules': false }]
              ]
            }
          }
        ]
      }
    ],
    // node_modules は除外する
    exclude: /node_modules/,
  }
};
```

## Cssローダー
npm i -D　style-loader css-loader
index.jsにimport "./style.css"
{ test: /\.css$/, use: ['style-loader', 'css-loader'] },

## boostrpnpm
npm install -D boostrap
install -D popper.js

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./style.css"
import "bootstrap"
import "popper.js"
