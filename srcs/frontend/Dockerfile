# ベースイメージとしてNode.jsを使用
# versionが22.9.0なのは、ローカルのnodeのversionが22.9.0だったから。
FROM node:22.9.0

# ビルド引数としてPORTを定義（デフォルト値を設定）
ARG PORT
ENV PORT=${PORT}

WORKDIR /app

# package.jsonとpackage-lock.jsonをコピー
COPY ./my-app/package*.json ./

# 依存関係をインストール
RUN npm install

COPY ./my-app/ .

# ポートを公開
EXPOSE ${PORT}

# アプリケーションを起動
#CMD ["npx", "next", "dev"]
CMD ["sh", "-c", "npx next dev -p ${PORT}"]