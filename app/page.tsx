import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';

import {
  BookOpen,
  Building2,
  Check,
  Heart,
  MessageCircle,
  Pill,
  Quote,
  Shield,
  Sparkles,
  Users,
} from 'lucide-react';

const stripeUrl = 'https://buy.stripe.com/5kQaEXbEcci505s95m6c003';

const ctaLabel = '月50円で参加する';

const reassuranceItems = [
  'ニックネーム参加OK',
  '読むだけOK',
  'いつでも退会可能',
];

const worries = [
  [
    '人間関係で疲れている',
    '家族、友人、職場、恋愛の悩みをひとりで抱え込まなくて大丈夫。',
  ],
  [
    '発達障害の特性で生きづらい',
    'こだわり、感覚過敏、忘れやすさ、会話の難しさなどの悩みも話せます。',
  ],
  [
    '誰にも本音を話せない',
    '言葉にならない気持ちも、無理にきれいに話す必要はありません。',
  ],
  [
    '孤独を感じる',
    '同じような悩みを持つ人と、安心できる距離感でつながれます。',
  ],
  [
    '気持ちが落ち込みやすい',
    '元気なふりをしなくても、そのままの状態で参加できます。',
  ],
  [
    '相談先が分からない',
    '精神科や相談窓口など、必要な情報を知るきっかけを得られます。',
  ],
];

const testimonials = [
  {
    text: '心が辛い時、相談する先ができてとても心が楽になり生きやすくなった',
    name: '参加者の声',
  },
];

type Feature = {
  title: string;
  text: string;
  icon: LucideIcon;
  label?: string;
};

const features: Feature[] = [
  {
    title: '心・人間関係・発達障害の悩みを話せる居場所',
    text: '否定や説教、無理な励ましをしない、穏やかなオンラインコミュニティです。心の悩み、人間関係のつらさ、発達障害の特性による生きづらさを、安心できる距離感で共有できます。',
    icon: Shield,
  },
  {
    title: '同じ悩みを持つ人との相互支援',
    text: '心の不調、人間関係、発達障害の特性による困りごとなど、似た悩みを抱える人同士で経験や気持ちを分かち合えます。誰かを一方的に助ける場所ではなく、お互いに支え合う場所です。',
    icon: Users,
  },
  {
    title: '読むだけでも参加できる',
    text: '話すことがつらい日や、まだ投稿する勇気が出ないときは、読むだけの参加でも大丈夫です。自分のペースで関われます。',
    icon: MessageCircle,
  },
  {
    title: '心を楽にするための記事',
    text: '人間関係、気分の落ち込み、不安、発達障害の特性との向き合い方など、心を少し軽くするための記事を定期的にお届けします。',
    icon: BookOpen,
    label: '定期配信',
  },
  {
    title: '評判の良い精神科・相談先の情報',
    text: '精神科、心療内科、相談窓口などを探すときの参考になる情報を提供します。受診先を選ぶきっかけとして活用できます。',
    icon: Building2,
    label: '情報提供',
  },
  {
    title: '薬や受診に関する基礎情報',
    text: '精神科の薬や受診の流れについて、基本的な情報を分かりやすく整理してお届けします。不安を減らし、必要な相談につながるための情報提供です。',
    icon: Pill,
    label: '情報提供',
  },
];

const priceItems = [
  '心や人間関係の悩みを話せる会員限定コミュニティ',
  '発達障害の特性による生きづらさも相談可能',
  '同じような悩みを持つ人との相互支援',
  '読むだけ参加OK',
  '心を楽にするための記事の定期配信',
  '評判の良い精神科・相談先に関する情報',
  '薬や受診に関する基礎情報',
  'ニックネーム参加OK',
  'いつでも退会可能',
];

