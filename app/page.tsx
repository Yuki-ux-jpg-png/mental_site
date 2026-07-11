import Image from "next/image";
import {
  BookOpen,
  Check,
  HeartHandshake,
  LockKeyhole,
  MapPin,
  MessageCircle,
  Pill,
  ShieldCheck,
  Sparkles,
  Star,
  UsersRound,
} from "lucide-react";
import EmbeddedCheckoutSection from "./components/EmbeddedCheckoutSection";

const testimonials = [
  {
    profile: "20代・女性",
    rating: 5,
    title: "相談できる先があるだけで、心が軽くなった",
    text: "心が辛い時、相談する先ができてとても心が楽になり生きやすくなりました。",
  },
  {
    profile: "20代・男性",
    rating: 4,
    title: "同じような悩みを持つ人の言葉に救われた",
    text: "発達障害の特性で人間関係がしんどい時も、似た悩みを持つ人の言葉を見るだけで少し安心できました。",
  },
  {
    profile: "30代・女性",
    rating: 3,
    title: "読むだけでも参加できるのがありがたい",
    text: "最初は少し様子見でしたが、無理に話さなくても読める雰囲気があって安心しました。気持ちが落ちている日でも使いやすいです。",
  },
  {
    profile: "40代・男性",
    rating: 5,
    title: "否定されずに話せる場所ができた",
    text: "仕事や家庭のことで抱え込んでいた悩みを、否定されずに話せる場所があるだけで気持ちが軽くなりました。",
  },
  {
    profile: "50代・女性",
    rating: 4,
    title: "年齢に関係なく悩みを話せる",
    text: "年齢を重ねても、悩みを話せる場所があるのはありがたいです。やさしい雰囲気で安心して利用できます。",
  },
  {
    profile: "60代・男性",
    rating: 3,
    title: "自分のペースで続けられる",
    text: "まだ積極的に投稿はしていませんが、読むだけでも参加できるので続けやすいです。ひとりで悩んでいる感覚が少し薄れました。",
  },
];

const features = [
  {
    icon: MessageCircle,
    title: "心・人間関係・発達障害の悩みを話せる居場所",
    text: "否定や説教、無理な励ましをしない、穏やかなオンラインコミュニティです。心の悩み、人間関係のつらさ、発達障害の特性による生きづらさを、安心できる距離感で共有できます。",
  },
  {
    icon: UsersRound,
    title: "同じ悩みを持つ人との相互支援",
    text: "心の不調、人間関係、発達障害の特性による困りごとなど、似た悩みを抱える人同士で経験や気持ちを分かち合えます。誰かを一方的に助ける場所ではなく、お互いに支え合う場所です。",
  },
  {
    icon: BookOpen,
    title: "読むだけでも参加できる",
    text: "話すことがつらい日や、まだ投稿する勇気が出ないときは、読むだけの参加でも大丈夫です。自分のペースで関われます。",
  },
  {
    icon: Sparkles,
    badge: "定期配信",
    title: "心を楽にするための記事",
    text: "人間関係、気分の落ち込み、不安、発達障害の特性との向き合い方など、心を少し軽くするための記事を定期的にお届けします。",
  },
  {
    icon: MapPin,
    badge: "情報提供",
    title: "評判の良い精神科・相談先の情報",
    text: "精神科、心療内科、相談窓口などを探すときの参考になる情報を提供します。受診先を選ぶきっかけとして活用できます。",
  },
  {
    icon: Pill,
    badge: "情報提供",
    title: "薬や受診に関する基礎情報",
    text: "精神科の薬や受診の流れについて、基本的な情報を分かりやすく整理してお届けします。不安を減らし、必要な相談につながるための情報提供です。",
  },
];

const planItems = [
  "心や人間関係の悩みを話せる会員限定コミュニティ",
  "発達障害の特性による生きづらさも相談可能",
  "同じような悩みを持つ人との相互支援",
  "読むだけ参加OK",
  "心を楽にするための記事の定期配信",
  "精神科・相談先・受診に関する参考情報",
  "ニックネーム参加OK",
  "いつでも退会可能",
];

