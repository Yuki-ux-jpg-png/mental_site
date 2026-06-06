import { Heart, Leaf, MessageCircle, Shield, Sparkles } from 'lucide-react';

const worries = [
  ['朝起きるのがつらい', '無理に元気なふりをしなくても大丈夫。'],
  ['誰にも本音を話せない', '言葉にならない気持ちも、そのままで。'],
  ['将来が不安で仕方ない', '先のことを一緒に少しずつ見つめます。'],
  ['孤独を感じる', '同じような経験を持つ人とつながれます。'],
  ['自己否定が止まらない', '比べず、責めず、休むことを大切に。'],
  ['同じ経験の人と話したい', '安心できる距離感で交流できます。'],
];

const features = [
  ['安心して話せる居場所', '否定や説教、無理な励ましをしない、穏やかなコミュニティです。', Shield],
  ['自分のペースで参加', '読むだけ、時々話すだけでも大丈夫。参加の形は自由です。', Leaf],
  ['定期オンライン交流会', '将来的に少人数で安心して話せる交流会の開催を予定しています。', MessageCircle],
];

const faqs = [
  ['顔出しは必要ですか？', '必要ありません。ニックネームで参加できます。'],
  ['途中で退会できますか？', 'いつでも退会できます。無理に続ける必要はありません。'],
  ['医療サービスですか？', 'いいえ。こころの居場所は医療・診断・治療を行うサービスではありません。緊急時は医療機関や相談窓口をご利用ください。'],
  ['話すのが苦手でも参加できますか？', 'はい。読むだけの参加も歓迎しています。'],
];

export default function Page() {
  return (
    <main>
      <nav className="fixed top-0 z-50 w-full border-b border-white/60 bg-cream/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">
          <a href="#top" className="font-serif text-xl tracking-wide text-deep">こころの居場所</a>
          <div className="hidden items-center gap-8 text-sm text-muted md:flex">
            <a href="#about">できること</a>
            <a href="#price">料金</a>
            <a href="#faq">FAQ</a>
          </div>
          <a href="#price" className="rounded-full bg-teal px-5 py-3 text-sm font-medium text-white shadow-card">コミュニティに参加する</a>
        </div>
      </nav>

      <section id="top" className="min-h-screen bg-cream px-6 pt-32 md:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 py-16 md:grid-cols-[0.9fr_1.1fr] md:py-24">
          <div>
            <p className="mb-6 inline-flex rounded-full bg-sage px-5 py-2 text-sm text-muted">オンラインコミュニティ</p>
            <h1 className="font-serif text-5xl leading-tight tracking-wide text-deep md:text-7xl">ひとりで<br />抱えなくていい。</h1>
            <p className="mt-8 max-w-xl text-lg leading-9 text-muted">
              同じ悩みを抱える仲間と、安心してつながれるオンラインコミュニティ。
              焦らなくていい。無理をしなくていい。あなたのペースで過ごせる居場所です。
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#price" className="rounded-full bg-teal px-8 py-4 text-center font-medium text-white shadow-card">コミュニティに参加する</a>
              <a href="#about" className="rounded-full border border-deep/10 bg-white px-8 py-4 text-center font-medium text-deep">詳しく見る</a>
            </div>
            
            <div className="mt-8 rounded-3xl bg-white/80 p-5 shadow-card">
              <p className="text-4xl font-bold text-deep md:text-5xl">550名以上</p>
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
              <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1600&auto=format&fit=crop" alt="穏やかな部屋" className="h-[430px] w-full object-cover md:h-[540px]" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream px-6 py-24 md:px-10">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="font-serif text-4xl text-deep md:text-5xl">こんなお悩みはありませんか？</h2>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {worries.map(([title, text]) => (
              <div key={title} className="rounded-large bg-white p-8 text-left shadow-card">
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
              私たちが大切にしていること
            </p>
          
            <h2 className="font-serif text-5xl leading-tight text-deep md:text-7xl">
              否定しない。<br />
              比べない。<br />
              無理をしない。
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {features.map(([title, text, Icon]) => (
              <div key={title as string} className="rounded-large bg-cream p-8 shadow-card">
                <Icon className="mb-6 h-9 w-9 text-teal" />
                <h3 className="text-xl font-medium">{title as string}</h3>
                <p className="mt-4 leading-8 text-muted">{text as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="price" className="bg-cream px-6 py-24 md:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-serif text-4xl text-deep md:text-5xl">料金</h2>
          <p className="mt-5 text-muted">まずは小さく、安心して始められるプランです。</p>
          <div className="mx-auto mt-12 max-w-md rounded-[36px] bg-white p-8 shadow-soft">
            <p className="rounded-full bg-sage px-4 py-2 text-sm text-muted">月額メンバーシップ</p>
            <div className="mt-8"><span className="text-5xl font-semibold text-deep">¥50</span><span className="text-muted"> / 月</span></div>
            <ul className="mt-8 space-y-4 text-left leading-7 text-muted">
              <li>・会員限定コミュニティ参加</li>
              <li>・今後、オンライン交流会の開催を予定</li>
              <li>・読むだけ参加OK</li>
              <li>・いつでも退会可能</li>
            </ul>
            <a href="#contact" className="mt-8 block rounded-full bg-teal px-8 py-4 font-medium text-white">申し込みについて相談する</a>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-blue/60 px-6 py-24 md:px-10">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-serif text-4xl text-deep md:text-5xl">FAQ</h2>
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
          <h2 className="font-serif text-4xl leading-snug md:text-5xl">安心して過ごせる場所を<br />探しているあなたへ</h2>
        </div>
      </section>

      <footer className="bg-cream px-6 py-10 text-center text-sm text-muted md:px-10">
        <p>© 2026 こころの居場所</p>
      </footer>
    </main>
  );
}
