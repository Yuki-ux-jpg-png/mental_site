"use client";

import { useCallback, useMemo } from "react";
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripePromise = publishableKey ? loadStripe(publishableKey) : null;

export default function EmbeddedCheckoutSection() {
  const fetchClientSecret = useCallback(async () => {
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = (await response.json()) as {
      clientSecret?: string;
      error?: string;
    };

    if (!response.ok || !data.clientSecret) {
      throw new Error(
        data.error ?? "決済画面を読み込めませんでした。時間をおいて再度お試しください。",
      );
    }

    return data.clientSecret;
  }, []);

  const options = useMemo(
    () => ({
      fetchClientSecret,
    }),
    [fetchClientSecret],
  );

  if (!stripePromise) {
    return (
      <div className="rounded-2xl bg-[#FFF4EE] p-6 text-sm leading-7 text-[#75432F]">
        Stripeの公開可能キーが設定されていません。
        Vercelの環境変数に
        <code className="mx-1 rounded bg-white px-1 py-0.5">
          NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
        </code>
        を追加して、再デプロイしてください。
      </div>
    );
  }

  return (
    <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
      <EmbeddedCheckout />
    </EmbeddedCheckoutProvider>
  );
}
