'use client';

import type { ReactNode } from 'react';

import { track } from '@vercel/analytics';

type TrackedStripeLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  location: string;
};

export default function TrackedStripeLink({
  href,
  children,
  className = '',
  location,
}: TrackedStripeLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => {
        track('Stripe Checkout Click', {
          location,
        });
      }}
    >
      {children}
    </a>
  );
}
