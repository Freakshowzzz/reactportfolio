type Interest = {
  tag: string;
  title: string;
};

const INTERESTS: Interest[] = [
  { tag: "Playing", title: "Dota 2" },
  { tag: "Listening", title: "Engelwood — Crystal Dolphin" },
  { tag: "Reading", title: "The Greatest Estate Developer" },
  { tag: "Learning", title: "Unity" },
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

        {/* terminal-style log */}
        <div className="mt-8 overflow-hidden rounded-xl border border-slate-700/50 bg-[#05070a]/60 font-mono text-sm">
          {/* fake window chrome */}
          <div className="flex items-center gap-1.5 border-b border-slate-700/50 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
            <span className="ml-3 text-xs text-slate-500">
              ~/adonis/interests
            </span>
          </div>

          <div className="space-y-3 px-4 py-5">
            {INTERESTS.map((item, index) => (
              <div
                key={item.title}
                className="interest-log-line flex flex-wrap items-baseline gap-x-2 rounded-md px-2 py-1 opacity-0 transition-transform duration-200 ease-out hover:translate-x-1.5 hover:bg-sky-400/5"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <span className="text-sky-400">$</span>
                <span className="text-slate-500">
                  now.{item.tag.toLowerCase()}
                </span>
                <span className="text-slate-600">→</span>
                <span className="text-slate-100">{item.title}</span>
              </div>
            ))}

            {/* blinking cursor line */}
            <div className="flex items-center gap-2 pt-1">
              <span className="text-sky-400">$</span>
              <span className="h-4 w-2 animate-pulse bg-sky-400/70" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes log-line-in {
          from {
            opacity: 0;
            transform: translateX(-8px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .interest-log-line {
          animation: log-line-in 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  );
}