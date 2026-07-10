import Image from "next/image";
import {
  BookOpen,
  Check,
  HeartHandshake,
  LockKeyhole,
  MessageCircle,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import EmbeddedCheckoutSection from "./components/EmbeddedCheckoutSection";

const benefits = [
  {
    icon: MessageCircle,
    title: "話さなくても大丈夫",
    text: "気持ちを言葉にできない日は、ほかの人の投稿を読むだけでも参加できます。",
  },
  {
    icon: UsersRound,
    title: "似た悩みを持つ人とつながる",
    text: "心のつらさ、人間関係、発達障害の特性による生きづらさを安心できる距離感で共有できます。",
  },
  {
    icon: ShieldCheck,
    title: "否定や説教をしない",
    text: "無理な励ましや決めつけを避け、お互いのペースを尊重する穏やかなコミュニティです。",
  },
  {
    icon: BookOpen,
    title: "心を少し軽くする情報",
    text: "人間関係、不安、受診や相談先について考えるときの参考情報を分かりやすく届けます。",
  },
];

const included = [
  "会員限定の相互支援コミュニティ",
  "ニックネームでの参加",
  "読むだけでの参加",
  "心を楽にする記事・参考情報",
  "いつでも退会可能",
];

const faqs = [
  [
    "顔出しや本名は必要ですか？",
    "必要ありません。ニックネームで参加できます。",
  ],
  [
    "話すのが苦手でも参加できますか？",
    "はい。読むだけの参加も歓迎しています。投稿を無理に求めることはありません。",
  ],
  [
    "途中で退会できますか？",
    "いつでも退会できます。無理に続ける必要はありません。",
  ],
  [
    "医療サービスですか？",
    "いいえ。こころの居場所は診断・治療・処方を行う医療サービスではありません。症状が強い場合や緊急時は、医療機関や専門窓口へご相談ください。",
  ],
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FAFAF7] text-[#20372F]">
      <header className="sticky top-0 z-40 border-b border-[#20372F]/10 bg-[#FAFAF7]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8F0ED]">
              <HeartHandshake className="h-5 w-5 text-[#5D8A8E]" />
            </span>
            <span>
              <span className="block font-bold tracking-[0.08em]">
                こころの居場所
              </span>
              <span className="block text-[11px] text-[#64736C]">
                相互支援コミュニティ
              </span>
            </span>
          </a>

          <a
            href="#checkout"
            className="rounded-full bg-[#20372F] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#2d4a40]"
          >
            月50円で参加
          </a>
        </div>
      </header>

      <section
        id="top"
        className="relative border-b border-[#20372F]/10 px-5 py-14 md:px-8 md:py-24"
      >
        <div className="pointer-events-none absolute -left-20 top-8 h-64 w-64 rounded-full bg-[#D9E8F5]/70 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#E8F0ED] blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-[#5D8A8E]/25 bg-white/70 px-4 py-2 text-sm font-bold text-[#5D8A8E]">
              ニックネーム参加OK・読むだけOK・いつでも退会可能
            </p>

            <h1 className="font-serif text-5xl font-bold leading-[1.25] tracking-tight md:text-7xl">
              ひとりで
              <br />
              抱えなくていい。
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#4e625a] md:text-lg md:leading-9">
              心や人間関係の悩み、発達障害の特性による生きづらさを抱える人が、
              安心できる距離感でつながる月50円の相互支援コミュニティです。
              元気なふりをしなくても、うまく話せなくても大丈夫です。
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#checkout"
                className="inline-flex items-center justify-center rounded-full bg-[#C97855] px-8 py-4 text-base font-bold text-white shadow-[0_16px_36px_rgba(201,120,85,0.25)] transition hover:-translate-y-0.5 hover:bg-[#b86c4b]"
              >
                このページで月50円の決済へ
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-full border border-[#20372F]/15 bg-white px-8 py-4 text-base font-bold text-[#20372F]"
              >
                できることを見る
              </a>
            </div>

            <div className="mt-8 grid gap-3 text-sm text-[#50645c] sm:grid-cols-3">
              {["ニックネームOK", "読むだけOK", "いつでも退会"].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-2xl bg-white/75 px-4 py-3"
                  >
                    <Check className="h-4 w-4 text-[#5D8A8E]" />
                    <span className="font-medium">{item}</span>
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[34px] border border-white/80 bg-white p-3 shadow-[0_30px_80px_rgba(32,55,47,0.14)]">
              <Image
                src="/hero.png"
                alt="こころの居場所を表す温かい部屋"
                width={1200}
                height={900}
                priority
                className="aspect-[4/3] w-full rounded-[26px] object-cover"
              />
            </div>

            <div className="absolute -bottom-7 -left-5 max-w-[280px] rounded-3xl border border-[#20372F]/10 bg-white p-5 shadow-xl md:-left-10">
              <p className="text-xs font-bold tracking-[0.16em] text-[#5D8A8E]">
                ここにいていい
              </p>
              <p className="mt-2 font-serif text-lg font-bold leading-7">
                話す日も、読むだけの日も、
                <br />
                あなたのペースで。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="checkout" className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-bold tracking-[0.18em] text-[#5D8A8E]">
              このページ内で安全に決済
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold md:text-5xl">
              月50円で、心の居場所を。
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#64736C]">
              下の決済欄はStripeが安全に処理します。
              カード情報がこのサイトのサーバーへ保存されることはありません。
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <aside className="rounded-[30px] bg-[#20372F] p-7 text-white shadow-[0_24px_70px_rgba(32,55,47,0.18)] md:p-9 lg:sticky lg:top-28">
              <p className="text-sm font-bold tracking-[0.14em] text-[#bdd5cb]">
                こころの居場所 メンバーシップ
              </p>

              <div className="mt-5 flex items-end gap-2">
                <span className="font-serif text-6xl font-bold">¥50</span>
                <span className="pb-2 text-[#d8e4df]">/ 月</span>
              </div>

              <p className="mt-3 text-sm text-[#d8e4df]">
                1日あたり約2円。いつでも退会できます。
              </p>

              <ul className="mt-8 space-y-4">
                {included.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10">
                      <Check className="h-3.5 w-3.5 text-[#cfe1d9]" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-start gap-3 rounded-2xl bg-white/10 p-4 text-sm leading-6 text-[#e3ece8]">
                <LockKeyhole className="mt-0.5 h-5 w-5 shrink-0" />
                <span>
                  決済情報はStripeが暗号化して取り扱います。
                  このサイト側でカード番号を保持しません。
                </span>
              </div>
            </aside>

            <div className="overflow-hidden rounded-[30px] border border-[#20372F]/10 bg-white p-3 shadow-[0_24px_70px_rgba(32,55,47,0.10)] md:p-6">
              <EmbeddedCheckoutSection />
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="border-y border-[#20372F]/10 bg-[#E8F0ED]/55 px-5 py-20 md:px-8 md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold tracking-[0.18em] text-[#5D8A8E]">
              私たちが大切にしていること
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight md:text-5xl">
              話せる。読める。
              <br />
              支え合える。
            </h2>
            <p className="mt-6 leading-8 text-[#64736C]">
              助ける人と助けられる人を固定せず、お互いの経験や気持ちを分かち合う場所です。
              参加の仕方は、その日の状態に合わせて選べます。
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {benefits.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-[26px] border border-white/80 bg-white/90 p-7 shadow-[0_14px_38px_rgba(32,55,47,0.06)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D9E8F5] text-[#426f73]">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-[#64736C]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-bold tracking-[0.18em] text-[#5D8A8E]">
              よくある質問
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold md:text-5xl">
              FAQ
            </h2>
          </div>

          <div className="mt-10 divide-y divide-[#20372F]/10 overflow-hidden rounded-[28px] border border-[#20372F]/10 bg-white">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group p-6 md:p-8">
                <summary className="cursor-pointer list-none font-bold">
                  <span className="flex items-center justify-between gap-4">
                    <span>Q. {question}</span>
                    <span className="text-xl text-[#5D8A8E] transition group-open:rotate-45">
                      ＋
                    </span>
                  </span>
                </summary>
                <p className="mt-4 leading-8 text-[#64736C]">A. {answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#20372F] px-5 py-16 text-center text-white md:px-8 md:py-20">
        <p className="font-serif text-3xl font-bold leading-tight md:text-5xl">
          無理に話さなくていい。
          <br />
          まずは読むだけでも。
        </p>
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#d6e1dd]">
          心がつらいときに、ひとりで抱え込まないための選択肢を。
        </p>
        <a
          href="#checkout"
          className="mt-8 inline-flex rounded-full bg-[#C97855] px-8 py-4 font-bold text-white"
        >
          月50円で参加手続きへ
        </a>
      </section>

      <footer className="bg-[#182b25] px-5 py-8 text-center text-xs leading-6 text-[#b8c9c2]">
        <p>© 2026 こころの居場所</p>
        <p className="mx-auto mt-2 max-w-3xl">
          こころの居場所は医療サービスではありません。診断・治療・処方は行っていません。
          緊急時や症状が強い場合は、医療機関や専門窓口へご相談ください。
        </p>
      </footer>
    </main>
  );
}
