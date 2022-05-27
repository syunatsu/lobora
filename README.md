# アプリケーション名
LOBOLA cafe

# アプリケーション概要
料理のレシピを投稿し、料理、お菓子、飲み物の別で管理、閲覧できる。

# URL
https://lobora.herokuapp.com/

# テスト用アカウント
- Basic認証パスワード：yukiohira
- Basic認証ID：nattyanlove0813
- メールアドレス：yuki@mail
- パスワード：111111

# 利用方法

### トップページ
- トップページは、ヘッダー、メイン、フッターという構成
- ヘッダーのNEW RECIPEから新しいレシピの投稿が可能
- ヘッダーもしくはメイン中段のリンクから食べ物、お菓子、飲み物のそれぞれのページへ遷移可能

### レシピ投稿
- いずれかのページのヘッダーのNEW RECIPEからレシピの新規投稿が可能
- 入力項目は全て必須である
- 値段については、表示をカフェのメニュー風にするための飾りである
- 全ての項目に入力したら送信する
- 入力した内容は、FOOD、DOLCE、DRINKのカテゴリ別のページ最下部に一覧表示される

# アプリケーションを作成した背景
キッチンの調味料がまとめてあるあたりにふと目をやると、そこには古びた１冊のノートがあった。<br>
気になって中を見てみると、隅から隅までびっしりと料理やお菓子のレシピが書いてある。これは<br>
妻がコツコツと書き溜めたレシピノートであったのだ。しかし最初の方のページは、じが薄れてい<br>
るし、所々汚れているため見にくい箇所もある。これは紙ではなくデータで管理してあげたい！と<br>
思い、このアプリケーションを作成するに至った。

# 洗い出した要件（要件定義シート）
https://docs.google.com/spreadsheets/d/1ILvh_HevQeTyDnQOVs6UzDRJZOy3ONZCAIsOV7pqgMU/edit#gid=982722306

# 実装した機能についての画像やGIFおよびその説明

### トップページ
[![Image from Gyazo](https://i.gyazo.com/e2d6abb338e3c42407d7c0c48427faad.gif)](https://gyazo.com/e2d6abb338e3c42407d7c0c48427faad)

トップページは単調にならないよう、多くの要素に動きをつけた。ヘッダーは利便性を考え、上部に固定している。

### メニューの表示ページ
[![Image from Gyazo](https://i.gyazo.com/fadaf00c6bf1e9f806186d191f86a64d.gif)](https://gyazo.com/fadaf00c6bf1e9f806186d191f86a64d)

表示ページもトップページと同様に、ほとんどの要素に動きがついている。

### 新規投稿
[![Image from Gyazo](https://i.gyazo.com/a51c1c4ef2ba5bef155adb233f1dc081.gif)](https://gyazo.com/a51c1c4ef2ba5bef155adb233f1dc081)

新規投稿はページ右下の＋マークから、どのページからでも行うことができる。新規投稿ページへ遷移するのではなく、モーダルウィンドウが立ち上がる。投稿完了後は、投稿したメニューの表示ページへ遷移する。

### 編集機能
[![Image from Gyazo](https://i.gyazo.com/941745c66afbdac8b436755f2ab93a80.gif)](https://gyazo.com/941745c66afbdac8b436755f2ab93a80)

投稿したメニューをクリックすることで、詳細ページへ遷移する。詳細ページには、メニューの画像、材料、作り方が記載されており、右下の青いボタンから内容を編集することができる。編集についてもモーダルウィンドウです。

### 削除機能
[![Image from Gyazo](https://i.gyazo.com/7c7017141ebc4ae5eb8f812bb4cf2846.gif)](https://gyazo.com/7c7017141ebc4ae5eb8f812bb4cf2846)

詳細ページの編集ボタンの隣に配置している赤いボタンから、メニュー削除できる。削除前にはアラートが出るので、誤操作防止に配慮している。
# 実装予定の機能
- 検索機能
- いいね(お気に入り)機能
- レスポンシブ対応

# データベース設計
[![Image from Gyazo](https://i.gyazo.com/692764841d928327deeda859517f2829.png)](https://gyazo.com/692764841d928327deeda859517f2829)

# 画面遷移図
[![Image from Gyazo](https://i.gyazo.com/fc3667a1f2017f6b7a7a06ebbb814e18.png)](https://gyazo.com/fc3667a1f2017f6b7a7a06ebbb814e18)

# 開発環境
- フロントエンド
- バックエンド
- インフラ
- テスト
- テキストエディタ
- タスク管理

# 工夫したポイント
- レシピを保存しておくことが目的であるので、余計な機能をつけない
- 見た目が素敵なページにしたかったため、各配置やアニメーションをつけた
- モデルやコントローラーを多数作成して複雑にならないように、menusコントローラーの<br>
  indexアクションのみでFOOD、DOLCE、DRINKページへ遷移できるようにした
- 新規投稿ページは、チープなイメージにならないようにモーダルウィンドウで実装した