const faqs = [
  {
    question: "月額50円の特別価格はいつまでですか？",
    answer:
      "2026年8月31日23:59（日本時間）までに新規登録した方は月額50円です。2026年9月1日以降に新たに登録する方は月額1,000円となります。",
  },
  {
    question: "どんなサービスですか？",
    answer:
      "心や人間関係の悩み、発達障害の特性による生きづらさを抱える人たちが、安心できる距離感でつながれる相互支援コミュニティです。",
  },
  {
    question: "顔出しや本名は必要ですか？",
    answer: "必要ありません。ニックネームで参加できます。",
  },
  {
    question: "話すのが苦手でも参加できますか？",
    answer:
      "はい。読むだけの参加も歓迎しています。投稿や発言を無理に求める場所ではありません。",
  },
  {
    question: "途中で退会できますか？",
    answer: "いつでも退会できます。無理に続ける必要はありません。",
  },
  {
    question: "医療サービスですか？",
    answer:
      "いいえ。こころの居場所は診断・治療・処方を行う医療サービスではありません。必要に応じて、医療機関や専門窓口へご相談ください。",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#FBFAF7] pb-24 text-[#20372F] lg:pb-0">
      <header className="sticky top-0 z-50 border-b border-[#20372F]/10 bg-[#FBFAF7]/95 backdrop-blur-md">
        <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex min-w-0 items-center gap-2.5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E5EFEB]">
              <HeartHandshake className="h-5 w-5 text-[#4F7C7D]" />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-bold tracking-[0.06em] sm:text-base">
                こころの居場所
              </span>
              <span className="hidden text-[10px] text-[#66766F] sm:block">
                相互支援コミュニティ
              </span>
            </span>
          </a>

          <a
            href="#checkout"
            className="shrink-0 rounded-full bg-[#20372F] px-4 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-[#2E4A40] sm:px-5 sm:text-sm"
          >
            8/31まで月50円
          </a>
        </div>
      </header>

      <section
        id="top"
        className="relative scroll-mt-20 border-b border-[#20372F]/10 px-4 pb-12 pt-8 sm:px-6 sm:pb-20 sm:pt-12 lg:px-8 lg:py-20"
      >
        <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-[#D9E8F5]/60 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#E3EEE9] blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-9 lg:grid-cols-[1.03fr_0.97fr] lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C97855]/25 bg-[#FFF0E8] px-3.5 py-2 text-xs font-bold leading-5 text-[#A85434] sm:text-sm">
              <Sparkles className="h-4 w-4 shrink-0" />
              2026年8月31日までの早期登録特典
            </div>

            <h1 className="mt-5 font-serif text-[clamp(2.7rem,13vw,4.9rem)] font-bold leading-[1.1] tracking-[-0.04em]">
              ひとりで
              <br />
              抱えなくていい。
            </h1>

            <p className="mt-5 max-w-2xl text-[15px] leading-8 text-[#52645D] sm:text-lg sm:leading-9">
              心や人間関係の悩み、発達障害の特性による生きづらさを抱える人が、
              安心できる距離感でつながる相互支援コミュニティです。
            </p>

            <div className="mt-5 rounded-[24px] border border-[#C97855]/20 bg-white/90 p-5 shadow-[0_14px_38px_rgba(201,120,85,0.10)] sm:max-w-xl sm:p-6">
              <p className="text-xs font-bold tracking-[0.12em] text-[#A85434]">
                8月31日23:59までに新規登録した方限定
              </p>
              <div className="mt-3 flex flex-wrap items-end gap-x-4 gap-y-1">
                <span className="text-sm text-[#77837E] line-through">
                  通常 月額1,000円
                </span>
                <span className="font-serif text-4xl font-bold text-[#C97855] sm:text-5xl">
                  月額50円
                </span>
              </div>
              <p className="mt-3 text-xs leading-6 text-[#62736C] sm:text-sm">
                2026年9月1日以降の新規登録は月額1,000円となります。
              </p>
            </div>

            <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap">
              <a
                href="#checkout"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#C97855] px-7 text-base font-bold text-white shadow-[0_16px_34px_rgba(201,120,85,0.24)] transition hover:-translate-y-0.5 hover:bg-[#B96C4B]"
              >
                8/31まで月50円で参加
              </a>
              <a
                href="#reviews"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#20372F]/15 bg-white px-7 text-base font-bold text-[#20372F]"
              >
                口コミを見る
              </a>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2">
              {["匿名で参加", "読むだけOK", "退会はいつでも"].map((item) => (
                <div
                  key={item}
                  className="flex min-h-16 flex-col items-center justify-center rounded-2xl border border-[#20372F]/10 bg-white/85 px-2 text-center text-[11px] font-bold leading-5 text-[#53665E] sm:text-sm"
                >
                  <Check className="mb-1 h-4 w-4 text-[#4F7C7D]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="overflow-hidden rounded-[28px] border border-white bg-white p-2 shadow-[0_24px_70px_rgba(32,55,47,0.13)] sm:rounded-[36px] sm:p-3">
              <Image
                src="/hero.png"
                alt="こころの居場所を表す温かい部屋"
                width={1200}
                height={900}
                priority
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="aspect-[4/3] w-full rounded-[22px] object-cover sm:rounded-[29px]"
              />
            </div>

            <div className="relative -mt-6 ml-4 max-w-[280px] rounded-2xl border border-[#20372F]/10 bg-white p-4 shadow-xl sm:absolute sm:-bottom-7 sm:-left-7 sm:mt-0 sm:rounded-3xl sm:p-5">
              <p className="text-[10px] font-bold tracking-[0.18em] text-[#4F7C7D] sm:text-xs">
                ここにいていい
              </p>
              <p className="mt-1.5 font-serif text-base font-bold leading-7 sm:text-lg">
                話す日も、読むだけの日も、
                <br />
                あなたのペースで。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#20372F]/10 bg-white px-4 py-7 sm:px-6 sm:py-9 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-3 sm:grid-cols-3">
          {[
            {
              title: "無理に話さなくていい",
              text: "読むだけの参加も歓迎しています。",
            },
            {
              title: "8/31まで月額50円",
              text: "9/1以降の新規登録は月額1,000円です。",
            },
            {
              title: "Stripeで安全に決済",
              text: "カード番号をこのサイトに保存しません。",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-[#F3F7F5] px-4 py-4 text-center sm:px-5"
            >
              <p className="text-sm font-bold">{item.title}</p>
              <p className="mt-1 text-xs leading-5 text-[#62736C]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-4 max-w-3xl text-center text-[11px] leading-5 text-[#718078]">
          こころの居場所は医療サービスではありません。診断・治療・処方は行いません。
        </p>
      </section>

      <section
        id="checkout"
        className="scroll-mt-20 border-b border-[#20372F]/10 bg-[#F2EEE8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold tracking-[0.18em] text-[#A85434] sm:text-sm">
              2026年8月31日23:59までの特別価格
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight sm:text-5xl">
              通常月額1,000円が、
              <br />
              今なら月額50円。
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#62736C] sm:text-base sm:leading-8">
              必要事項を入力すると、このページ内で参加手続きを完了できます。
              9月1日以降の新規登録は月額1,000円です。
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:gap-8">
            <aside className="rounded-[28px] bg-[#20372F] p-6 text-white shadow-[0_22px_60px_rgba(32,55,47,0.18)] sm:p-8 lg:sticky lg:top-24">
              <p className="text-xs font-bold tracking-[0.13em] text-[#BED3CB]">
                こころの居場所 メンバーシップ
              </p>

              <div className="mt-5 rounded-2xl bg-white/10 p-4">
                <p className="text-xs font-bold text-[#F1C8B5]">
                  8月31日までの早期登録特典
                </p>
                <p className="mt-2 text-sm text-[#D9E5E0] line-through">
                  通常 月額1,000円
                </p>
                <div className="mt-1 flex items-end gap-2">
                  <span className="font-serif text-6xl font-bold leading-none">
                    ¥50
                  </span>
                  <span className="pb-1 text-sm text-[#D9E5E0]">/ 月</span>
                </div>
              </div>

              <p className="mt-4 text-sm leading-7 text-[#D9E5E0]">
                2026年9月1日以降に新規登録する場合は、月額1,000円となります。
              </p>

              <ul className="mt-7 space-y-3">
                {planItems.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10">
                      <Check className="h-3.5 w-3.5 text-[#CFE0D9]" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex items-start gap-3 rounded-2xl bg-white/10 p-4 text-xs leading-6 text-[#E3ECE8] sm:text-sm">
                <LockKeyhole className="mt-0.5 h-5 w-5 shrink-0" />
                <span>
                  決済情報はStripeが暗号化して取り扱います。
                  このサイト側でカード番号を保持しません。
                </span>
              </div>
            </aside>

            <div>
              <div className="mb-3 rounded-2xl border border-[#C97855]/20 bg-[#FFF8F4] px-4 py-3 text-center text-xs font-bold leading-5 text-[#A85434] sm:text-sm">
                決済欄に「月額50円」と表示されることをご確認ください。
              </div>
              <div className="checkout-card overflow-hidden rounded-[28px] border border-[#20372F]/10 bg-white p-2 shadow-[0_22px_60px_rgba(32,55,47,0.09)] sm:p-5">
                <EmbeddedCheckoutSection />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="reviews"
        className="scroll-mt-20 border-b border-[#20372F]/10 bg-[#E9F1EE]/60 py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-bold tracking-[0.18em] text-[#4F7C7D] sm:text-sm">
              参加者の口コミ
            </p>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl font-bold leading-tight sm:text-5xl">
              「相談できる場所がある」
              <br />
              それだけで、少し楽になる。
            </h2>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-[#62736C] sm:text-base sm:leading-8">
              さまざまな年代の方が、それぞれのペースで参加しています。
            </p>
          </div>

          <div className="review-scroller mt-9 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-5 sm:px-6 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-3 lg:px-8">
            {testimonials.map((testimonial) => (
              <article
                key={`${testimonial.profile}-${testimonial.title}`}
                className="min-w-[86%] snap-center rounded-[24px] border border-[#20372F]/10 bg-white p-5 shadow-[0_16px_42px_rgba(32,55,47,0.07)] sm:min-w-[380px] sm:p-6 md:min-w-0"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-bold text-[#63746C]">
                    {testimonial.profile}
                  </p>
                  <div
                    className="flex gap-0.5"
                    aria-label={`5点満点中${testimonial.rating}点`}
                  >
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        className={`h-4 w-4 ${
                          index < testimonial.rating
                            ? "fill-[#D99A52] text-[#D99A52]"
                            : "fill-[#E7E1D9] text-[#E7E1D9]"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <h3 className="mt-4 text-base font-bold leading-7 sm:text-lg">
                  {testimonial.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#62736C]">
                  「{testimonial.text}」
                </p>
              </article>
            ))}
          </div>

          <p className="px-4 text-[11px] leading-5 text-[#718078] sm:px-6 lg:px-8">
            ※個人の感想です。感じ方には個人差があります。掲載内容については、
            実際の許諾状況に合わせてご確認ください。
          </p>
        </div>
      </section>

      <section
        id="features"
        className="scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-[0.18em] text-[#4F7C7D] sm:text-sm">
              私たちが届けたいこと
            </p>
            <h2 className="mt-3 font-serif text-4xl font-bold leading-[1.15] sm:text-5xl">
              話せる。
              <br />
              読める。
              <br />
              支え合える。
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#62736C] sm:text-base sm:leading-8">
              メインは、心や人間関係の悩み、発達障害の特性による生きづらさを持つ人たちの相互支援コミュニティです。
              その中で、定期的に役立つ記事や、精神科・薬に関する参考情報も提供します。
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, badge, title, text }) => (
              <article
                key={title}
                className="rounded-[24px] border border-[#20372F]/10 bg-white p-5 shadow-[0_14px_36px_rgba(32,55,47,0.05)] sm:p-7"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#DDEBE7] text-[#426F70]">
                    <Icon className="h-5 w-5" />
                  </span>
                  {badge ? (
                    <span className="rounded-full bg-[#FFF0E8] px-3 py-1 text-[10px] font-bold text-[#A85C3D]">
                      {badge}
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-5 text-lg font-bold leading-7">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#62736C]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#20372F]/10 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-xs font-bold tracking-[0.18em] text-[#4F7C7D] sm:text-sm">
              よくある質問
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold sm:text-5xl">
              FAQ
            </h2>
          </div>

          <div className="mt-8 divide-y divide-[#20372F]/10 overflow-hidden rounded-[24px] border border-[#20372F]/10 bg-white">
            {faqs.map(({ question, answer }) => (
              <details key={question} className="group p-5 sm:p-7">
                <summary className="cursor-pointer list-none font-bold leading-7">
                  <span className="flex items-start justify-between gap-4">
                    <span>Q. {question}</span>
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-xl text-[#4F7C7D] transition group-open:rotate-45"
                    >
                      ＋
                    </span>
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-[#62736C] sm:text-base sm:leading-8">
                  A. {answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#20372F] px-4 py-16 text-center text-white sm:px-6 sm:py-20 lg:px-8">
        <ShieldCheck className="mx-auto h-9 w-9 text-[#BCD3CA]" />
        <p className="mt-5 text-xs font-bold tracking-[0.14em] text-[#F1C8B5]">
          2026年8月31日までの特別価格
        </p>
        <h2 className="mt-3 font-serif text-3xl font-bold leading-tight sm:text-5xl">
          通常月額1,000円が、
          <br />
          今なら月額50円。
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#D6E1DD] sm:text-base sm:leading-8">
          無理に話さなくて大丈夫です。まずは読むだけでも参加できます。
        </p>
        <a
          href="#checkout"
          className="mt-8 inline-flex min-h-14 items-center justify-center rounded-full bg-[#C97855] px-8 font-bold text-white"
        >
          8/31まで月50円で参加
        </a>
      </section>

      <footer className="bg-[#172A24] px-4 py-9 text-center text-[11px] leading-6 text-[#B8C9C2] sm:px-6 sm:text-xs">
        <p>© 2026 こころの居場所</p>
        <p className="mx-auto mt-2 max-w-3xl">
          こころの居場所は医療サービスではありません。診断・治療・処方は行っていません。
          緊急時や症状が強い場合は、医療機関や専門窓口へご相談ください。
        </p>
      </footer>

      <div className="mobile-sticky-cta fixed inset-x-0 bottom-0 z-50 border-t border-[#20372F]/10 bg-white/95 px-3 pt-2.5 shadow-[0_-12px_32px_rgba(32,55,47,0.12)] backdrop-blur lg:hidden">
        <a
          href="#checkout"
          className="flex min-h-12 w-full items-center justify-center rounded-full bg-[#C97855] px-5 text-sm font-bold text-white"
        >
          8/31まで月50円で参加
        </a>
      </div>
    </main>
  );
}
