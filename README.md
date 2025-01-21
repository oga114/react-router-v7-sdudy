# 概要
react-router-v7検証用のリポジトリです。
他、気になったライブラリの検証やプログラミング学習などにも利用しているので、内容は雑多です。

postsはJSONPlaceholderからフェッチし検証しています。

# セットアップガイド
このリポジトリをローカル環境で動作させるための手順を以下に示します。

## 必要条件
- Node.js (推奨: 最新のLTSバージョン)
- npm または yarn


## インストール手順
リポジトリをクローンします：
~~~
git clone https://github.com/oga114/react-router-v7-study.git
cd react-router-v7-study
~~~
依存関係をインストール：
~~~
npm install
# または
yarn install
~~~
ローカルサーバーを起動：
~~~
npm start
# または
yarn start
~~~
ブラウザでターミナルに表示されるアドレスにアクセスする。

Dockerで起動：
~~~
docker build -t my-app .
docker run -p 3000:3000 my-app
~~~
