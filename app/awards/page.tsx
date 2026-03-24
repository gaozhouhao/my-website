export default function AwardsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-4 sm:px-6 md:px-8 py-16">
      <h1 className="text-4xl font-bold">Awards</h1>

      {/* Competitions */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-300">
          Competitions
        </h2>

        <ul className="mt-6 space-y-2 text-gray-300">
          <li>National First Prize, China Undergraduate Mathematical Contest in Modeling</li>
          <li>National Second Prize, China Undergraduate Smart Car Race (17th)</li>
          <li>National First Prize, MathorCup College Mathematical Modeling Challenge</li>
          <li>Honorable Mention, Interdisciplinary Contest in Modeling (ICM)</li>
          <li>National Second Prize, Asia-Pacific Undergraduate Mathematical Contest in Modeling</li>
          <li>Provincial First Prize, China Undergraduate Electronic Design Contest</li>
          <li>Provincial Second Prize, Lanqiao Cup China Software & IT Talent Competition (C/C++)</li>
          <li>Provincial Third Prize, University Mathematical Contest in Modeling</li>
        </ul>
      </section>

      {/* Scholarships */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-300">
          Scholarships & Honors
        </h2>

        <ul className="mt-6 space-y-2 text-gray-300">
          <li>JSNU Model Student (Top 0.05%, 10 out of 20,000+ students)</li>
          <li>Outstanding Graduation Thesis (Top 3%)</li>
          <li>Outstanding Graduate (Top 10%)</li>
          <li>Merit Student (Top 10%)</li>
          <li>Second-Class Scholarship (Top 15%)</li>
        </ul>
      </section>
    </main>
  );
}