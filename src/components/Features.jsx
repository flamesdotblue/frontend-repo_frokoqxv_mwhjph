import { CreditCard, ShieldCheck, LayoutDashboard, Smartphone, Users, BookOpen } from 'lucide-react';

const features = [
  {
    icon: Smartphone,
    title: 'Native-like Mobile UX',
    desc: 'Optimized course player, offline access, push notifications, and progress sync across devices.'
  },
  {
    icon: LayoutDashboard,
    title: 'Admin Dashboard',
    desc: 'Manage courses, lessons, instructors, enrollments, and analytics from one place.'
  },
  {
    icon: CreditCard,
    title: 'Payment Gateway',
    desc: 'Stripe-powered subscriptions, one-time purchases, coupons, and refunds, all secured end-to-end.'
  },
  {
    icon: ShieldCheck,
    title: 'Secure by Default',
    desc: 'Role-based access, SSO-ready, audit logs, and GDPR-friendly data practices.'
  },
  {
    icon: Users,
    title: 'Community & Cohorts',
    desc: 'Cohort-based learning, discussions, and announcements to boost engagement.'
  },
  {
    icon: BookOpen,
    title: 'Content Authoring',
    desc: 'Drag-and-drop curriculum builder with quizzes, assignments, and certificates.'
  },
];

export default function Features() {
  return (
    <section id="features" className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">Everything you need to run an LMS</h2>
          <p className="mt-3 text-neutral-600">From content to commerce to analytics — launch faster with a complete toolkit.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{desc}</p>
              <div className="mt-4 h-1 w-0 rounded bg-indigo-600 transition-all group-hover:w-12" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
