export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white px-4 sm:px-6 md:px-8 py-16">
      <h1 className="text-4xl font-bold">About</h1>

      {/* Intro */}
      <section className="mt-8 max-w-3xl text-gray-300 leading-relaxed">
        <p>
          I am a Master's student in Integrated Circuit Design at TUM Asia and
          Nanyang Technological University, focused on RTL CPU design and digital 
          IC development, with additional experience in analog circuit design. 
          I have hands-on experience in both RTL CPU design and analog circuit implementation.
        </p>

        <p className="mt-4">
          My work includes developing a RISC-V CPU with differential testing and
          system-level bring-up, as well as designing analog circuits such as
          operational amplifiers with full layout and post-layout verification.
        </p>
      </section>

        {/* Skills */}
      <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-300">
            Technical Skills
          </h2>

        <div className="mt-6 space-y-6 text-gray-300">
          
          <div>
            <h3 className="font-semibold text-white">Digital & RTL</h3>
            <ul className="mt-2 list-disc list-inside">
              <li>Verilog, RISC-V CPU Design</li>
              <li>Datapath & Control Logic</li>
              <li>Basic Verification & Debugging (Verilator, Waveform Analysis)</li>
              <li>Scripting: Python (test automation, tooling), Makefile (build flow)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Analog IC</h3>
            <ul className="mt-2 list-disc list-inside">
              <li>Cadence Virtuoso (Schematic & Layout)</li>
              <li>DRC / LVS / PEX</li>
              <li>Operational Amplifier Design</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Embedded & Systems</h3>
            <ul className="mt-2 list-disc list-inside">
              <li>C/C++, MCU Development</li>
              <li>Sensor Integration & Motor Control</li>
              <li>System-Level Debugging</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Additional</h3>
            <ul className="mt-2 list-disc list-inside">
              <li>PCB Design (Altium Designer)</li>
              <li>CST (RF Simulation)</li>
              <li>3D Modeling & 3D Printing</li>
            </ul>
          </div>

        </div>
      </section>

      
      {/* Education */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-300">
          Education
        </h2>

        <ul className="mt-6 space-y-2 text-gray-300">
          <li>
            M.Sc. Integrated Circuit Design, TUM Asia & NTU (2025 – 2027)
          </li>
          <li>
            B.Eng. Electronic Information Engineering, JSNU
          </li>
        </ul>
      </section>
    </main>
  );
}