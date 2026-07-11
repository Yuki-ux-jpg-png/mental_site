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
      cache: "no-store",
    });

    const data = (await response.json()) as {
      clientSecret?: string;
      error?: string;
    };

    if (!response.ok || !data.clientSecret) {
      throw new Error(
        data.error ??
          "決済画面を読み込めませんでした。時間をおいて再度お試しください。",
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
      <div
        role="alert"
        className="m-2 rounded-2xl bg-[#FFF1EA] p-5 text-sm leading-7 text-[#75432F] sm:m-0 sm:p-6"
      >
        Stripeの公開可能キーが設定されていません。Vercelの環境変数に
        <code className="mx-1 break-all rounded bg-white px-1.5 py-1 text-xs">
          NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
        </code>
        を追加して、再デプロイしてください。
      </div>
    );
  }

  return (
    <div className="embedded-checkout-shell min-h-[540px] w-full">
      <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
}
