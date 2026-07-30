import PricingComparison from '../../components/PricingComparison'

export default function PricingPage(){
  return (
    <main className="min-h-screen bg-myblack text-mysilver p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Pricing</h1>
        <p className="text-mymuted mb-6">Choose the plan that grows your business.</p>
        <PricingComparison />
      </div>
    </main>
  )
}
