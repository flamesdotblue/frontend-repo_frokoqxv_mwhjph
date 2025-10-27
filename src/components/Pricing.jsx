import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$19',
    period: 'mo',
    features: [
      'Up to 500 learners',
      'Unlimited courses',
      'Built-in payment gateway',
      'Email support',
    ],
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$49',
    period: 'mo',
    features: [
      'Up to 5,000 learners',
      'Advanced analytics',
      'Subscriptions & coupons',
      'Priority support',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    features: [
      'Unlimited learners',
      'SSO & RBAC',
      'Custom integrations',
      'Dedicated success manager',
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-neutral-600">Choose a plan that fits your stage. Scale as you grow.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-2xl border ${
                plan.highlighted ? 'border-neutral-900 bg-white shadow-xl shadow-neutral-200' : 'border-neutral-200 bg-white shadow-sm'
              } p-6`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold text-neutral-900">{plan.name}</h3>
                <div className="text-3xl font-extrabold text-neutral-900">{plan.price}<span className="text-base font-medium text-neutral-500">{plan.period && `/${plan.period}`}</span></div>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-neutral-700">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-700">
                      <Check size={14} />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#get-started"
                className={`mt-8 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition ${
                  plan.highlighted ? 'bg-neutral-900 text-white hover:bg-neutral-800' : 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200'
                }`}
              >
                {plan.name === 'Enterprise' ? 'Contact sales' : 'Start free trial'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
