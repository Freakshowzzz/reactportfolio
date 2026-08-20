import Button from "@/components/ui/button";
import ProfileCard from "@/components/features/home/profilecard";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100vh-4rem)] items-center px-6 sm:px-12"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
       
        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-sky-400">
            Adonis Billy Regodon — Developer
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-slate-100 sm:text-6xl">
            Building fast, thoughtful{" "}
            <span className="text-sky-400">interfaces</span> for the web.
          </h1>
          <p className="mt-6 max-w-xl text-base text-slate-400 sm:text-lg">
            I build clean, performant web applications from front end to back
            end, with a focus on interfaces that feel considered rather than
            templated.
          </p>
          <div className="mt-8 flex gap-4">
            <Button
              variant="primary"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View projects
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Let's talk
            </Button>
          </div>
        </div>

        <ProfileCard />
      </div>
    </section>
  );
}