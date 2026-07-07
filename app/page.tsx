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
  Star,
  Users,
} from 'lucide-react';

import TrackedStripeLink from './components/TrackedStripeLink';

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

type AvatarVariant =
  | 'youngWoman'
  | 'youngMan'
  | 'adultWoman'
  | 'adultMan'
  | 'seniorWoman'
  | 'seniorMan';

type Testimonial = {
  headline: string;
  text: string;
  profile: string;
  rating: 3 | 4 | 5;
  variant: AvatarVariant;
};

const testimonials: Testimonial[] = [
  {
    profile: '20代・女性',
    variant: 'youngWoman',
    rating: 5,
    headline: '相談できる先があるだけで、心が軽くなった',
    text: '心が辛い時、相談する先ができてとても心が楽になり生きやすくなりました。',
  },
  {
    profile: '20代・男性',
    variant: 'youngMan',
    rating: 4,
    headline: '同じような悩みを持つ人の言葉に救われた',
    text: '発達障害の特性で人間関係がしんどい時も、似た悩みを持つ人の言葉を見るだけで少し安心できました。',
  },
  {
    profile: '30代・女性',
    variant: 'adultWoman',
    rating: 3,
    headline: '読むだけでも参加できるのがありがたい',
    text: '最初は少し様子見でしたが、無理に話さなくても読める雰囲気があって安心しました。気持ちが落ちている日でも使いやすいです。',
  },
  {
    profile: '40代・男性',
    variant: 'adultMan',
    rating: 5,
    headline: '否定されずに話せる場所ができた',
    text: '仕事や家庭のことで抱え込んでいた悩みを、否定されずに話せる場所があるだけで気持ちが軽くなりました。',
  },
  {
    profile: '50代・女性',
    variant: 'seniorWoman',
    rating: 4,
    headline: '年齢に関係なく悩みを話せる',
    text: '年齢を重ねても、悩みを話せる場所があるのはありがたいです。やさしい雰囲気で安心して利用できます。',
  },
  {
    profile: '60代・男性',
    variant: 'seniorMan',
    rating: 3,
    headline: '自分のペースで続けられる',
    text: 'まだ積極的に投稿はしていませんが、読むだけでも参加できるので続けやすいです。ひとりで悩んでいる感覚が少し薄れました。',
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

function RatingStars({ rating }: { rating: 3 | 4 | 5 }) {
  return (
    <div
      className="flex items-center gap-1"
      aria-label={`5段階中${rating}の評価`}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= rating
              ? 'fill-current text-teal'
              : 'fill-transparent text-muted/30'
          }`}
        />
      ))}

      <span className="ml-1 text-xs font-medium text-muted">{rating}.0</span>
    </div>
  );
}

function AvatarSilhouette({ variant }: { variant: AvatarVariant }) {
  const wrapperClass =
    'flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-sage text-teal shadow-card md:h-[72px] md:w-[72px]';

  if (variant === 'youngWoman') {
    return (
      <div className={wrapperClass}>
        <svg
          viewBox="0 0 64 64"
          className="h-12 w-12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="32" cy="24" r="10" fill="currentColor" opacity="0.24" />
          <path
            d="M21 28C21 19.5 25.5 14 32 14C38.5 14 43 19.5 43 28V31H21V28Z"
            fill="currentColor"
          />
          <path
            d="M16 53C17.5 44 23 39 32 39C41 39 46.5 44 48 53H16Z"
            fill="currentColor"
            opacity="0.5"
          />
          <path
            d="M23 20C24.5 15.5 28 13 32 13C36 13 39.5 15.5 41 20"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }

  if (variant === 'youngMan') {
    return (
      <div className={wrapperClass}>
        <svg
          viewBox="0 0 64 64"
          className="h-12 w-12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="32" cy="24" r="10" fill="currentColor" opacity="0.24" />
          <path
            d="M22 21C24 16.5 27.5 14 32 14C36.5 14 40 16.5 42 21"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M18 53C19.5 44.5 24.5 39.5 32 39.5C39.5 39.5 44.5 44.5 46 53H18Z"
            fill="currentColor"
            opacity="0.55"
          />
          <path
            d="M22 28V24C22 18.5 26 15 32 15C38 15 42 18.5 42 24V28"
            fill="currentColor"
          />
        </svg>
      </div>
    );
  }

  if (variant === 'adultWoman') {
    return (
      <div className={wrapperClass}>
        <svg
          viewBox="0 0 64 64"
          className="h-12 w-12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="32" cy="24" r="10" fill="currentColor" opacity="0.24" />
          <path
            d="M20 27C20 18.5 25 13 32 13C39 13 44 18.5 44 27V34H20V27Z"
            fill="currentColor"
          />
          <path
            d="M15 53C16.5 44 23 39 32 39C41 39 47.5 44 49 53H15Z"
            fill="currentColor"
            opacity="0.5"
          />
          <path
            d="M19 28C18.5 33 19.5 37 22.5 39"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M45 28C45.5 33 44.5 37 41.5 39"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }

  if (variant === 'adultMan') {
    return (
      <div className={wrapperClass}>
        <svg
          viewBox="0 0 64 64"
          className="h-12 w-12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="32" cy="24" r="10" fill="currentColor" opacity="0.24" />
          <path
            d="M21 21.5C23 16.5 27 14 32 14C37 14 41 16.5 43 21.5"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M21 29V24.5C21 18.5 25 15 32 15C39 15 43 18.5 43 24.5V29"
            fill="currentColor"
          />
          <path
            d="M17 53C18 44 24 39.5 32 39.5C40 39.5 46 44 47 53H17Z"
            fill="currentColor"
            opacity="0.55"
          />
        </svg>
      </div>
    );
  }

  if (variant === 'seniorWoman') {
    return (
      <div className={wrapperClass}>
        <svg
          viewBox="0 0 64 64"
          className="h-12 w-12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="32" cy="24" r="10" fill="currentColor" opacity="0.24" />
          <path
            d="M20 28C20 19 25 14 32 14C39 14 44 19 44 28V33H20V28Z"
            fill="currentColor"
          />
          <path
            d="M15 53C16.5 44.5 22.5 40 32 40C41.5 40 47.5 44.5 49 53H15Z"
            fill="currentColor"
            opacity="0.5"
          />
          <path
            d="M23.5 21.5C25.5 17.5 28.5 15.5 32 15.5C35.5 15.5 38.5 17.5 40.5 21.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            opacity="0.7"
          />
          <path
            d="M19.5 30.5C19.5 35 21 38 23.5 40"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M44.5 30.5C44.5 35 43 38 40.5 40"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={wrapperClass}>
      <svg
        viewBox="0 0 64 64"
        className="h-12 w-12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="32" cy="24" r="10" fill="currentColor" opacity="0.24" />
        <path
          d="M22 20.5C24.5 16.5 28 14.5 32 14.5C36 14.5 39.5 16.5 42 20.5"
          stroke="currentColor"
          strokeWidth="2.8"
          strokeLinecap="round"
          opacity="0.8"
        />
        <path
          d="M21 29V24.5C21 18.5 25 15 32 15C39 15 43 18.5 43 24.5V29"
          fill="currentColor"
        />
        <path
          d="M17 53C18.5 44 24 39.5 32 39.5C40 39.5 45.5 44 47 53H17Z"
          fill="currentColor"
          opacity="0.55"
        />
      </svg>
    </div>
  );
}

function PrimaryButton({
  children,
  location,
  className = '',
}: {
  children: ReactNode;
  location: string;
  className?: string;
}) {
  return (
    <TrackedStripeLink
      href={stripeUrl}
      location={location}
      className={`inline-flex w-full items-center justify-center rounded-full bg-teal px-6 py-4 text-center text-[15px] font-semibold leading-6 text-white shadow-[0_18px_50px_rgba(23,99,90,0.34)] transition active:scale-[0.98] sm:w-auto sm:px-9 md:hover:-translate-y-0.5 ${className}`}
    >
      {children}
    </TrackedStripeLink>
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

          <TrackedStripeLink
            href={stripeUrl}
            location="header"
            className="shrink-0 rounded-full bg-teal px-4 py-3 text-xs font-semibold text-white shadow-[0_12px_34px_rgba(23,99,90,0.24)] transition active:scale-[0.98] md:px-6 md:text-sm md:hover:-translate-y-0.5"
          >
            月50円で参加
          </TrackedStripeLink>
        </div>
      </nav>

      <div className="fixed bottom-[calc(0.75rem+env(safe-area-inset-bottom))] left-3 right-3 z-50 md:hidden">
        <TrackedStripeLink
          href={stripeUrl}
          location="mobile_fixed_bottom"
          className="flex items-center justify-center rounded-full bg-teal px-5 py-4 text-center text-[15px] font-semibold text-white shadow-[0_18px_50px_rgba(23,99,90,0.38)] active:scale-[0.98]"
        >
          {ctaLabel}
        </TrackedStripeLink>

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
              同じような悩みを持つ人の言葉に触れながら、自分のペースで参加できます。
            </p>

            <div className="mt-6 md:mt-10">
              <PrimaryButton location="hero">
                月50円で安心して参加してみる
              </PrimaryButton>
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

      <section className="bg-blue/50 px-5 py-14 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="mb-3 text-sm font-medium text-teal">
              参加者の口コミ
            </p>

            <h2 className="font-serif text-3xl leading-snug text-deep md:text-5xl">
              「相談できる場所がある」
              <br />
              それだけで、少し楽になる。
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted md:text-base">
              心のつらさ、人間関係の悩み、発達障害の特性による生きづらさ。
              さまざまな年代の方が、それぞれのペースで参加しています。
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:mt-12 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map(
              ({ text, profile, variant, headline, rating }) => (
                <div
                  key={`${profile}-${headline}`}
                  className="rounded-[28px] bg-white p-5 shadow-card transition active:scale-[0.99] md:rounded-large md:p-7 md:hover:-translate-y-1 md:hover:shadow-soft"
                >
                  <div className="flex items-start gap-4">
                    <AvatarSilhouette variant={variant} />

                    <div className="min-w-0">
                      <p className="text-sm font-medium text-deep">
                        {profile}
                      </p>
                      <div className="mt-2">
                        <RatingStars rating={rating} />
                      </div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <p className="text-base font-semibold leading-7 text-deep">
                      {headline}
                    </p>

                    <Quote className="mt-4 h-5 w-5 text-teal" />

                    <p className="mt-3 text-sm leading-8 text-muted md:text-base md:leading-8">
                      「{text}」
                    </p>
                  </div>
                </div>
              ),
            )}
          </div>

          <div className="mt-8 rounded-[30px] bg-white p-6 text-center shadow-soft md:mt-12 md:p-10">
            <div className="mx-auto max-w-2xl">
              <p className="text-sm font-medium text-teal">
                ひとりで抱え込んでいる方へ
              </p>

              <h3 className="mt-4 font-serif text-3xl leading-snug text-deep md:text-5xl">
                まずは読むだけでも、
                <br className="sm:hidden" />
                参加できます。
              </h3>

              <p className="mt-5 text-sm leading-8 text-muted md:text-base">
                すぐに話さなくても大丈夫です。自分と似た悩みを持つ人の言葉を見るだけでも、
                「ひとりじゃない」と感じられることがあります。
              </p>

              <div className="mt-7">
                <PrimaryButton location="testimonial_cta">
                  月50円で安心して参加してみる
                </PrimaryButton>
              </div>

              <p className="mt-4 text-xs leading-6 text-muted">
                匿名OK｜読むだけOK｜いつでも退会可能｜安全なStripe決済
              </p>
            </div>
          </div>

          <p className="mt-6 text-center text-xs leading-6 text-muted">
            ※個人の感想です。感じ方には個人差があります。口コミは許可を得た内容をもとに、個人が特定されない形で掲載しています。
          </p>
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
              <PrimaryButton location="about_cta">
                月50円で参加してみる
              </PrimaryButton>
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
              <PrimaryButton location="price_cta">
                月50円で今すぐ参加する
              </PrimaryButton>
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
            <TrackedStripeLink
              href={stripeUrl}
              location="final_cta"
              className="inline-flex w-full items-center justify-center rounded-full bg-white px-7 py-4 text-center text-[15px] font-semibold text-deep shadow-[0_18px_50px_rgba(255,255,255,0.16)] transition active:scale-[0.98] sm:w-auto md:px-9 md:py-5 md:hover:-translate-y-0.5"
            >
              月50円でコミュニティに参加する
            </TrackedStripeLink>

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
