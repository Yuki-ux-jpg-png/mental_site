# 決済欄を上へ移動した版

対象リポジトリ：

```text
https://github.com/Yuki-ux-jpg-png/mental_site
```

## 新しい表示順

```text
1. ファーストビュー
2. 短い安心材料
3. Stripe決済
4. 口コミ
5. const features
6. FAQ
7. 最後の参加案内
```

口コミ6件と `const features` 6件は保持しています。

## 上書きするファイル

ZIP内の次の6ファイルを、GitHub Codespaces上の同じ場所へ上書きします。

```text
app/page.tsx
app/globals.css
app/layout.tsx
app/components/EmbeddedCheckoutSection.tsx
app/api/checkout/route.ts
app/return/page.tsx
```

既存画像は削除しません。

```text
public/hero.png
public/threads-card.png
```

`package.json` と `package-lock.json` は変更不要です。

## GitHubのWeb画面から上げる場合

ファイルをアップロードまたは編集したあと、画面下の `Commit changes` を押します。
この場合、ターミナルで `git push` は不要です。

## Codespacesから上げる場合

ターミナルでビルド確認：

```bash
npm run build
```

問題なければ：

```bash
git add app/page.tsx app/globals.css app/layout.tsx app/components/EmbeddedCheckoutSection.tsx app/api/checkout/route.ts app/return/page.tsx
git commit -m "Move Stripe checkout higher on homepage"
git push
```

## Vercel環境変数

次の4つが必要です。

```text
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
STRIPE_SECRET_KEY
STRIPE_PRICE_ID
SITE_URL
```

GitHubとVercelが連携済みなら、GitHubへのコミット後に自動デプロイされます。
