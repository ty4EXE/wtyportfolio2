export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-[50vh] flex flex-col items-center justify-center border-t border-neutral-800 py-20 px-6"
    >
      <div className="contact-panel w-full space-y-6 text-center md:text-left max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Reach me
        </h2>
        <p className="text-sm md:text-base text-slate-200">
          I&apos;m always open to chatting about frontend roles, side projects, or
          collaborations. Find me (+852) 9583 9495 or here:
        </p>

        <div className="mt-4 flex flex-col items-center gap-4 text-sm md:flex-row md:items-center md:gap-6">
          <a
            href="https://github.com/ty4EXE"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-slate-100 hover:border-emerald-300 hover:text-emerald-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-5 w-5 fill-current"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-1.9c-3.2.7-3.9-1.5-3.9-1.5-.6-1.3-1.4-1.6-1.4-1.6-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.9 1.3 3.6 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.6 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2v3c0 .3.2.6.8.5 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
            <span className="font-medium">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/tywong1128"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-slate-100 hover:border-emerald-300 hover:text-emerald-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-5 w-5 fill-current"
            >
              <path d="M20.45 20.45h-3.56v-5.6c0-1.34-.48-2.25-1.68-2.25-.92 0-1.47.62-1.71 1.22-.09.22-.11.52-.11.82v5.81H9.83s.05-9.43 0-10.41h3.56v1.48c.47-.72 1.3-1.74 3.17-1.74 2.31 0 4.05 1.51 4.05 4.76v5.92zM5.34 8.56h-.02c-1.2 0-1.98-.82-1.98-1.85 0-1.05.8-1.86 2.02-1.86s1.98.8 2 1.86c0 1.03-.78 1.85-2.02 1.85zM7.12 20.45H3.56v-10.4h3.56v10.4zM22.22 0H1.78C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.78 24h20.44c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
            </svg>
            <span className="font-medium">LinkedIn</span>
          </a>

          <a
            href="mailto:jwu151@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-slate-100 hover:border-emerald-300 hover:text-emerald-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-5 w-5 fill-current"
            >
              <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v.01L12 13l8-7V6H4zm0 2.8V18h16V8.8l-7.39 6.47a1.5 1.5 0 0 1-2.02 0L4 8.8z" />
            </svg>
            <span className="font-medium">Email</span>
          </a>
        </div>
      </div>
    </section>
  );
}

