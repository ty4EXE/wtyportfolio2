export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center border-t border-neutral-800 px-6 py-20 bg-neutral-900/30"
    >
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl md:text-4xl text-center md:text-left text-slate-200">
          Work Experience
        </h2>

        <article className="experience-card rounded-2xl border-l-2 border-emerald-400/80 bg-slate-950/70 p-6 shadow-soft-card">
          <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-emerald-300">
                Pitcher Limited
              </h3>
              <p className="text-sm font-medium text-sky-300">Programmer</p>
            </div>
            <p className="text-xs md:text-sm text-slate-400 mt-1 md:mt-0">
              Aug 2025 &ndash; Jan 2026
            </p>
          </div>

          <ul className="mt-4 space-y-2 text-sm md:text-base text-slate-200 list-disc list-outside pl-5">
            <li>
              Developed and maintained{" "}
              <span className="font-semibold text-emerald-200">RESTful API</span> integrations
              using <span className="font-semibold text-emerald-200">React.js</span>, contributing
              to <span className="font-semibold text-emerald-200">UI/UX implementation</span>{" "}
              based on provided
              specifications.
            </li>
            <li>
              Streamlined business flows in{" "}
              <span className="font-semibold text-emerald-200">ERP</span> systems to simplify
              complex manual user operations.
            </li>
          </ul>
        </article>

        <article className="experience-card rounded-2xl border-l-2 border-emerald-400/80 bg-slate-950/70 p-6 shadow-soft-card">
          <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-emerald-300">
                MSIG Insurance (Hong Kong) Limited (Internship)
              </h3>
              <p className="text-sm font-medium text-sky-300">IT Project Trainee</p>
            </div>
            <p className="text-xs md:text-sm text-slate-400 mt-1 md:mt-0">
              Jun &ndash; Sep 2023
            </p>
          </div>

          <ul className="mt-4 space-y-2 text-sm md:text-base text-slate-200 list-disc list-outside pl-5">
            <li>
              Developed Excel <span className="font-semibold text-emerald-200">VBA</span> macros
              for quotation calculations and formatting, improving data handling accuracy.
            </li>
            <li>
              Collaborated with the HR department to{" "}
              <span className="font-semibold text-emerald-200">automate email processing</span> and{" "}
              <span className="font-semibold text-emerald-200">CV categorization</span> through{" "}
              <span className="font-semibold text-emerald-200">Power Automate</span>.
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

