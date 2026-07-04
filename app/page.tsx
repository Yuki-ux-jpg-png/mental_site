import type { LucideIcon } from 'lucide-react';

import {
  Briefcase,
  Check,
  Heart,
  Leaf,
  MessageCircle,
  Shield,
  Sparkles,
  User,
  Users,
} from 'lucide-react';

const stripeUrl = 'https://buy.stripe.com/5kQaEXbEcci505s95m6c003';

const ctaLabel = '月50円で安心できる居場所に参加する';

const reassuranceItems = [
  'ニックネーム参加OK',
  '読むだけOK',
  'いつでも退会可能',
];

const worries = [
  ['朝起きるのがつらい', '無理に元気なふりをしなくても大丈夫。'],
  ['誰にも本音を話せない', '言葉にならない気持ちも、そのままで。'],
  ['将来が不安で仕方ない', '先のことを一緒に少しずつ見つめます。'],
  ['孤独を感じる', '同じような経験を持つ人とつながれます。'],
  ['自己否定が止まらない', '比べず、責めず、休むことを大切に。'],
  ['同じ経験の人と話したい', '安心できる距離感で交流できます。'],
];

type Feature = {
  title: string;
  text: string;
  icon: LucideIcon;
  label?: string;
};

const features: Feature[] = [
  {
    title: '安心して話せる居場所',
    text: '否定や説教、無理な励ましをしない、穏やかなオンラインコミュニティです。',
    icon: Shield,
  },
  {
    title: '1人1人に向けた人生相談',
    text: 'あなたの状況や悩みに合わせて、最適な精神科医が個別にチャットもしくはオンライン面談で相談に乗るサービスです。',
    icon: User,
    label: '相談',
  },
  {
    title: '職業紹介サポート',
    text: '将来的に、心の不調を抱える方向けの働き方や職業紹介の支援を行います。',
    icon: Briefcase,
  },
  {
    title: '対面での交流会',
    text: '定期的に少人数で安心して話せる対面での交流会の開催を行っています。',
    icon: MessageCircle,
  },
  {
    title: '心を楽にするための記事',
    text: '定期的に心を楽にするための記事をお届けします。',
    icon: Leaf,
  },
  {
    title: 'オンライン精神科相談・お薬配送',
    text: 'オンラインで精神科医に相談し、各種精神薬を自宅にお届けできます。家に向かわずに購入することが可能です。',
    icon: Heart,
    label: 'オンライン対応',
  },
  {
    title: '1人1人の願いや悩みに寄り添う開運・ヒーリングアイテム',
    text: '恋愛・仕事・人間関係・将来への不安など、お客様それぞれの状況や想いに合わせて、心を支えるアイテムをお届けするサービスです。お守りのように日常に寄り添い、気持ちを整えながら、自分の願いに向き合うきっかけとして活用できます。',
    icon: Sparkles,
  },
];

const priceItems = [
  '550名以上が参加する会員限定コミュニティ',
  '1人1人に向けた人生相談サービス',
  'オンライン精神科相談・お薬配送',
  '対面での交流会',
  '心を楽にするための記事',
  '職業紹介サポート',
  '開運・ヒーリングアイテム',
  '読むだけ参加OK',
  'いつでも退会可能',
];

