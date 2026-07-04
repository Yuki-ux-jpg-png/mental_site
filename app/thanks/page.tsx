import { CheckCircle2, Home, Mail, ShieldCheck, Sparkles } from 'lucide-react';

const nextSteps = [
  {
    title: '登録したメールを確認',
    text: '参加方法のご案内を、決済時に入力したメールアドレス宛にお送りします。',
    icon: Mail,
  },
  {
    title: '案内に沿って参加',
    text: 'メールに記載された手順に沿って、こころの居場所にご参加ください。',
    icon: Sparkles,
  },
  {
    title: '届かない場合は確認',
    text: '数分たっても届かない場合は、迷惑メールフォルダもご確認ください。',
    icon: ShieldCheck,
  },
];

export default function ThanksPage() {
  return (
    <main className="min-h-dvh bg-cream px-5 pb-[calc(2rem+env(safe-area-inset-bottom))] pt-6 md:px-10 md:py-16">
      <div className="mx-auto max-w-xl">
        <a href="/" className="mb-6 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sage text-teal shadow-card">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 21C12 16.5 12 11.5 12 7"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
              <path
                d="M12 12C8.5 12 6 9.5 5 6C8.5 6 11 8.5 12 12Z"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 15C15.5 15 18 12.5 19 9C15.5 9 13 11.5 12 15Z"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          <span className="flex flex-col leading-tight">
            <span className="font-serif text-lg tracking-wide text-deep">
              こころの居場所
            </span>
            <span className="text-xs tracking-wide text-muted">
              決済完了ページ
            </span>
          </span>
        </a>

        <section className="rounded-[34px] bg-white p-6 text-center shadow-soft md:p-9">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-sage text-teal shadow-card">
            <CheckCircle2 className="h-11 w-11" />
          </div>

          <p className="mt-6 inline-flex rounded-full bg-cream px-4 py-2 text-xs font-medium text-muted">
            決済が完了しました
          </p>

          <h1 className="mt-5 font-serif text-[34px] leading-tight text-deep md:text-5xl">
            ご参加ありがとうございます。
          </h1>

          <p className="mt-5 text-sm leading-8 text-muted md:text-base">
            こころの居場所へのお申し込みが完了しました。
            これから、あなたが安心して過ごせる場所としてご利用いただけます。
          </p>

          <div className="mt-7 rounded-[26px] bg-cream p-5 text-left">
            <p className="text-sm font-medium text-deep">
              次にすること
            </p>

            <div className="mt-4 space-y-4">
              {nextSteps.map(({ title, text, icon: Icon }) => (
                <div key={title} className="flex gap-3">
                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-teal shadow-card">
                    <Icon className="h-5 w-5" />
                  </span>

                  <div>
                    <h2 className="text-sm font-medium text-deep">
                      {title}
                    </h2>
                    <p className="mt-1 text-xs leading-6 text-muted">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <a
            href="/"
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal px-6 py-4 text-center text-[15px] font-semibold text-white shadow-[0_18px_50px_rgba(23,99,90,0.30)] transition active:scale-[0.98] md:w-auto md:px-9 md:hover:-translate-y-0.5"
          >
            <Home className="h-4 w-4" />
            トップページへ戻る
          </a>

          <p className="mt-5 text-xs leading-6 text-muted">
            このページを閉じても、参加手続きには影響ありません。
            ご案内メールをご確認ください。
          </p>
        </section>

        <p className="mt-6 text-center text-xs leading-6 text-muted">
          緊急時や症状が強い場合は、医療機関や専門窓口へご相談ください。
        </p>
      </div>
    </main>
  );
}
