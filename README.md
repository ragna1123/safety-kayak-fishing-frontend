# safety-kayak-fishing-frontend

# 画面一覧

## ユーザー関連の画面

### 1. ユーザー登録画面 (`/register`)

- 新規ユーザーがアカウントを作成できる画面。
- 必要な要素: ユーザー名、メールアドレス、パスワード入力フィールド。

### 2. ログイン画面 (`/`)

- ユーザーがアプリにログインするための画面。
- 必要な要素: メールアドレスとパスワード入力フィールド、ログインボタン。

## メイン機能の画面 (左右に分割して各コンソールを表示)

### 3. マップ画面/ホームコンソール (`/home`)

- アプリのメインとなる画面。
- 必要な要素: 出船予定の一覧、天気予報へのリンク。

### 4. マップ/お気に入り一覧 (`/favorite`)

- お気に入り一覧画面。
- 必要な要素: お気に入り一覧(地点名、説明、週間天気情報)。

### 5. マップ/天気情報画面 (`/location`)

- 選択した地点または予定に関連する天気情報の詳細を表示する画面。
- 必要な要素: 気温、風速・風向、波の高さ、潮の状態表示。

### 6. 出船予定作成画面/天気情報画面 (`/trip/register`)

- 出船予定を登録する画面。
- 必要な要素: 日時、地点選択、詳細情報入力フィールド。

### 7. マップ/出船予定一覧画面 (`/trip`)

- 出船予定一覧を表示する画面。
- 当日の天気情報を表示。

### 8. 出船予定編集 (`/trip/:id/edit`)

- 日時の編集ができる画面。
- 必要な要素:登録している日時

### 9. マップ/出船中天気詳細確認 (`/trip/:id`)

- 出船中の場所の天気詳細確認。
- 必要な要素: 気温、風速・風向、波の高さ、潮の状態表示。

### 10. マップ/帰投報告画面 (`/trip/:id/return`)

- 帰投報告の詳細を記入する画面。

## 追加機能の画面

### 11. 出船履歴画面 (`/trip/history`)

- 過去の出船履歴を表示する画面。
- 各出船予定と関連する天気データの詳細表示。

### 12. 出船履歴詳細画面 (`/trip/history/:id`)

- 過去の出船履歴詳細を表示する画面。

### 13. 緊急連絡先管理画面 (`/emergency`)

- 緊急連絡先を管理する画面。
- 連絡先の名前、関係、電話番号、メールアドレスの表示。
-

### 14. 緊急連絡先登録画面 (`/emergency/register`)

- 緊急連絡先を登録する画面。
- 連絡先の名前、関係、電話番号、メールアドレスの入力フィールド。
-

### 15. マイページ (`/profile`)

- ユーザー情報を管理する画面。
- 名前、メールアドレス、の表示。
-

### 16. 緊急連絡先登録画面 (`/profile/edit`)

- 緊急連絡先を編集する画面。
- 名前、メールアドレス、パスワードの再設定の入力フィールド。

### 17. フィードバック送信画面 (`/feedback`)

- フィードバックを送信する画面。
- テキスト入力エリアと送信ボタンを含む。
