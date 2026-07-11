# スマホ最適化版の反映手順

対象リポジトリ：

```text
https://github.com/Yuki-ux-jpg-png/mental_site
```

## 置き換えるファイル

ZIP内の次の6ファイルを、GitHub Codespaces上の同じ場所へ上書きしてください。

```text
app/page.tsx
app/globals.css
app/layout.tsx
app/components/EmbeddedCheckoutSection.tsx
app/api/checkout/route.ts
app/return/page.tsx
```

既存の画像はそのまま使います。削除しないでください。

```text
public/hero.png
public/threads-card.png
```

`package.json` と `package-lock.json` は変更不要です。

## Codespacesで確認

上部メニュー：

```text
Terminal
→ New Terminal
```

黒い画面で実行：

```bash
npm run build
```

エラーがなければ次を1行ずつ実行：

```bash
git add app/page.tsx app/globals.css app/layout.tsx app/components/EmbeddedCheckoutSection.tsx app/api/checkout/route.ts app/return/page.tsx
git commit -m "Optimize homepage for mobile"
git push
```

## Vercel

GitHubとVercelが連携済みなら、push後に自動デプロイされます。

環境変数は次の4つが必要です。

```text
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
STRIPE_SECRET_KEY
STRIPE_PRICE_ID
SITE_URL
```

`SITE_URL` は実際のVercel URLにしてください。

例：

```text
https://mental-site.vercel.app
```

## 保持した内容

次の内容は削除せず、新しいスマホ向けデザインに組み込みました。

```text
const testimonials（参加者の口コミ6件）
const features（サービス内容6件）
```

口コミの許諾に関する注記は、実際の状況に合わせて確認・修正してください。
