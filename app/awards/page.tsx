export default function AwardsPage() {
  return (
    <main className="min-h-screen bg-black px-4 py-16 text-white sm:px-6 md:px-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          Awards
        </h1>

        {/* Competitions */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-gray-300 sm:text-2xl">
            Competitions
          </h2>

          <ul className="mt-6 space-y-3 text-sm text-gray-300 sm:text-base">
            <li>
              National First Prize, China Undergraduate Mathematical Contest in Modeling
            </li>
            <li>
              National Second Prize, China Undergraduate Smart Car Race (17th)
            </li>
            <li>
              National First Prize, MathorCup College Mathematical Modeling Challenge
            </li>
            <li>
              Honorable Mention, Interdisciplinary Contest in Modeling (ICM)
            </li>
            <li>
              National Second Prize, Asia-Pacific Undergraduate Mathematical Contest in Modeling
            </li>
            <li>
              Provincial First Prize, China Undergraduate Electronic Design Contest
            </li>
            <li>
              Provincial Second Prize, Lanqiao Cup China Software & IT Talent Competition (C/C++)
            </li>
            <li>
              Provincial Third Prize, University Mathematical Contest in Modeling
            </li>
          </ul>
        </section>

        {/* Scholarships */}
        <section className="mt-14">
          <h2 className="text-xl font-semibold text-gray-300 sm:text-2xl">
            Scholarships & Honors
          </h2>

          <ul className="mt-6 space-y-3 text-sm text-gray-300 sm:text-base">
            <li>
              JSNU Model Student (Top 0.05%, 10 / 20,000+)
            </li>
            <li>
              Outstanding Graduation Thesis (Top 3%)
            </li>
            <li>
              Outstanding Graduate (Top 10%)
            </li>
            <li>
              Merit Student (Top 10%)
            </li>
            <li>
              Second-Class Scholarship (Top 15%)
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}