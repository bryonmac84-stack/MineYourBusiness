export default function Home() {
  return (
    <main className="min-h-screen bg-myblack text-mysilver p-8">
      <div className="max-w-5xl mx-auto">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">MineYourBusiness</h1>
          <nav className="space-x-4">
            <a href="/pricing" className="text-mymuted">Pricing</a>
            <a href="/dashboard" className="text-mymuted">Dashboard</a>
          </nav>
        </header>

        <section className="bg-mycard rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-mysilver">A marketplace & booking hub for skills, trades, and crafts</h2>
          <p className="text-mymuted mt-4">Sign up, post services, accept bookings, and grow your business.</p>
          <div className="mt-6">
            <a href="/pricing" className="inline-block px-6 py-3 rounded bg-mygold text-black font-bold">See pricing</a>
          </div>
        </section>

        <section className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Quick start</h3>
          <ol className="list-decimal list-inside text-mymuted">
            <li>Run <code>npm install</code></li>
            <li>Copy <code>.env.example</code> to <code>.env</code> and set keys</li>
            <li>Run <code>npm run dev</code></li>
          </ol>
        </section>
      </div>
    </main>
  )
}
