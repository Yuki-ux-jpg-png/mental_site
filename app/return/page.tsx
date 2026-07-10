import Link from "next/link";
import Stripe from "stripe";

export const dynamic = "force-dynamic";

type ReturnPageProps = {
  searchParams: Promise<{
    session_id?: string | string[];
  }>;
};

export default async function ReturnPage({
  searchParams,
}: ReturnPageProps) {
  const params = await searchParams;
  const rawSessionId = params.session_id;
  const sessionId = Array.isArray(rawSessionId)
    ? rawSessionId[0]
    : rawSessionId;

  if (!sessionId) {
    return (
      <ReturnShell
        title="決済情報を確認できませんでした"
        text="URLに決済情報が含まれていません。トップページからもう一度お試しください。"
      />
    );
  }

  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    return (
      <ReturnShell
        title="設定を確認してください"
        text="STRIPE_SECRET_KEY が設定されていません。"
      />
    );
  }

  try {
    const stripe = new Stripe(secretKey);
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const customerEmail = session.customer_details?.email;

    if (session.status !== "complete") {
      return (
        <ReturnShell
          title="決済はまだ完了していません"
          text="決済画面へ戻り、もう一度お手続きください。"
          buttonLabel="決済画面へ戻る"
          buttonHref="/#checkout"
        />
      );
    }

    return (
      <main className="min-h-screen bg-[#FAFAF7] px-5 py-16 text-[#20372F] md:py-24">
        <section className="mx-auto max-w-2xl rounded-[30px] border border-[#20372F]/10 bg-white p-8 text-center shadow-[0_24px_70px_rgba(32,55,47,0.10)] md:p-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E8F0ED] text-3xl">
            ✓
          </div>
          <p className="mt-6 text-sm font-bold tracking-[0.15em] text-[#5D8A8E]">
            PAYMENT COMPLETE
          </p>
          <h1 className="mt-3 font-serif text-3xl font-bold md:text-5xl">
            ご参加ありがとうございます
          </h1>
          <p className="mt-6 leading-8 text-[#64736C]">
            こころの居場所への参加手続きが完了しました。
            {customerEmail
              ? ` ${customerEmail} 宛に、参加方法をご案内します。`
              : " 登録メールアドレス宛に、参加方法をご案内します。"}
          </p>
          <p className="mt-4 leading-8 text-[#64736C]">
            無理に投稿しなくても大丈夫です。まずは読むだけでも、安心してご利用ください。
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex rounded-full bg-[#20372F] px-7 py-4 font-bold text-white"
          >
            トップページへ戻る
          </Link>
        </section>
      </main>
    );
  } catch (error) {
    console.error("Stripe return page error:", error);

    return (
      <ReturnShell
        title="決済情報の確認に失敗しました"
        text="時間をおいて再度お試しいただくか、サポートへお問い合わせください。"
      />
    );
  }
}

function ReturnShell({
  title,
  text,
  buttonLabel = "トップページへ戻る",
  buttonHref = "/",
}: {
  title: string;
  text: string;
  buttonLabel?: string;
  buttonHref?: string;
}) {
  return (
    <main className="min-h-screen bg-[#FAFAF7] px-5 py-16 text-[#20372F] md:py-24">
      <section className="mx-auto max-w-2xl rounded-[30px] border border-[#20372F]/10 bg-white p-8 text-center shadow-[0_24px_70px_rgba(32,55,47,0.10)] md:p-12">
        <h1 className="font-serif text-3xl font-bold md:text-4xl">{title}</h1>
        <p className="mt-5 leading-8 text-[#64736C]">{text}</p>
        <Link
          href={buttonHref}
          className="mt-8 inline-flex rounded-full bg-[#20372F] px-7 py-4 font-bold text-white"
        >
          {buttonLabel}
        </Link>
      </section>
    </main>
  );
}
