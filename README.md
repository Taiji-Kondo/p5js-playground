# p5js-playground

## プロジェクト概要
p5js-playground は TypeScript と Vite を用いて p5.js のスケッチを素早く試作・共有するためのプレイグラウンドです。ブラウザ上で複数のスケッチを切り替えながら確認でき、型安全な開発体験を提供します。

## 主な特徴
- Vite による高速なホットリロードとビルド
- TypeScript + 型定義 (@types/p5) を活用した安全なスケッチ実装
- クエリパラメータ（例: `?sketch=grid`）によるスケッチ切り替え UI

## セットアップ
1. Node.js 18 以上を推奨します。
2. リポジトリをクローン後、依存関係をインストールします。
   ```bash
   pnpm install
   ```

## 開発・ビルド
- 開発サーバー: `pnpm dev`（http://localhost:5173 に自動起動）
- 本番ビルド: `pnpm build`（成果物は `dist/`）
- ビルドプレビュー: `pnpm preview`
- 型チェックのみ: `pnpm tsc --noEmit`

## ディレクトリ構成
```text
.
├─ src/
│  ├─ main.ts            // スケッチ選択 UI と p5 インスタンス初期化
│  └─ sketches/
│     ├─ index.ts        // スケッチの登録とデフォルト設定
│     ├─ base.ts         // ベースとなる最小スケッチ
│     └─ grid.ts         // ノイズベースのグリッド例
├─ index.html             // エントリ HTML
├─ package.json           // スクリプトと依存関係
└─ tsconfig.json          // TypeScript 設定
```

## 新しいスケッチの追加手順
1. `src/sketches/<name>.ts` を作成し、`p: p5` を受け取る関数を `default` エクスポートします。
2. `src/sketches/index.ts` にインポートと `sketches` への登録を追加します。
3. ブラウザで `?sketch=<name>` を指定して動作を確認します。

## テストと動作確認
自動テストはまだ導入していないため、`pnpm tsc --noEmit` で型エラーがないことを確認し、ブラウザで動作を目視チェックしてください。ビルド後は `pnpm preview` で本番想定の挙動を最終確認します。

## コントリビューション
貢献する際はコミットメッセージを簡潔な命令形でまとめ、PR には変更意図とテスト結果を記載してください。詳細なコントリビューション手順は `AGENTS.md`（Repository Guidelines）を参照してください。
