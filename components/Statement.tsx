import { T, type Locale } from "@/lib/i18n";

// Full-bleed statement band, sitting between §03 Stack and §04 Work.
//
// Two jobs. First, rhythm: every section on this page opened the same way
// (section-head + ghost numeral + grid of hairline boxes), six times, so the
// scroll never changed pace. This band deliberately has none of that scaffold
// — no numeral, no rule, no grid of boxes — and the structure stutters where
// the page turns from "the tools I use" to "what I built with them".
//
// Second, the thesis: this sentence used to be the last clause of the fourth
// About paragraph, where a skimmer never reached it. It's the answer to the
// question a recruiter is actually asking, so it gets a wall of its own.
export default function Statement({ locale = "es" }: { locale?: Locale }) {
  return (
    <div className="band island">
      <div className="container reveal">
        <T
          locale={locale}
          className="band__k mono"
          es="// método"
          en="// method"
          fr="// méthode"
        />
        <T
          locale={locale}
          as="p"
          className="band__line"
          es={'La IA acelera. <span class="hi">La evidencia decide.</span>'}
          en={'AI accelerates. <span class="hi">Evidence decides.</span>'}
          fr={'L\'IA accélère. <span class="hi">La preuve décide.</span>'}
        />
      </div>
    </div>
  );
}
