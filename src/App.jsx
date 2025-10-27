import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <section className="border-t border-neutral-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14">
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 md:p-12">
              <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight">Admin dashboard preview</h3>
                  <p className="mt-3 text-neutral-600">Track revenue, enrollments, completion rates, and manage content with an intuitive interface designed for teams.</p>
                </div>
                <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-lg bg-indigo-50 p-4">
                      <div className="h-4 w-16 rounded bg-indigo-200" />
                      <div className="mt-3 h-6 w-20 rounded bg-indigo-300" />
                    </div>
                    <div className="rounded-lg bg-emerald-50 p-4">
                      <div className="h-4 w-16 rounded bg-emerald-200" />
                      <div className="mt-3 h-6 w-20 rounded bg-emerald-300" />
                    </div>
                    <div className="rounded-lg bg-amber-50 p-4">
                      <div className="h-4 w-16 rounded bg-amber-200" />
                      <div className="mt-3 h-6 w-20 rounded bg-amber-300" />
                    </div>
                  </div>
                  <div className="mt-4 h-40 rounded-lg border border-neutral-200 bg-neutral-50" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-neutral-600 md:flex-row">
          <p>© {new Date().getFullYear()} EduFlow LMS. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#features" className="hover:text-neutral-900">Features</a>
            <a href="#pricing" className="hover:text-neutral-900">Pricing</a>
            <a href="#demo" className="hover:text-neutral-900">Demo</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
