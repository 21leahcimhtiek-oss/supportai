import Link from 'next/link'
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      <nav className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <div className="text-xl font-bold">Support AI</div>
        <div className="flex gap-4 items-center">
          <Link href="/pricing" className="text-gray-400 hover:text-white text-sm transition-colors">Pricing</Link>
          <Link href="/dashboard" className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">Get Started</Link>
        </div>
      </nav>
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <div className="inline-block bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm px-3 py-1 rounded-full mb-6">AI-Powered</div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">AI customer support that resolves 80% of tickets automatically</h1>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">Intelligent support automation with AI ticket routing, auto-responses, knowledge base builder, and seamless human handoff.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/dashboard" className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors">Start Free</Link>
          <Link href="/pricing" className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl text-lg font-medium transition-colors">Pricing</Link>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Everything included</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors"><div className="text-violet-400 font-bold mb-2 text-sm">AI</div><h3 className="text-white font-semibold mb-1 text-sm">AI ticket routing</h3><p className="text-gray-500 text-xs">AI-powered.</p></div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors"><div className="text-violet-400 font-bold mb-2 text-sm">AU</div><h3 className="text-white font-semibold mb-1 text-sm">Auto-responses</h3><p className="text-gray-500 text-xs">AI-powered.</p></div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors"><div className="text-violet-400 font-bold mb-2 text-sm">KN</div><h3 className="text-white font-semibold mb-1 text-sm">Knowledge base AI</h3><p className="text-gray-500 text-xs">AI-powered.</p></div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors"><div className="text-violet-400 font-bold mb-2 text-sm">SE</div><h3 className="text-white font-semibold mb-1 text-sm">Sentiment analysis</h3><p className="text-gray-500 text-xs">AI-powered.</p></div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors"><div className="text-violet-400 font-bold mb-2 text-sm">HU</div><h3 className="text-white font-semibold mb-1 text-sm">Human handoff</h3><p className="text-gray-500 text-xs">AI-powered.</p></div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors"><div className="text-violet-400 font-bold mb-2 text-sm">MU</div><h3 className="text-white font-semibold mb-1 text-sm">Multi-channel support</h3><p className="text-gray-500 text-xs">AI-powered.</p></div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors"><div className="text-violet-400 font-bold mb-2 text-sm">SL</div><h3 className="text-white font-semibold mb-1 text-sm">SLA tracking</h3><p className="text-gray-500 text-xs">AI-powered.</p></div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors"><div className="text-violet-400 font-bold mb-2 text-sm">AN</div><h3 className="text-white font-semibold mb-1 text-sm">Analytics & reports</h3><p className="text-gray-500 text-xs">AI-powered.</p></div>
        </div>
      </section>
      <section className="max-w-2xl mx-auto px-6 py-20 text-center">
        <div className="bg-violet-600/10 border border-violet-500/20 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-gray-400 mb-8">Free plan available. No credit card required.</p>
          <Link href="/dashboard" className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors inline-block">Get Started Free</Link>
        </div>
      </section>
      <footer className="border-t border-white/10 px-6 py-8 text-center text-gray-500 text-sm">&copy; 2026 Support AI by Aurora Rayes LLC.</footer>
    </main>
  )
}