const faqs = [
  [
    '顔出しは必要ですか？',
    '必要ありません。ニックネームで参加できます。',
  ],
  [
    '途中で退会できますか？',
    'いつでも退会できます。無理に続ける必要はありません。',
  ],
  [
    '話すのが苦手でも参加できますか？',
    'はい。読むだけの参加も歓迎しています。',
  ],
  [
    'どんなサービスが使えますか？',
    '安心して話せるコミュニティ、人生相談、記事、交流会、職業紹介サポート、オンライン相談、ヒーリングアイテムなどを利用できます。',
  ],
  [
    '人生相談はどのように受けられますか？',
    'あなたの状況や悩みに合わせて、個別にチャットまたはオンライン面談で相談できます。',
  ],
  [
    'オンライン精神科相談やお薬配送は利用できますか？',
    'オンラインで精神科医に相談し、必要に応じて自宅でお薬を受け取れるサービスを案内しています。',
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
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={stripeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex w-full items-center justify-center rounded-full bg-teal px-6 py-4 text-center text-[15px] font-semibold leading-6 text-white shadow-[0_18px_50px_rgba(23,99,90,0.30)] transition active:scale-[0.98] sm:w-auto sm:px-9 md:hover:-translate-y-0.5 md:hover:shadow-[0_22px_60px_rgba(23,99,90,0.36)] ${className}`}
    >
      {children}
    </a>
  );
}

export default function Page() {
  return (
    <main className="overflow-hidden bg-cream pb-[calc(5.5rem+env(safe-area-inset-bottom))] md:pb-0">
      <nav className="fixed left-0 top-0 z-50 w-full px-3 pt-3 md:px-8 md:pt-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/70 bg-cream/90 px-3 py-2 shadow-[0_14px_44px_rgba(31,51,44,0.12)] backdrop-blur-xl md:px-5 md:py-3">
          <a href="#top" className="group flex min-w-0 items-center gap-2 md:gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage text-teal shadow-card md:h-11 md:w-11">
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:scale-110"
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
                550名以上が参加中
              </span>
            </span>
          </a>

          <div className="hidden items-center rounded-full bg-white/65 p-1 text-sm text-muted shadow-[inset_0_0_0_1px_rgba(255,255,255,0.55)] md:flex">
            <a
              href="#about"
              className="rounded-full px-5 py-2 transition hover:bg-sage hover:text-deep"
            >
              できること
            </a>
            <a
              href="#price"
              className="rounded-full px-5 py-2 transition hover:bg-sage hover:text-deep"
            >
              料金
            </a>
            <a
              href="#faq"
              className="rounded-full px-5 py-2 transition hover:bg-sage hover:text-deep"
            >
              FAQ
            </a>
          </div>

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
          className="flex items-center justify-center rounded-full bg-teal px-5 py-4 text-center text-[15px] font-semibold text-white shadow-[0_18px_50px_rgba(23,99,90,0.36)] active:scale-[0.98]"
        >
          月50円で参加する
        </a>

        <p className="mt-2 text-center text-[11px] leading-5 text-muted">
          ニックネーム参加OK・読むだけOK・いつでも退会可能
        </p>
      </div>

      <section id="top" className="bg-cream px-5 pt-24 md:min-h-screen md:px-10 md:pt-32">
        <div className="mx-auto grid max-w-7xl items-center gap-10 py-10 md:grid-cols-[0.9fr_1.1fr] md:py-24">
          <div>
            <p className="mb-5 inline-flex rounded-full bg-sage px-4 py-2 text-xs font-medium leading-5 text-muted md:text-sm">
              こころの悩みを解決する総合ケアサービス
            </p>

            <h1 className="font-serif text-[44px] leading-[1.12] tracking-wide text-deep sm:text-6xl md:text-7xl">
              ひとりで
              <br />
              抱えなくていい。
            </h1>

            <p className="mt-6 max-w-xl text-[15px] leading-8 text-muted md:mt-8 md:text-lg md:leading-9">
              相談、つながり、記事、交流会などを通じて、あなたのこころを支える月50円の総合ケアサービスです。
              焦らなくていい。無理をしなくていい。あなたのペースで過ごせます。
            </p>

            <div className="mt-7 md:mt-10">
              <PrimaryButton>{ctaLabel}</PrimaryButton>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3">
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

            <p className="mt-4 text-xs leading-6 text-muted md:text-sm md:leading-7">
              ボタンを押すと、安全な決済ページに移動します。決済後、参加方法をご案内します。
            </p>

            <div className="mt-6 grid grid-cols-[auto_1fr] items-center gap-4 rounded-3xl bg-white/85 p-4 shadow-card md:mt-8 md:block md:p-5">
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
              ※緊急時や症状が強い場合は、医療機関や専門窓口へご相談ください。
            </p>
          </div>

          <div className="relative md:block">
            <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-blue blur-3xl md:h-44 md:w-44" />
            <div className="relative overflow-hidden rounded-[32px] bg-white shadow-soft md:rounded-large">
              <img
                src="/hero.png"
                alt="こころの居場所を表す温かい部屋"
                className="h-[260px] w-full object-cover sm:h-[340px] md:h-[540px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 text-sm font-medium text-teal">まずは、こんな気持ちから</p>

          <h2 className="font-serif text-3xl leading-snug text-deep md:text-5xl">
            こんなお悩みは
            <br className="sm:hidden" />
            ありませんか？
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:mt-14 md:gap-5">
            {worries.map(([title, text]) => (
              <div
                key={title}
                className="rounded-[28px] bg-white p-5 text-left shadow-card transition active:scale-[0.99] md:rounded-large md:p-8 md:hover:-translate-y-1 md:hover:shadow-soft"
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

      <section id="about" className="bg-sage px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-medium tracking-wide text-teal md:mb-8 md:text-base">
              私たちが届けたいこと
            </p>

            <h2 className="font-serif text-[40px] leading-tight text-deep md:text-7xl">
              相談も、
              <br />
              つながりも、
              <br />
              ケアも。
              <br />
              あなたのペースで。
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-8 text-muted md:mt-8 md:text-base">
              こころの悩みを抱える方が、ひとりで抱え込まずに頼れる場所を目指しています。
              必要なときに、必要なサポートを選べます。
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {features.map(({ title, text, icon: Icon, label }) => (
              <div
                key={title}
                className="rounded-[28px] bg-cream p-5 shadow-card transition active:scale-[0.99] md:rounded-large md:p-8 md:hover:-translate-y-1 md:hover:shadow-soft"
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

          <div className="mt-10 rounded-[30px] bg-white/85 p-5 text-center shadow-card md:mt-12 md:rounded-[36px] md:p-8">
            <p className="text-base font-medium leading-8 text-deep md:text-lg">
              月50円で、相談・つながり・ケアをまとめて利用できます。
            </p>

            <div className="mt-5">
              <PrimaryButton>{ctaLabel}</PrimaryButton>
            </div>

            <p className="mt-4 text-xs leading-6 text-muted md:text-sm">
              ニックネーム参加OK｜読むだけOK｜いつでも退会可能
            </p>
          </div>
        </div>
      </section>

      <section id="price" className="bg-cream px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-medium text-teal">料金</p>

          <h2 className="font-serif text-3xl leading-snug text-deep md:text-5xl">
            月50円で、
            <br className="sm:hidden" />
            こころの支えを。
          </h2>

          <p className="mt-4 text-sm leading-7 text-muted md:text-base">
            毎日使える安心のメンバーシップです。
          </p>

          <div className="mx-auto mt-9 max-w-md rounded-[32px] bg-white p-5 shadow-soft md:mt-12 md:rounded-[36px] md:p-8">
            <p className="rounded-full bg-sage px-4 py-2 text-xs text-muted md:text-sm">
              550名以上が参加中の月額メンバーシップ
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
              相談、つながり、記事、交流会などを通じて、こころの悩みをひとりで抱え込まないためのサポートを受けられます。
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

      <section id="faq" className="bg-blue/60 px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-center text-sm font-medium text-teal">
            よくある質問
          </p>

          <h2 className="text-center font-serif text-3xl text-deep md:text-5xl">
            FAQ
          </h2>

          <div className="mt-9 space-y-3 md:mt-12 md:space-y-4">
            {faqs.map(([q, a]) => (
              <div
                key={q}
                className="rounded-[26px] bg-white p-5 shadow-card md:rounded-3xl md:p-7"
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

      <section id="contact" className="bg-deep px-5 py-16 text-white md:px-10 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <Sparkles className="mx-auto mb-6 h-9 w-9 text-sage md:mb-8 md:h-10 md:w-10" />

          <h2 className="font-serif text-3xl leading-snug text-white md:text-5xl">
            <span className="block">安心して過ごせる</span>
            <span className="block">場所を探している</span>
            <span className="block">あなたへ</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-white/75 md:mt-6 md:text-base">
            相談、つながり、ケアを通じて、あなたが少しでも安心して過ごせる時間をつくります。
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 md:mt-10 sm:flex-row">
            <a
              href={stripeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full bg-white px-7 py-4 text-center text-[15px] font-semibold text-deep shadow-[0_18px_50px_rgba(255,255,255,0.16)] transition active:scale-[0.98] sm:w-auto md:px-9 md:py-5 md:hover:-translate-y-0.5"
            >
              {ctaLabel}
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
          緊急時や症状が強い場合は、医療機関や専門窓口へご相談ください。
        </p>
      </footer>
    </main>
  );
}
