export default function BioSection() {
  return (
    <section id="bio" className="px-6 pb-16 pt-24 sm:px-12 sm:pt-32">
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-sky-400">
          About
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-100 sm:text-5xl">
          Hey, I'm Adonis.
        </h1>

        <div className="mt-8 space-y-4 text-base leading-relaxed text-slate-400 sm:text-lg">
          
          <p>
            I'm a developer who enjoys the full path from idea to shipped
            product — sketching a layout in Figma, building it out in React
            or Next.js, and wiring up the backend in Laravel to make it
            actually work.
          </p>
          <p>
            What keeps me interested in this work is the mix of craft and
            logic — getting an interface to feel right, and getting the
            system behind it to hold up. I like projects where both of those
            actually matter.
          </p>
          <p>
            Outside of writing code, I spend time on my several personal interests including reading, gaming, and learning new things that benefit me.
          </p>
        </div>
      </div>
    </section>
  );
}