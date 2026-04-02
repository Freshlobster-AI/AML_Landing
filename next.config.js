export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-xl font-semibold tracking-tight">Qubit Advisory</div>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#about" className="hover:text-slate-600">About</a>
            <a href="#services" className="hover:text-slate-600">Services</a>
            <a href="#contact" className="hover:text-slate-600">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
              AML compliance support for Tranche 2 businesses
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Practical AML support to help your business get compliant with confidence
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              From AML pulse checks to full program design, onboarding controls, reporting uplift, and independent reviews, Qubit Advisory helps businesses build practical, right-sized AML capability.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
              >
                Book a conversation
              </a>
              <a
                href="#services"
                className="rounded-2xl border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                See services
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <h3 className="text-base font-semibold">Clear AML guidance</h3>
                <p className="mt-2 text-sm text-slate-600">
                  We help businesses understand what is required, what is missing, and what to do next.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <h3 className="text-base font-semibold">Practical implementation</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Our focus is on workable AML controls that support compliance without creating unnecessary friction.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <h3 className="text-base font-semibold">Immediate next steps</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Start with a pulse check, targeted training, or a tailored uplift plan for your business.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="text-2xl font-semibold tracking-tight">About</h2>
            <p className="mt-4 max-w-3xl text-slate-600">
              Qubit Advisory supports businesses that need clear, commercially practical help with AML obligations. We work with organisations that want to move quickly from uncertainty to action, whether that means understanding their exposure, designing a tailored AML program, improving onboarding and monitoring controls, or preparing for AUSTRAC obligations with confidence.
            </p>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">Services</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold">AML Free Pulse Check</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">A simple starting point to identify key AML gaps, priority risks, and practical next steps for your business.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold">AML High-Value Red Flag Training</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">Targeted training to help your team identify warning signs, escalate concerns, and strengthen day-to-day AML decision-making.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold">AML Program and Risk Assessment</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">Tailored AML program design and risk assessment aligned to your business model, customers, channels, and operational realities.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold">AML Officer Support</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">Support for appointing and standing up the AML officer function, including director-level accountability considerations.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold">CDD and KYC</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">Customer due diligence at onboarding and remediation, including KYC, PEP assessment, and uplift of customer records.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Monitoring and Reporting Setup</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">One-off setup of threshold monitoring, sanctions screening, SMR processes, and other core AML reporting controls.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Ongoing Monitoring and Reporting</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">Ongoing threshold monitoring, sanctions monitoring, reporting support, and operational AML oversight.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Independent Reviews and Annual Refresh</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">Mandatory AML independent reviews plus annual AML program and risk assessment refresh tailored to business changes.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold">AUSTRAC Enrolment Assistance</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">Practical assistance to help your business prepare for and complete AUSTRAC enrolment requirements.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-slate-200 bg-slate-900 text-white">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
            <p className="mt-4 max-w-2xl text-slate-300">
              Contact Qubit Advisory to discuss AML uplift, onboarding controls, reporting obligations, independent reviews, annual refresh requirements, or AUSTRAC enrolment support.
            </p>
            <div className="mt-8 space-y-3 text-slate-200">
              <p><strong>Ivan Chua:</strong> <a href="mailto:ivan@qubit.com.au" className="underline underline-offset-4">ivan@qubit.com.au</a></p>
              <p><strong>Krzysztof Lyson:</strong> <a href="mailto:krzysztof@qubit.com.au" className="underline underline-offset-4">krzysztof@qubit.com.au</a></p>
              <p><strong>Peter Lloyd:</strong> <a href="mailto:peter@qubit.com.au" className="underline underline-offset-4">peter@qubit.com.au</a></p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}