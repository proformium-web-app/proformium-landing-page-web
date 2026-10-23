import type { Metadata } from "next";
import { EpostaKopyala } from "@/components/ui/eposta-kopyala";
import Link from "next/link";
import { FIYAT, FREE_SINIRLARI } from "@/content/fiyatlar";
import { OPERATOR } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Proformium, a web-based quote and proforma app for small businesses in Türkiye.",
  alternates: { canonical: "/terms" },
};

const fiyat = new Intl.NumberFormat("en-US").format(FIYAT.pro.yillik);

export default function TermsPage() {
  return (
    <>
      <h1 className="text-2xl font-bold text-ink sm:text-3xl">Terms of Service</h1>
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your use of Proformium, available at{" "}
        <a href="https://www.proformium.com">www.proformium.com</a> and{" "}
        <a href="https://app.proformium.com">app.proformium.com</a> (the &quot;Service&quot;). The Service is operated
        by {OPERATOR.name}, {OPERATOR.role}, {OPERATOR.address} (&quot;we&quot;, &quot;us&quot;). By creating an account
        or using the Service you agree to these Terms. If you do not agree, please do not use the Service.
      </p>

      <h2>1. The Service</h2>
      <p>
        Proformium is a web-based application that helps small businesses prepare price quotes and proforma documents,
        send them to customers via WhatsApp, email or PDF, see when a customer opens a quote, get follow-up reminders,
        and collect and compare prices from suppliers. Proformium is not an e-invoice (e-Fatura / e-Arşiv), accounting,
        inventory or ERP system. Quotes and proformas prepared with Proformium are not tax invoices.
      </p>

      <h2>2. Accounts</h2>
      <ul>
        <li>You must provide accurate information and keep your login credentials confidential.</li>
        <li>You may sign up with an email address and password or with your Google account.</li>
        <li>You are responsible for all activity under your account and for the data you enter.</li>
        <li>You must be at least 18 years old and acting on behalf of a business or as a professional.</li>
      </ul>

      <h2>3. Plans, trial and fees</h2>
      <ul>
        <li>
          <strong>Free plan:</strong> free of charge with no time limit, with monthly limits ({FREE_SINIRLARI.teklifAyda}{" "}
          quotes and {FREE_SINIRLARI.talepAyda} supplier requests per calendar month, up to {FREE_SINIRLARI.musteri}{" "}
          customers and {FREE_SINIRLARI.urun} products/services). Documents carry a &quot;Prepared with Proformium&quot;
          note and reports are not included.
        </li>
        <li>
          <strong>Pro plan:</strong> TRY {fiyat} per year, VAT included, billed annually in advance. Unlimited use, no
          Proformium note on documents, reports included.
        </li>
        <li>
          <strong>Free trial:</strong> each business can try Pro free of charge for {FIYAT.denemeGun} days once. No
          credit card is required and you are not charged automatically when the trial ends.
        </li>
        <li>
          When a trial or a paid period ends, your account moves to the Free plan. Your existing quotes, customer records
          and the links you have sent to customers keep working; nothing is deleted.
        </li>
        <li>Prices may change; changes never apply to a period you have already paid for.</li>
      </ul>

      <h2>4. Payments, cancellation and refunds</h2>
      <p>
        You may cancel a paid plan at any time by writing to{" "}
        <EpostaKopyala dil="en" className="inline font-semibold text-primary underline underline-offset-4 hover:text-primary-dark">{OPERATOR.email}</EpostaKopyala>. Cancellation takes effect at the end of the period you
        have paid for and you are not charged for the next period. Payments are processed by our Merchant of Record (Polar;
        alternatively Dodo Payments), which issues receipts and refunds. You can get a full refund within 14 days of your
        first annual payment; details are in our <Link href="/refund">Refund Policy</Link>.
      </p>

      <h2>5. Your data</h2>
      <ul>
        <li>The customer, product, supplier and quote data you enter belongs to you.</li>
        <li>
          You can download all of your data as an Excel file at any time from Settings in the app, on every plan.
        </li>
        <li>You can delete your account and all of its data yourself from Settings.</li>
        <li>
          How we process personal data is described in our <Link href="/privacy">Privacy Policy</Link>.
        </li>
      </ul>

      <h2>6. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>use the Service for unlawful, fraudulent or misleading purposes, or to send spam;</li>
        <li>upload content that infringes the rights of others;</li>
        <li>attempt to access other businesses&apos; data, or disrupt or reverse engineer the Service;</li>
        <li>resell or share access to the Service without our written permission.</li>
      </ul>
      <p>We may suspend accounts that violate these Terms, after notice where reasonably possible.</p>

      <h2>7. Availability and liability</h2>
      <p>
        We work to keep the Service available and secure, but it is provided &quot;as is&quot; and we do not guarantee
        that it will be uninterrupted or error-free. You are responsible for checking the prices, taxes and terms in the
        quotes you send. To the extent permitted by law, our total liability for any claim relating to the Service is
        limited to the fees you paid us in the twelve months before the claim. Nothing in these Terms limits liability
        that cannot be limited under applicable law.
      </p>

      <h2>8. Changes to these Terms</h2>
      <p>
        We may update these Terms. If a change materially affects you, we will notify you by email or in the app before
        it takes effect. Continued use after the effective date means you accept the updated Terms.
      </p>

      <h2>9. Governing law</h2>
      <p>
        These Terms are governed by the laws of the Republic of Türkiye. Consumer disputes may be brought before the
        Consumer Arbitration Committees and Consumer Courts competent for your place of residence.
      </p>

      <h2>10. Contact</h2>
      <p>
        Questions about these Terms or the Service:{" "}
        <EpostaKopyala dil="en" className="inline font-semibold text-primary underline underline-offset-4 hover:text-primary-dark">
          <strong>{OPERATOR.email}</strong>
        </EpostaKopyala>
        . You can also open a support request from the Support menu inside the app. See our{" "}
        <Link href="/destek">support page</Link>.
      </p>
    </>
  );
}
