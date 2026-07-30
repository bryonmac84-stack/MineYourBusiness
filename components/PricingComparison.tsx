import React from 'react'

export default function PricingComparison(){
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-mycard p-6 rounded-lg">
        <div className="text-sm font-semibold mb-2">Essential</div>
        <div className="flex items-baseline gap-3">
          <div className="text-4xl font-bold text-mygold">$5</div>
          <div className="text-mymuted">/month</div>
        </div>
        <p className="text-mymuted mt-2">Best for freelancers and small teams getting started with bookings.</p>
        <ul className="mt-4 space-y-2 text-sm text-mysilver">
          <li>Booking requests: Up to 10 / mo</li>
          <li>Marketplace posting: 1 service</li>
          <li>Training: Group webinars</li>
          <li>Discounts: None</li>
        </ul>
        <div className="mt-6">
          <button className="px-4 py-2 rounded border border-white/10 text-mysilver">Get Essential — $5/mo</button>
        </div>
      </div>

      <div className="bg-gradient-to-b from-yellow-50/5 via-white/2 to-white/1 p-6 rounded-lg border border-yellow-400/10">
        <div className="text-sm font-semibold mb-2">Growth <span className="ml-2 text-xs bg-mygold px-2 rounded">Most popular</span></div>
        <div className="flex items-baseline gap-3">
          <div className="text-4xl font-bold text-mygold">$19.99</div>
          <div className="text-mymuted">/month</div>
        </div>
        <p className="text-mymuted mt-2">Unlimited bookings, priority visibility, discounts & premium training to scale fast.</p>
        <ul className="mt-4 space-y-2 text-sm text-mysilver">
          <li>Booking requests: Unlimited</li>
          <li>Marketplace posting: Up to 5 services</li>
          <li>Training: Premium workshops & modules</li>
          <li>Discounts: 10% marketplace resources</li>
        </ul>
        <div className="mt-6">
          <button className="px-4 py-2 rounded bg-mygold text-black font-bold">Start Growth — Try 7 days free</button>
        </div>
      </div>
    </div>
  )
}
