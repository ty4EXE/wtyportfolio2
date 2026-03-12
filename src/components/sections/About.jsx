import ShinyText from "../ui/ShinyText";
import OrbitImages from "../ui/OrbitImages";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-transparent"
    >
      <div className="max-w-5xl w-full grid gap-14 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1.1fr)] items-start about-text">
        {/* Left column: About + orbiting skills */}
        <div className="space-y-8">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              About
            </h2>
            <p className="text-base md:text-lg text-slate-200 leading-relaxed">
              I’m a self-taught developer with a love for clean and intuitive design.
              Proficient in ReactJS for frontend development with a strong foundation in
              communication and problem-solving.
            </p>
          </div>

          <div className="flex justify-start">
            <OrbitImages
              responsive
              radiusX={320}
              radiusY={100}
              baseWidth={700}
              itemSize={120}
              duration={32}
              images={[
                "https://skillicons.dev/icons?i=react",
                "https://skillicons.dev/icons?i=php",
                "https://skillicons.dev/icons?i=nodejs",
                "https://skillicons.dev/icons?i=mysql",
                "https://skillicons.dev/icons?i=postgresql",
                "https://skillicons.dev/icons?i=cs",
                "https://skillicons.dev/icons?i=unity",
                "https://skillicons.dev/icons?i=vscode",
              ]}
              className="max-w-sm md:max-w-md"
              centerContent={
                <div className="rounded-full border border-slate-700/70 bg-slate-950/80 px-4 py-2 text-xs text-slate-200">
                  Tech I work with most
                </div>
              }
            />
          </div>
        </div>

        {/* Right column: Skills list */}
        <div className="space-y-5">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            <ShinyText text="Skills" />
          </h2>

          <div className="grid gap-6">
            {/* Categorized skill list */}
            <div className="space-y-4 text-base md:text-lg">
              <div>
                <h5 className="text-xs uppercase tracking-[0.22em] text-slate-400">
                  Web Development
                </h5>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-slate-900/70 border border-slate-700/70">
                    ReactJS
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-900/70 border border-slate-700/70">
                    PHP
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-900/70 border border-slate-700/70">
                    NodeJS
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-900/70 border border-slate-700/70">
                    MySQL
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-900/70 border border-slate-700/70">
                    PostgreSQL
                  </span>
                </div>
              </div>

              <div>
                <h5 className="text-xs uppercase tracking-[0.22em] text-slate-400">
                  Software &amp; Game Development
                </h5>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-slate-900/70 border border-slate-700/70">
                    C# .NET
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-900/70 border border-slate-700/70">
                    VBA
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-900/70 border border-slate-700/70">
                    Unity
                  </span>
                </div>
              </div>

              <div>
                <h5 className="text-xs uppercase tracking-[0.22em] text-slate-400">
                  Specialized &amp; Tools
                </h5>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-slate-900/70 border border-slate-700/70">
                    API Integration
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-900/70 border border-slate-700/70">
                    Version Control (GitHub)
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-900/70 border border-slate-700/70">
                    UI/UX Design
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-900/70 border border-slate-700/70">
                    Page Performance Optimization
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

