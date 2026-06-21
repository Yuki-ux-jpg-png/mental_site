import type { LucideIcon } from 'lucide-react';
import {
  Briefcase,
  Heart,
  Leaf,
  MessageCircle,
  Shield,
  Sparkles,
  User,
  Users,
} from 'lucide-react';

const stripeUrl = 'https://buy.stripe.com/5kQaEXbEcci505s95m6c003';

const worries = [
  ['朝起きるのがつらい', '無理に元気なふりをしなくても大丈夫。'],
  ['誰にも本音を話せない', '言葉にならない気持ちも、そのままで。'],
  ['将来が不安で仕方ない', '先のことを一緒に少しずつ見つめます。'],
  ['孤独を感じる', '同じような経験を持つ人とつながれます。'],
  ['自己否定が止まらない', '比べず、責めず、休むことを大切に。'],
  ['同じ経験の人と話したい', '安心できる距離感で交流できます。'],
  ['モラハラに傷ついている', '否定され続けた心を、少しずつ休ませる場所です。'],
  ['家庭やパートナーとの関係がつらい', '安心して本音を置ける場所を、一緒に見つけていきます。'],
  ['職場の人間関係が苦しい', '無理に我慢し続けなくてもいい。気持ちを整理するきっかけになります。'],
  ['毎日仕事に行くのが怖い', '職場での振る舞い方や心の守り方を、少しずつ考えられます。'],
  ['誰にも相談できず抱え込んでいる', 'ひとりで耐え続ける前に、安心できる距離でつながれます。'],
  ['自分が悪いのか分からなくなる', '責められ続けた気持ちを、否定せずに受け止めます。'],
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
    text: '否定や説教、無理な励ましをしない、穏やかなコミュニティです。',
    icon: Shield,
  },
  {
    title: '1日1回の占いサービス',
    text: '毎日ひとつ、気持ちを整えるきっかけになる占いをお届けします。',
    icon: Sparkles,
    label: '新サービス',
  },
  {
    title: '1人1人に向けた人生相談',
    text: 'あなたの状況や悩みに合わせて、個別に言葉を届ける相談サービスです。',
    icon: User,
    label: '新サービス',
  },
  {
    title: '自分のペースで参加',
    text: '読むだけ、時々話すだけでも大丈夫。参加の形は自由です。',
    icon: Leaf,
  },
  {
    title: '交流会を企画中',
    text: '将来的に少人数で安心して話せる交流会の開催を予定しています。',
    icon: MessageCircle,
    label: '準備中',
  },
  {
    title: '職業紹介サポートを準備中',
    text: '将来的に、心の不調を抱える方向けの働き方や職業紹介の支援を検討しています。',
    icon: Briefcase,
    label: '将来構想',
  },
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
    '占いサービスはどんな内容ですか？',
    '1日1回、気持ちを整えるきっかけになる占いをお届けします。未来を断定するものではなく、日々を少し前向きに過ごすためのコンテンツです。',
  ],
  [
    '人生相談はどのように受けられますか？',
    '参加後、あなたの状況や悩みに合わせて、個別に言葉を届ける相談サービスを利用できます。',
  ],
  [
    '職業紹介は今すぐ受けられますか？',
    '現時点では準備中です。将来的に、心の不調を抱える方が無理なく働ける選択肢を広げられるよう検討しています。',
  ],
  [
    '医療サービスですか？',
    'いいえ。こころの居場所は医療・診断・治療を行うサービスではありません。緊急時は医療機関や相談窓口をご利用ください。',
  ],
  [
    '話すのが苦手でも参加できますか？',
    'はい。読むだけの参加も歓迎しています。',
  ],
];

