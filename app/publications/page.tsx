export default function PublicationsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-16">
      <h1 className="text-4xl font-bold">Publications</h1>

      {/* Papers */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-300">Papers</h2>

        <div className="mt-8 space-y-8">
          <div className="flex flex-col gap-4 rounded-xl border border-gray-800 p-6 md:flex-row md:flex-row">
            <div className="w-80 flex items-start justify-center rounded-lg flex-shrink-0">
            <img
              src="/papers/SSPP.webp"
              alt="Ultra-Compact Low-Pass SSPP Filter"
              className="max-w-full max-h-full object-contain"
            //   className="h-50 w-full rounded-lg object-cover md:w-80"
            />
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Ultra-Compact Low-Pass Spoof Surface Plasmon Polariton Filter Based on Interdigital Structure
              </h3>
              <p className="mt-1 text-sm text-gray-400">
                Micromachines, 2023 · First Author · https://doi.org/10.3390/mi14091687
              </p>
              <p className="mt-1 text-sm text-gray-400">
                https://doi.org/10.3390/mi14091687
              </p>
              <p className="mt-3 text-gray-300">
            
                <li>Proposed the concept of the ultra-compact low-pass spoof surface plasmon polariton (SSPP) filter based 
                    on interdigital structure (IS), designing the overall experimental scheme </li>
                <li>Conducted simulations and identified decreases in asymptotic frequency and unit sizes due to using IS 
                    Designed 3 IS-based SSPP units with different maximum intrinsic frequencies and similar asymptotic 
                    frequencies to build the proposed filter, with the aim to improve the out-of-band suppression </li>
                <li>Fabricated a prototype and validated the efficient transmission in the 0~5.66 GHz passband, excellent out
                    of-band suppression (over 24 dB) in the 5.95~12 GHz stopband, and ultra-shape roll-off at 5.74 GHz </li>
              </p>
            </div>
          </div>

            <div className="flex flex-col gap-4 rounded-xl border border-gray-800 p-6 md:flex-row md:flex-row">
                <div className="w-80 flex items-start justify-center rounded-lg flex-shrink-0">
                <img
                    src="/papers/HMSIC.webp"
                    alt="Textile Bandwidth-Enhanced HMSIC Antenna"
                    className="max-w-full max-h-full object-contain"
                />
                </div>

                <div>
                    <h3 className="text-xl font-semibold">
                            Textile Bandwidth-Enhanced Half-Mode Substrate-Integrated Cavity Antenna Based on Embroidered Shorting Vias
                    </h3>
                    <p className="mt-1 text-sm text-gray-400">
                            Micromachines, 2024 · Co-author
                    </p>
                    <p className="mt-1 text-sm text-gray-400">
                        https://doi.org/10.3390/mi15091081
                    </p>
                    <p className="mt-3 text-gray-300">
                        <li>Studied the effects of adding two shorting vias in the textile HMSIC antenna through theoretical analysis and Hfss simulations</li>
                        <li>Designed and fabricated a textile bandwidth-enhanced HMSIC antennas based on embroidered shorting 
                            vias to achieve an expanded -10 dB impedance band of 4.87~6.17GHz, a radiation efficiency above 97% 
                            and a maximum gain over 7.6 dBi </li>
                        <li>Carried out SAR simulations to study the robustness of the designed antenna in the proximity of human 
                            tissue and the electromagnetic safety of the antenna on human body </li>

                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* Patents */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-300">Patents</h2>

        <div className="mt-8 rounded-xl border border-gray-800 p-6">
          <h3 className="text-xl font-semibold">Ultra-small low-pass artificial surface plasmon filter based on interdigital structure</h3>
          <p className="mt-1 text-sm text-gray-400">
            First Inventor
          </p>
          <p className="mt-1 text-sm text-gray-400">
            [2024] · [ Patent pending / CN117060030A]
          </p>
          {/* <p className="mt-3 text-gray-300">
            [One-line description of the patent.]
          </p> */}
        </div>
      </section>
    </main>
  );
}