# 8月31日まで月額50円の表示版

このZIPは、顧客に見えるトップページの表示だけを変更します。

## 上書きするファイル

```text
app/page.tsx
```

## 変更していないもの

次のファイルは変更していません。

```text
app/api/checkout/route.ts
app/components/EmbeddedCheckoutSection.tsx
app/return/page.tsx
app/layout.tsx
app/globals.css
package.json
package-lock.json
```

Stripeへ渡すPrice ID、課金金額の切り替え処理、環境変数は変更していません。

## ページに表示する内容

```text
2026年8月31日23:59（日本時間）までの新規登録：月額50円
2026年9月1日以降の新規登録：月額1,000円
```

口コミ6件と `const features` の6件は保持しています。

## GitHubへの反映

GitHubのWeb画面で `app/page.tsx` を上書きした場合は、
最後に `Commit changes` を押してください。

Codespacesの場合は次を実行します。

```bash
npm run build
git add app/page.tsx
git commit -m "Add early registration pricing message"
git push
```

## 重要

この段階では画面表示だけです。

実際にStripeが請求する金額は、現在 `STRIPE_PRICE_ID` に設定されているPrice IDの金額です。
2026年9月1日以降に月額1,000円へ自動で切り替わる実装にはなっていません。

公開を続ける場合は、期限までにStripe側のPrice IDと切り替え処理を別途実装してください。
