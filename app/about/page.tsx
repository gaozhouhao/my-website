export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black px-4 py-16 text-white sm:px-6 md:px-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">About</h1>

        <section className="mt-8 max-w-3xl text-sm leading-7 text-gray-300 sm:text-base">
          <p>
            I am a Master&apos;s student in Integrated Circuit Design at TUM Asia
            and Nanyang Technological University, focused on RTL CPU design and
            digital IC development, with additional experience in analog circuit
            design.
          </p>

          <p className="mt-4">
            My work includes developing a RISC-V CPU with differential testing
            and system-level bring-up, as well as designing analog circuits such
            as operational amplifiers with full-custom layout and post-layout
            verification.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-gray-200">
            Technical Skills
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-800 p-5">
              <h3 className="font-semibold text-white">Digital & RTL</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-300 sm:text-base">
                <li>Verilog, RISC-V CPU Design</li>
                <li>Datapath and Control Logic</li>
                <li>Basic Verification and Debugging (Verilator, Waveform Analysis)</li>
                <li>Python for test automation and tooling, Makefile for build flow</li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-800 p-5">
              <h3 className="font-semibold text-white">Analog IC</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-300 sm:text-base">
                <li>Cadence Virtuoso (Schematic and Layout)</li>
                <li>DRC / LVS / PEX</li>
                <li>Operational Amplifier Design</li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-800 p-5">
              <h3 className="font-semibold text-white">Embedded & Systems</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-300 sm:text-base">
                <li>C/C++, MCU Development</li>
                <li>Sensor Integration and Motor Control</li>
                <li>System-Level Debugging</li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-800 p-5">
              <h3 className="font-semibold text-white">Additional</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-300 sm:text-base">
                <li>PCB Design (Altium Designer)</li>
                <li>CST (RF Simulation)</li>
                <li>3D Modeling and 3D Printing</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-gray-200">Education</h2>

          <ul className="mt-6 space-y-3 text-sm text-gray-300 sm:text-base">
            <li>M.Sc. Integrated Circuit Design, TUM Asia & NTU (2025–2027)</li>
            <li>B.Eng. Electronic Information Engineering, JSNU</li>
          </ul>
        </section>
      </div>
    </main>
  );
}