const faqs = [
  [
    'どんなサービスですか？',
    '心や人間関係の悩み、発達障害の特性による生きづらさを抱える人たちが、安心できる距離感でつながれる相互支援コミュニティです。悩みを話したり、他の人の経験を読んだり、役立つ記事や相談先の情報を見ることができます。',
  ],
  [
    '顔出しは必要ですか？',
    '必要ありません。ニックネームで参加できます。',
  ],
  [
    '発達障害の診断がなくても参加できますか？',
    'はい。診断の有無に関係なく、発達障害の特性に近い悩みや、人間関係・生活のしづらさを感じている方も参加できます。',
  ],
  [
    '発達障害の診断や治療をしてもらえますか？',
    'いいえ。こころの居場所は医療サービスではないため、発達障害を含む診断・治療・処方は行っていません。必要に応じて、医療機関や専門窓口に相談するための参考情報を提供します。',
  ],
  [
    '話すのが苦手でも参加できますか？',
    'はい。読むだけの参加も歓迎しています。投稿や発言を無理に求める場所ではありません。',
  ],
  [
    '途中で退会できますか？',
    'いつでも退会できます。無理に続ける必要はありません。',
  ],
  [
    '医療サービスですか？',
    'いいえ。こころの居場所は、診断・治療・処方を行う医療サービスではありません。精神科や薬に関する内容は、受診や相談を考えるときの参考情報として提供しています。',
  ],
  [
    '薬を購入したり、配送してもらうことはできますか？',
    'いいえ。このコミュニティ内で薬の販売・処方・配送は行っていません。薬が必要な場合は、医師や薬剤師などの専門家にご相談ください。',
  ],
  [
    '決済後はどうなりますか？',
    '安全な決済ページでお支払い後、参加方法をご案内します。',
  ],
];