export default function Page() {
  return (
    <main>
      <nav className="fixed left-0 top-0 z-50 w-full px-4 pt-4 md:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/70 bg-cream/85 px-4 py-3 shadow-[0_18px_60px_rgba(31,51,44,0.10)] backdrop-blur-xl md:px-5">
          <a href="#top" className="group flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sage text-teal shadow-card">
              <svg
                width="22"
                height="22"
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

            <span className="flex flex-col leading-tight">
              <span className="font-serif text-lg tracking-wide text-deep md:text-xl">
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
            className="rounded-full bg-teal px-5 py-3 text-sm font-medium text-white shadow-card transition hover:-translate-y-0.5 hover:opacity-90 md:px-6"
          >
            参加する
          </a>
        </div>
      </nav>

      <section id="top" className="min-h-screen bg-cream px-6 pt-32 md:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 py-16 md:grid-cols-[0.9fr_1.1fr] md:py-24">
          <div>
            <p className="mb-6 inline-flex rounded-full bg-sage px-5 py-2 text-sm text-muted">
              オンラインコミュニティ
            </p>

            <h1 className="font-serif text-5xl leading-tight tracking-wide text-deep md:text-7xl">
              ひとりで<br />
              抱えなくていい。
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-9 text-muted">
              同じ悩みを抱える仲間と、安心してつながれるオンラインコミュニティ。
              焦らなくていい。無理をしなくていい。あなたのペースで過ごせる居場所です。
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={stripeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-teal px-8 py-4 text-center font-medium text-white shadow-card"
              >
                コミュニティに参加する
              </a>

              <a
                href="#about"
                className="rounded-full border border-deep/10 bg-white px-8 py-4 text-center font-medium text-deep"
              >
                詳しく見る
              </a>
            </div>

            <div className="mt-8 rounded-3xl bg-white/80 p-5 shadow-card">
              <p className="text-5xl font-bold text-teal md:text-6xl">550+</p>
              <p className="mt-2 text-xl text-deep">名以上が参加中</p>
              <p className="mt-2 text-sm leading-7 text-muted">
                すでに同じような悩みや生きづらさを抱える方々が参加しています。
              </p>
            </div>

            <p className="mt-6 text-sm leading-7 text-muted">
              ※医療・診断・治療を行うサービスではありません。緊急時は医療機関や専門窓口へご相談ください。
            </p>
          </div>

          <div className="relative">
            <div className="absolute -left-8 -top-8 h-44 w-44 rounded-full bg-blue blur-3xl" />

            <div className="relative overflow-hidden rounded-large bg-white shadow-soft">
              <img
                src="/hero.png"
                alt="こころの居場所を表す温かい部屋"
                className="h-[430px] w-full object-cover md:h-[540px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream px-6 py-24 md:px-10">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="font-serif text-4xl text-deep md:text-5xl">
            こんなお悩みはありませんか？
          </h2>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {worries.map(([title, text]) => (
              <div
                key={title}
                className="rounded-large bg-white p-8 text-left shadow-card"
              >
                <Heart className="mb-5 h-7 w-7 text-teal" />
                <h3 className="text-xl font-medium text-deep">{title}</h3>
                <p className="mt-3 leading-7 text-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-sage px-6 py-24 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="mb-8 text-base font-medium tracking-wide text-teal">
              私たちが届けたいこと
            </p>

            <h2 className="font-serif text-5xl leading-tight text-deep md:text-7xl">
              占いも、相談も、<br />
              つながりも。<br />
              あなたのペースで。
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map(({ title, text, icon: Icon, label }) => (
              <div key={title} className="rounded-large bg-cream p-8 shadow-card">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <Icon className="h-9 w-9 text-teal" />
                  {label ? (
                    <span className="rounded-full bg-white px-3 py-1 text-xs text-muted">
                      {label}
                    </span>
                  ) : null}
                </div>

                <h3 className="text-xl font-medium text-deep">{title}</h3>
                <p className="mt-4 leading-8 text-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="price" className="bg-cream px-6 py-24 md:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-serif text-4xl text-deep md:text-5xl">料金</h2>
          <p className="mt-5 text-muted">
            毎日使える安心のメンバーシップです。
          </p>

          <div className="mx-auto mt-12 max-w-md rounded-[36px] bg-white p-8 shadow-soft">
            <p className="rounded-full bg-sage px-4 py-2 text-sm text-muted">
              550名以上が参加中の月額メンバーシップ
            </p>

            <div className="mt-8">
              <span className="text-5xl font-semibold text-deep">¥50</span>
              <span className="text-muted"> / 月</span>
            </div>

            <ul className="mt-8 space-y-4 text-left leading-7 text-muted">
              <li>・550名以上が参加する会員限定コミュニティ</li>
              <li>・1日1回の占いサービス</li>
              <li>・1人1人に向けた人生相談サービス</li>
              <li>・今後、オンライン交流会の開催を予定</li>
              <li>・将来的に職業紹介サポートを検討</li>
              <li>・読むだけ参加OK</li>
              <li>・いつでも退会可能</li>
            </ul>

            <a
              href={stripeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block rounded-full bg-teal px-8 py-4 font-medium text-white"
            >
              コミュニティに参加する
            </a>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-blue/60 px-6 py-24 md:px-10">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-serif text-4xl text-deep md:text-5xl">
            FAQ
          </h2>

          <div className="mt-12 space-y-4">
            {faqs.map(([q, a]) => (
              <div key={q} className="rounded-3xl bg-white p-7 shadow-card">
                <h3 className="font-medium text-deep">Q. {q}</h3>
                <p className="mt-3 leading-8 text-muted">A. {a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-deep px-6 py-24 text-white md:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <Sparkles className="mx-auto mb-8 h-10 w-10 text-sage" />

          <h2 className="font-serif text-4xl leading-snug text-white md:text-5xl">
            <span className="block">安心して過ごせる</span>
            <span className="block">場所を探している</span>
            <span className="block">あなたへ</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/75">
            占い、人生相談、コミュニティを通じて、
            あなたが少しでも安心して過ごせる時間をつくります。
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={stripeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-9 py-4 font-medium text-deep"
            >
              コミュニティに参加する
            </a>

            <div className="flex items-center gap-2 text-sm text-white/70">
              <Users className="h-4 w-4" />
              <span>550名以上が参加中</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-cream px-6 py-10 text-center text-sm text-muted md:px-10">
        <p>© 2026 こころの居場所</p>
        <p className="mt-3">
          医療・診断・治療を行うサービスではありません。
        </p>
      </footer>
    </main>
  );
}
