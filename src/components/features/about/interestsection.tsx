type Interest = {
  label: string;
  note: string;
};

// TODO: swap these for things that are actually true about you.
// The "note" is a short, specific detail — not a full sentence.
const INTERESTS: Interest[] = [
  { label: "Gaming", note: "Currently playing —" },
  { label: "Music", note: "Usually listening to —" },
  { label: "Reading", note: "Into —" },
  { label: "Side projects", note: "Currently building —" },
];

export default function InterestsSection() {
  return (
    <section id="interests" className="px-6 py-16 sm:px-12">
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-sky-400">
          Outside of code
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-slate-100 sm:text-3xl">
          A few things I'm into
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {INTERESTS.map((interest) => (
            <div
              key={interest.label}
              className="rounded-xl border border-slate-700/50 bg-slate-900/30 p-5"
            >
              <p className="text-lg font-medium text-slate-100">
                {interest.label}
              </p>
              <p className="mt-1 text-sm text-slate-400">{interest.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}