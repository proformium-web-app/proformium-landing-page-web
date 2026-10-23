import type { Metadata } from "next";
import Link from "next/link";
import { OPERATOR } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Proformium: what data we process, why, where it is stored and your rights.",
  alternates: { canonical: "/privacy" },
};

/** Türkçe KVKK aydınlatma metni ve gizlilik politikasıyla aynı içerik, İngilizce. */
export default function PrivacyPage() {
  return (
    <>
      <h1 className="text-2xl font-bold text-ink sm:text-3xl">Privacy Policy</h1>
      <p>
        This Privacy Policy explains how {OPERATOR.name}, {OPERATOR.role} (&quot;we&quot;, &quot;us&quot;), operator of
        Proformium, processes personal data when you use <a href="https://www.proformium.com">www.proformium.com</a> and
        the Proformium app at <a href="https://app.proformium.com">app.proformium.com</a>. We act as data controller under
        the Turkish Personal Data Protection Law No. 6698 (&quot;KVKK&quot;). The Turkish versions are available as the{" "}
        <Link href="/kvkk">KVKK Aydınlatma Metni</Link> and <Link href="/gizlilik">Gizlilik Politikası</Link>.
      </p>

      <h2>1. Data we process</h2>
      <h3>a) Account holders (the business using Proformium)</h3>
      <ul>
        <li>Name, email address, phone number</li>
        <li>Business details: company name, address, tax office and number, sector</li>
        <li>Uploaded images: logo, company stamp, signature</li>
        <li>If you sign in with Google: your name and email address from your Google account</li>
        <li>Login records and session data for account security</li>
        <li>Support requests and feedback you send us</li>
      </ul>
      <h3>b) Your customers and suppliers</h3>
      <p>
        To prepare quotes and request prices, you may enter your customers&apos; and suppliers&apos; names, company
        names, phone numbers, email addresses, addresses, tax details and (for automotive businesses) vehicle plate
        numbers. For this data, your business is the data controller and we process it only on your behalf to provide
        the Service (as data processor).
      </p>

      <h2>2. Why we process it</h2>
      <ul>
        <li>To provide the Service: creating quotes, generating PDFs, sharing them with customers, collecting supplier prices</li>
        <li>To show when a customer opens a quote link and to send follow-up reminders</li>
        <li>To send emails you request (for example, a quote with its PDF attached) and account emails</li>
        <li>Account security and abuse prevention</li>
        <li>Answering support requests and fixing errors</li>
        <li>Meeting legal obligations</li>
      </ul>
      <p>
        Legal bases: performance of a contract, compliance with legal obligations and our legitimate interests (KVKK
        Article 5/2-c, ç and f).
      </p>

      <h2>3. Quote links and view tracking</h2>
      <ul>
        <li>Quote links contain a random, unguessable key and are closed to search engines.</li>
        <li>A person opening the link sees only that quote, not your other records.</li>
        <li>
          When a customer opens a quote, we record only the time and number of views. We do not record their location,
          device or identity and do not set cookies on the quote page.
        </li>
      </ul>

      <h2>4. Service providers and where data is stored</h2>
      <table>
        <tbody>
          <tr>
            <th>Supabase</th>
            <td>Database, user accounts and file storage (Frankfurt, Germany)</td>
          </tr>
          <tr>
            <th>Vercel</th>
            <td>Hosting of the Proformium app (Frankfurt, Germany)</td>
          </tr>
          <tr>
            <th>Cloudflare</th>
            <td>Hosting of this website, domain management and cookieless visitor statistics</td>
          </tr>
          <tr>
            <th>Resend</th>
            <td>Sending emails: verification, password reset, quotes you choose to send by email (Ireland)</td>
          </tr>
          <tr>
            <th>Polar / Dodo Payments</th>
            <td>
              Merchant of Record for paid plans: payment processing, receipts, taxes and refunds. They receive your name,
              email, billing details and payment information; we do not see or store your full card number.
            </td>
          </tr>
          <tr>
            <th>Google</th>
            <td>Only if you choose &quot;Continue with Google&quot; to sign in</td>
          </tr>
        </tbody>
      </table>
      <p>
        We do not sell personal data or share it for advertising. Lawful requests from competent authorities are
        reserved.
      </p>

      <h2>5. Cookies</h2>
      <p>
        The app uses only the cookies needed to keep you signed in. This website uses no cookies; visitor statistics are
        collected with Cloudflare Web Analytics, which does not use cookies or identify visitors. We use no advertising
        or profiling cookies.
      </p>

      <h2>6. Retention</h2>
      <p>
        We keep data while your account is open and afterwards for the periods required by law. When you delete your
        account, your business&apos;s quotes, customer records and uploaded images are deleted.
      </p>

      <h2>7. Your rights</h2>
      <p>
        Under KVKK Article 11 you may ask whether your data is processed, request information, correction or deletion,
        object to processing and claim compensation for damages. You can download all of your business data as an Excel
        file from Settings in the app and delete your account yourself.
      </p>
      <p>
        Send requests to{" "}
        <a href={`mailto:${OPERATOR.email}`}>
          <strong>{OPERATOR.email}</strong>
        </a>
        . We respond within 30 days at the latest.
      </p>

      <h2>8. Changes</h2>
      <p>We may update this policy; the date at the bottom of this page shows the latest version.</p>
    </>
  );
}
