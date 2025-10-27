import { ArrowRight, Shield, Smartphone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-16 md:grid-cols-2 md:py-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-3 py-1 text-xs font-semibold text-indigo-700">
            <Smartphone size={14} /> Mobile-first LMS platform
          </div>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-neutral-900 md:text-5xl">
            Launch your LMS mobile app with admin dashboard and payments built-in
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-600">
            Deliver courses on iOS and Android, manage content and users from a powerful dashboard, and accept secure payments worldwide.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3" id="get-started">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-md bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              Get Started <ArrowRight className="ml-2" size={16} />
            </a>
            <a
              href="#demo"
              className="inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50"
            >
              View Demo
            </a>
          </div>

          <div className="mt-6 flex items-center gap-6 text-sm text-neutral-500">
            <div className="flex items-center gap-2">
              <Shield size={16} /> PCI-compliant payments
            </div>
            <div>One codebase for iOS & Android</div>
          </div>
        </div>

        <div id="demo" className="relative">
          <div className="relative mx-auto h-[540px] w-[300px] rounded-[2.5rem] border border-neutral-200 bg-neutral-900 p-2 shadow-2xl md:ml-auto">
            <div className="h-full w-full rounded-[2rem] bg-white p-4">
              <div className="flex items-center justify-between">
                <div className="h-2 w-12 rounded-full bg-neutral-200" />
                <div className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-neutral-200" />
                  <span className="h-1.5 w-1.5 rounded-full bg-neutral-200" />
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="aspect-[3/4] rounded-lg border border-neutral-200 bg-gradient-to-br from-indigo-50 to-white" />
                ))}
              </div>
              <div className="mt-4 rounded-lg border border-neutral-200 p-3">
                <div className="h-3 w-32 rounded bg-neutral-200" />
                <div className="mt-2 h-2 w-24 rounded bg-neutral-100" />
                <div className="mt-3 flex items-center justify-between">
                  <div className="h-8 w-24 rounded-md bg-neutral-900" />
                  <div className="h-8 w-16 rounded-md bg-neutral-200" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
