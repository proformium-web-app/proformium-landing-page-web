import type { Metadata } from "next";
import Link from "next/link";
import { FIYAT } from "@/content/fiyatlar";
import { AKTIF_MOR, IADE, MOR, OPERATOR } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Proformium Refund Policy: 14-day money-back guarantee on the annual Pro plan, how to cancel and how refunds are processed by our Merchant of Record.",
  alternates: { canonical: "/refund" },
};

const fiyat = new Intl.NumberFormat("en-US").format(FIYAT.pro.yillik);

/** İade politikası: Polar (ana) / Dodo Payments (yedek) Merchant of Record yapısına uygun. */
export default function RefundPage() {
  const mor = MOR[AKTIF_MOR];
  const yedek = AKTIF_MOR === "polar" ? MOR.dodo : MOR.polar;

  return (
    <>
      <h1 className="text-2xl font-bold text-ink sm:text-3xl">Refund Policy</h1>
      <p>
        This Refund Policy explains how cancellations and refunds work for paid Proformium subscriptions. It is part of
        our <Link href="/terms">Terms of Service</Link>. We want you to pay only if Proformium is useful to you, so we
        keep it simple.
      </p>

      <h2>1. Try before you pay</h2>
      <ul>
        <li>The Free plan is free of charge with no time limit.</li>
        <li>
          The Pro plan can be tried free of charge for {FIYAT.denemeGun} days, once per business. No credit card is
          required and you are never charged automatically when the trial ends.
        </li>
        <li>
          If you decide not to pay, your account simply moves to the Free plan. Nothing is deleted, and you can download all
          of your data as an Excel file from Settings at any time.
        </li>
      </ul>

      <h2>2. What you pay for</h2>
      <p>
        Pro is an annual subscription: TRY {fiyat} per year, VAT included, billed once a year in advance. There is no
        monthly plan. The amount shown at checkout is the amount you pay.
      </p>

      <h2>3. Who processes your payment (Merchant of Record)</h2>
      <p>
        Payments for Proformium are processed by our reseller and Merchant of Record,{" "}
        <a href={mor.site} target="_blank" rel="noopener noreferrer">
          {mor.ad}
        </a>
        . The Merchant of Record is the seller of record for your order: it charges your payment method, issues your
        receipt or invoice, handles applicable sales taxes and VAT, and processes refunds. Your bank or card statement may
        show the Merchant of Record&apos;s name. We may switch to an alternative Merchant of Record (
        <a href={yedek.site} target="_blank" rel="noopener noreferrer">
          {yedek.ad}
        </a>
        ) in the future; this policy applies in the same way.
      </p>

      <h2>4. {IADE.gun}-day money-back guarantee</h2>
      <ul>
        <li>
          If you are not satisfied, you can request a <strong>full refund within {IADE.gun} days</strong> of your first
          annual payment. No reason is required.
        </li>
        <li>
          For renewals, you can request a full refund within {IADE.gun} days of the renewal date if you have not actively
          used the Pro plan after the renewal (for example, you forgot to cancel).
        </li>
        <li>
          After these periods, payments are generally non-refundable, but your subscription remains active until the end of
          the period you paid for.
        </li>
        <li>
          If the Service is unavailable for a significant period because of a problem on our side, we will refund the
          unused portion or extend your subscription, at your choice.
        </li>
        <li>Nothing in this policy limits any rights you have under applicable consumer protection law.</li>
      </ul>

      <h2>5. How to request a refund</h2>
      <ol>
        <li>
          Email <a href={`mailto:${OPERATOR.email}?subject=Refund%20request`}><strong>{OPERATOR.email}</strong></a> with
          the subject &quot;Refund request&quot;, or reply to the receipt you received from {mor.ad}.
        </li>
        <li>Include the email address of your Proformium account and, if possible, your order or receipt number.</li>
        <li>
          We review your request within 2 business days and ask {mor.ad} to issue the refund to your original payment
          method.
        </li>
        <li>
          Once issued, refunds usually appear on your statement within {IADE.yansimaIsGunu} business days, depending on
          your bank.
        </li>
      </ol>
      <p>
        When a refund is issued, your account moves to the Free plan. Your quotes, customer records and the links you sent
        to customers keep working.
      </p>

      <h2>6. Cancelling your subscription</h2>
      <p>
        You can cancel at any time by emailing <a href={`mailto:${OPERATOR.email}`}>{OPERATOR.email}</a> or through the
        customer portal link in your {mor.ad} receipt. Cancellation stops the next renewal; you keep Pro until the end of
        the period you have paid for and are not charged again.
      </p>

      <h2>7. Chargebacks</h2>
      <p>
        If something is wrong with a charge, please contact us first so we can fix it quickly. Opening a chargeback with
        your bank before contacting us may delay the refund.
      </p>

      <h2>8. Contact</h2>
      <p>
        Questions about payments or refunds:{" "}
        <a href={`mailto:${OPERATOR.email}`}>
          <strong>{OPERATOR.email}</strong>
        </a>
        . See also our <Link href="/terms">Terms of Service</Link>, <Link href="/privacy">Privacy Policy</Link> and{" "}
        <Link href="/destek">support page</Link>.
      </p>
    </>
  );
}
