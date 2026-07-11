import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function removeTrailingSlash(value: string) {
  return value.replace(/\/+$/, "");
}

export async function POST(request: NextRequest) {
  try {
    const secretKey = process.env.STRIPE_SECRET_KEY;
    const priceId = process.env.STRIPE_PRICE_ID;
    const configuredSiteUrl = process.env.SITE_URL;
    const requestOrigin = request.headers.get("origin");

    if (!secretKey) {
      return NextResponse.json(
        { error: "STRIPE_SECRET_KEY が設定されていません。" },
        { status: 500 },
      );
    }

    if (!priceId) {
      return NextResponse.json(
        { error: "STRIPE_PRICE_ID が設定されていません。" },
        { status: 500 },
      );
    }

    const siteUrl = configuredSiteUrl || requestOrigin;

    if (!siteUrl || !/^https?:\/\//.test(siteUrl)) {
      return NextResponse.json(
        { error: "SITE_URL が正しく設定されていません。" },
        { status: 500 },
      );
    }

    const stripe = new Stripe(secretKey);

    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded_page",
      mode: "subscription",
      locale: "ja",
      submit_type: "subscribe",
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      return_url: `${removeTrailingSlash(
        siteUrl,
      )}/return?session_id={CHECKOUT_SESSION_ID}`,
      billing_address_collection: "auto",
      phone_number_collection: {
        enabled: false,
      },
      custom_text: {
        submit: {
          message:
            "ニックネーム参加OK・読むだけOK・いつでも退会できます。",
        },
      },
      metadata: {
        service: "mental-site",
        plan: "monthly-membership",
      },
    });

    if (!session.client_secret) {
      return NextResponse.json(
        { error: "Stripeから決済用情報を取得できませんでした。" },
        { status: 500 },
      );
    }

    return NextResponse.json({
      clientSecret: session.client_secret,
    });
  } catch (error) {
    console.error("Stripe Checkout Session error:", error);

    const message =
      error instanceof Error
        ? error.message
        : "決済画面の作成に失敗しました。";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
