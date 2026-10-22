import Link from "next/link";
import { Mail, MapPin, Phone, User } from "lucide-react";
import { Kapsayici } from "@/components/ui/parcalar";
import { LEGAL_EN_UPDATED_AT, OPERATOR } from "@/lib/legal";

const SAYFALAR = [
  { href: "/terms", etiket: "Terms of Service" },
  { href: "/privacy", etiket: "Privacy Policy" },
  { href: "/destek", etiket: "Support (Destek)" },
];

/**
 * İngilizce yasal sayfalar (Adem, 22.10.2026): Terms of Service ve Privacy Policy.
 * Girişte hizmeti işleten kişinin bilgileri ve tıklanabilir destek e-postası gösterilir.
 */
export default function EnglishLegalLayout({ children }: LayoutProps<"/">) {
  return (
    <Kapsayici className="max-w-3xl py-12 sm:py-16">
      <div lang="en">
        <section
          aria-label="Operator and contact"
          className="mb-6 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-card-soft sm:p-7"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Proformium · Operator</p>
          <ul className="mt-4 grid gap-3 text-[15px] text-slate-700 sm:grid-cols-2">
            <li className="flex items-start gap-2.5">
              <User className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>
                <span className="font-semibold text-slate-900">Operated by:</span> {OPERATOR.name} ({OPERATOR.role})
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>
                <span className="font-semibold text-slate-900">Address:</span> {OPERATOR.address}
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>
                <span className="font-semibold text-slate-900">Phone:</span>{" "}
                <a href={OPERATOR.phoneHref} className="hover:text-primary hover:underline">
                  {OPERATOR.phone}
                </a>
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>
                <span className="font-semibold text-slate-900">Contact email:</span>{" "}
                <a href={`mailto:${OPERATOR.email}`} className="font-semibold text-primary underline underline-offset-4">
                  {OPERATOR.email}
                </a>
              </span>
            </li>
          </ul>
        </section>

        <article className="yasal-govde rounded-panel border border-line bg-surface p-6 shadow-card sm:p-10">
          {children}
          <p className="mt-10 text-xs text-ink-muted">Last updated: {LEGAL_EN_UPDATED_AT}</p>
        </article>

        <nav aria-label="Legal pages" className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-muted">
          {SAYFALAR.map((y) => (
            <Link key={y.href} href={y.href} className="hover:text-brand">
              {y.etiket}
            </Link>
          ))}
        </nav>
      </div>
    </Kapsayici>
  );
}