function PrimaryButton({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={stripeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex w-full items-center justify-center rounded-full bg-teal px-6 py-4 text-center text-[15px] font-semibold leading-6 text-white shadow-[0_18px_50px_rgba(23,99,90,0.34)] transition active:scale-[0.98] sm:w-auto sm:px-9 md:hover:-translate-y-0.5 ${className}`}
    >
      {children}
    </a>
  );
}

export default function Page() {
  return (
    <main className="overflow-hidden bg-cream pb-[calc(6rem+env(safe-area-inset-bottom))] md:pb-0">
      <nav className="fixed left-0 top-0 z-50 w-full px-3 pt-3 md:px-8 md:pt-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/70 bg-cream/92 px-3 py-2 shadow-[0_14px_44px_rgba(31,51,44,0.12)] backdrop-blur-xl md:px-5 md:py-3">
          <a href="#top" className="flex min-w-0 items-center gap-2 md:gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage text-teal shadow-card md:h-11 md:w-11">
              <svg
                width="21"
                height="21"
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

            <span className="flex min-w-0 flex-col leading-tight">
              <span className="truncate font-serif text-base tracking-wide text-deep md:text-xl">
                こころの居場所
              </span>
              <span className="hidden text-xs tracking-wide text-muted sm:inline">
                相互支援コミュニティ
              </span>
            </span>
          </a>

          <a
            href={stripeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full bg-teal px-4 py-3 text-xs font-semibold text-white shadow-[0_12px_34px_rgba(23,99,90,0.24)] transition active:scale-[0.98] md:px-6 md:text-sm md:hover:-translate-y-0.5"
          >
            月50円で参加
          </a>
        </div>
      </nav>

      <div className="fixed bottom-[calc(0.75rem+env(safe-area-inset-bottom))] left-3 right-3 z-50 md:hidden">
        <a
          href={stripeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-full bg-teal px-5 py-4 text-center text-[15px] font-semibold text-white shadow-[0_18px_50px_rgba(23,99,90,0.38)] active:scale-[0.98]"
        >
          月50円で参加する
        </a>

        <p className="mt-2 text-center text-[11px] leading-5 text-muted">
          匿名OK・読むだけOK・いつでも退会可能
        </p>
      </div>

      <section
        id="top"
        className="bg-cream px-5 pt-[88px] md:min-h-screen md:px-10 md:pt-32"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-10 py-8 md:grid-cols-[0.9fr_1.1fr] md:py-24">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-sage px-4 py-2 text-xs font-medium leading-5 text-muted md:text-sm">
              心・人間関係・発達障害の悩みを話せる相互支援コミュニティ
            </p>

            <h1 className="font-serif text-[40px] leading-[1.12] tracking-wide text-deep sm:text-6xl md:text-7xl">
              ひとりで
              <br />
              抱えなくていい。
            </h1>

            <p className="mt-5 max-w-xl text-[15px] leading-8 text-muted md:mt-8 md:text-lg md:leading-9">
              心や人間関係の悩み、発達障害の特性による生きづらさを抱える人たちが、安心できる距離感でつながる月50円の相互支援コミュニティです。
              役立つ記事や、精神科・薬に関する参考情報もお届けします。
            </p>

            <div className="mt-6 md:mt-10">
              <PrimaryButton>月50円でコミュニティに参加する</PrimaryButton>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-2">
              {reassuranceItems.map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 rounded-2xl bg-white/90 px-4 py-3 text-sm text-muted shadow-card"
                >
                  <Check className="h-4 w-4 shrink-0 text-teal" />
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-5 rounded-[26px] bg-white/90 p-4 shadow-card">
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage text-teal">
                  <Quote className="h-4 w-4" />
                </span>

                <div>
                  <p className="text-xs font-medium text-teal">参加者の声</p>
                  <p className="mt-2 font-serif text-[20px] leading-relaxed text-deep">
                    「心が辛い時、相談する先ができてとても心が楽になり生きやすくなった」
                  </p>
                  <p className="mt-2 text-[11px] leading-5 text-muted">
                    ※個人の感想です。感じ方には個人差があります。
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs leading-6 text-muted md:text-sm md:leading-7">
              ボタンを押すと、安全な決済ページに移動します。決済後、参加方法をご案内します。
            </p>

            <div className="mt-5 grid grid-cols-[auto_1fr] items-center gap-4 rounded-3xl bg-white/85 p-4 shadow-card md:mt-8 md:block md:p-5">
              <p className="text-4xl font-bold leading-none text-teal md:text-6xl">
                550+
              </p>

              <div>
                <p className="text-base font-medium text-deep md:mt-2 md:text-xl">
                  名以上が参加中
                </p>
                <p className="mt-1 text-xs leading-6 text-muted md:mt-2 md:text-sm md:leading-7">
                  同じような悩みや生きづらさを抱える方々が参加しています。
                </p>
              </div>
            </div>

            <p className="mt-5 text-xs leading-6 text-muted md:text-sm md:leading-7">
              ※こころの居場所は医療サービスではありません。発達障害を含む診断・治療・処方は行っていません。緊急時や症状が強い場合は、医療機関や専門窓口へご相談ください。
            </p>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute -left-8 -top-8 h-44 w-44 rounded-full bg-blue blur-3xl" />
            <div className="relative overflow-hidden rounded-large bg-white shadow-soft">
              <img
                src="/hero.png"
                alt="こころの居場所を表す温かい部屋"
                className="h-[540px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream px-5 py-14 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-3 text-sm font-medium text-teal">
            まずは、こんな気持ちから
          </p>

          <h2 className="font-serif text-3xl leading-snug text-deep md:text-5xl">
            こんなお悩みは
            <br className="sm:hidden" />
            ありませんか？
          </h2>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:mt-14 md:gap-5">
            {worries.map(([title, text]) => (
              <div
                key={title}
                className="rounded-[26px] bg-white p-5 text-left shadow-card transition active:scale-[0.99] md:rounded-large md:p-8 md:hover:-translate-y-1 md:hover:shadow-soft"
              >
                <Heart className="mb-4 h-6 w-6 text-teal md:mb-5 md:h-7 md:w-7" />
                <h3 className="text-lg font-medium text-deep md:text-xl">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted md:mt-3 md:text-base">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-sage px-5 py-14 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium tracking-wide text-teal md:mb-8 md:text-base">
              私たちが届けたいこと
            </p>

            <h2 className="font-serif text-[38px] leading-tight text-deep md:text-7xl">
              話せる。
              <br />
              読める。
              <br />
              支え合える。
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-8 text-muted md:mt-8 md:text-base">
              メインは、心や人間関係の悩み、発達障害の特性による生きづらさを持つ人たちの相互支援コミュニティです。
              その中で、定期的に役立つ記事や、精神科・薬に関する参考情報も提供します。
            </p>
          </div>

          <div className="mt-9 grid gap-4 md:mt-14 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {features.map(({ title, text, icon: Icon, label }) => (
              <div
                key={title}
                className="rounded-[26px] bg-cream p-5 shadow-card transition active:scale-[0.99] md:rounded-large md:p-8 md:hover:-translate-y-1 md:hover:shadow-soft"
              >
                <div className="mb-5 flex items-center justify-between gap-4 md:mb-6">
                  <Icon className="h-8 w-8 shrink-0 text-teal md:h-9 md:w-9" />

                  {label ? (
                    <span className="rounded-full bg-white px-3 py-1 text-xs text-muted">
                      {label}
                    </span>
                  ) : null}
                </div>

                <h3 className="text-lg font-medium leading-8 text-deep md:text-xl">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted md:mt-4 md:text-base md:leading-8">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-9 rounded-[28px] bg-white/85 p-5 text-center shadow-card md:mt-12 md:rounded-[36px] md:p-8">
            <p className="text-base font-medium leading-8 text-deep md:text-lg">
              月50円で、安心してつながれる相互支援コミュニティに参加できます。
            </p>

            <div className="mt-5">
              <PrimaryButton>月50円で参加してみる</PrimaryButton>
            </div>

            <p className="mt-4 text-xs leading-6 text-muted md:text-sm">
              ニックネーム参加OK｜読むだけOK｜いつでも退会可能
            </p>
          </div>
        </div>
      </section>

      <section id="price" className="bg-cream px-5 py-14 md:px-10 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-3 text-sm font-medium text-teal">料金</p>

          <h2 className="font-serif text-3xl leading-snug text-deep md:text-5xl">
            月50円で、
            <br className="sm:hidden" />
            心の居場所を。
          </h2>

          <p className="mt-4 text-sm leading-7 text-muted md:text-base">
            無理なく続けられる、相互支援コミュニティです。
          </p>

          <div className="mx-auto mt-8 max-w-md rounded-[30px] bg-white p-5 shadow-soft md:mt-12 md:rounded-[36px] md:p-8">
            <p className="rounded-full bg-sage px-4 py-2 text-xs text-muted md:text-sm">
              心・人間関係・発達障害の悩みを話せる月額コミュニティ
            </p>

            <div className="mt-7 md:mt-8">
              <span className="text-6xl font-semibold leading-none text-deep md:text-7xl">
                ¥50
              </span>
              <span className="text-muted"> / 月</span>
            </div>

            <p className="mt-3 text-sm font-medium text-teal">
              1日あたり約2円
            </p>

            <p className="mt-6 rounded-3xl bg-cream px-5 py-4 text-left text-sm leading-7 text-muted">
              コミュニティでの相互支援、読むだけ参加、心を楽にする記事、精神科や薬に関する参考情報を利用できます。
            </p>

            <ul className="mt-7 space-y-3 text-left text-sm leading-7 text-muted md:mt-8 md:space-y-4 md:text-base">
              {priceItems.map((item) => (
                <li key={item} className="flex gap-2">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-teal" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <PrimaryButton>月50円で今すぐ参加する</PrimaryButton>
            </div>

            <p className="mt-4 text-xs leading-6 text-muted">
              ボタンを押すと、安全な決済ページに移動します。決済後、参加方法をご案内します。
            </p>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-blue/60 px-5 py-14 md:px-10 md:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-center text-sm font-medium text-teal">
            よくある質問
          </p>

          <h2 className="text-center font-serif text-3xl text-deep md:text-5xl">
            FAQ
          </h2>

          <div className="mt-8 space-y-3 md:mt-12 md:space-y-4">
            {faqs.map(([q, a]) => (
              <div
                key={q}
                className="rounded-[24px] bg-white p-5 shadow-card md:rounded-3xl md:p-7"
              >
                <h3 className="text-sm font-medium leading-7 text-deep md:text-base">
                  Q. {q}
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted md:mt-3 md:text-base md:leading-8">
                  A. {a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="bg-deep px-5 py-14 text-white md:px-10 md:py-24"
      >
        <div className="mx-auto max-w-4xl text-center">
          <Sparkles className="mx-auto mb-6 h-9 w-9 text-sage md:mb-8 md:h-10 md:w-10" />

          <h2 className="font-serif text-3xl leading-snug text-white md:text-5xl">
            <span className="block">ひとりで抱えない</span>
            <span className="block">場所を探している</span>
            <span className="block">あなたへ</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-white/75 md:mt-6 md:text-base">
            こころの居場所は、心や人間関係の悩み、発達障害の特性による生きづらさを抱える人たちが、安心できる距離感でつながれる相互支援コミュニティです。
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 md:mt-10 sm:flex-row">
            <a
              href={stripeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full bg-white px-7 py-4 text-center text-[15px] font-semibold text-deep shadow-[0_18px_50px_rgba(255,255,255,0.16)] transition active:scale-[0.98] sm:w-auto md:px-9 md:py-5 md:hover:-translate-y-0.5"
            >
              月50円でコミュニティに参加する
            </a>

            <div className="flex items-center gap-2 text-sm text-white/70">
              <Users className="h-4 w-4" />
              <span>550名以上が参加中</span>
            </div>
          </div>

          <p className="mt-5 text-xs leading-6 text-white/60 md:text-sm">
            ニックネーム参加OK｜読むだけOK｜いつでも退会可能
          </p>
        </div>
      </section>

      <footer className="bg-cream px-5 py-9 text-center text-xs leading-6 text-muted md:px-10 md:py-10 md:text-sm">
        <p>© 2026 こころの居場所</p>
        <p className="mt-3">
          こころの居場所は医療サービスではありません。発達障害を含む診断・治療・処方は行っていません。
        </p>
      </footer>
    </main>
  );
}
