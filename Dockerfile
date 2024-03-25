# ベースイメージとしてNode.jsの公式イメージを使用
FROM node:21.5

# アプリケーションの作業ディレクトリを設定
WORKDIR /myapp

# package.jsonとpackage-lock.jsonをコンテナ内の作業ディレクトリにコピー
COPY package.json package-lock.json ./

# 環境変数を設定（開発環境）
ENV NODE_ENV=development

# package.jsonに定義された依存関係をインストール
RUN npm install

# 作業ディレクトリ内のすべてのファイルをコンテナにコピー
COPY . .

# コンテナが起動した際に実行されるコマンドを設定（アプリケーションの起動コマンド）
CMD ["npm", "start"]
