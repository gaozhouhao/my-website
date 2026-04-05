export default function PublicationsPage() {
  return (
    <main className="min-h-screen bg-black px-4 py-16 text-white sm:px-6 md:px-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          Publications
        </h1>

        {/* Papers */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-300">Papers</h2>

          <div className="mt-8 space-y-10">
            <div className="flex flex-col gap-6 md:flex-row">
              <div className="flex w-full shrink-0 items-start justify-center md:w-72">
                <img
                  src="/papers/SSPP.webp"
                  alt="Ultra-Compact Low-Pass SSPP Filter"
                  className="max-h-64 w-full max-w-xs object-contain md:max-w-full"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-semibold leading-snug">
                  Ultra-Compact Low-Pass Spoof Surface Plasmon Polariton Filter
                  Based on Interdigital Structure
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  Micromachines, 2023 · First Author
                </p>

                <p className="mt-1 break-all text-sm text-gray-400">
                  https://doi.org/10.3390/mi14091687
                </p>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-300">
                  <li>
                    Proposed the concept of an ultra-compact low-pass SSPP filter
                    based on interdigital structure and designed the overall
                    experimental scheme.
                  </li>
                  <li>
                    Conducted simulations and studied the reduction in asymptotic
                    frequency and unit size brought by the interdigital structure.
                  </li>
                  <li>
                    Fabricated a prototype and validated a 0-5.66 GHz passband,
                    over 24 dB out-of-band suppression in 5.95-12 GHz, and sharp
                    roll-off near 5.74 GHz.
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-6 md:flex-row">
              <div className="flex w-full shrink-0 items-start justify-center md:w-72">
                <img
                  src="/papers/HMSIC.webp"
                  alt="Textile Bandwidth-Enhanced HMSIC Antenna"
                  className="max-h-64 w-full max-w-xs object-contain md:max-w-full"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-semibold leading-snug">
                  Textile Bandwidth-Enhanced Half-Mode Substrate-Integrated
                  Cavity Antenna Based on Embroidered Shorting Vias
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  Micromachines, 2024 · Co-author
                </p>

                <p className="mt-1 break-all text-sm text-gray-400">
                  https://doi.org/10.3390/mi15091081
                </p>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-300">
                  <li>
                    Studied the effect of adding two shorting vias through
                    theoretical analysis and HFSS simulations.
                  </li>
                  <li>
                    Designed and fabricated a textile bandwidth-enhanced HMSIC
                    antenna with a 4.87–6.17 GHz impedance band, over 97%
                    radiation efficiency, and maximum gain above 7.6 dBi.
                  </li>
                  <li>
                    Performed SAR simulations to evaluate robustness near human
                    tissue and on-body electromagnetic safety.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Patents */}
        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-gray-300">Patents</h2>

          <div className="flex flex-col gap-6 md:flex-row">
            {/* 左侧图片 */}
            <div className="flex w-full shrink-0 items-start justify-center md:w-72">
              <img
                src="/papers/sspp-patent.webp"
                alt="SSPP filter patent structure"
                className="max-h-64 w-full max-w-xs object-contain md:max-w-full"
              />
            </div>

            {/* 右侧内容 */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold leading-snug">
                Ultra-small Low-pass Artificial Surface Plasmon Filter Based on Interdigital Structure
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                Patent Pending, 2023 · First Inventor
              </p>

              <p className="mt-1 text-sm text-gray-400">
                CN117060030A
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-300">
                <li>
                  Proposed a compact SSPP-based low-pass filter using interdigital structure to reduce cutoff frequency and device size
                </li>
                <li>
                  Designed multi-stage plasmonic unit cells with transition sections to improve impedance matching and suppress reflection
                </li>
                <li>
                  Introduced via-connected 3D interdigital structure to enhance equivalent capacitance without increasing footprint
                </li>
                <li>
                  Achieved high out-of-band suppression (&gt;24 dB) and sharp roll-off characteristics
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}