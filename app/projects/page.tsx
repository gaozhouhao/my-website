export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black px-4 py-16 text-white sm:px-6 md:px-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          Projects
        </h1>

        {/* IC Projects */}
        <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-300">
            IC Projects
        </h2>

        <div className="mt-6 space-y-12">
            {/* CPU Project */}
            <div className="flex flex-col gap-6 md:flex-row md:items-start">
            {/* 左边图 */}
            <div className="w-full md:w-1/3 flex-shrink-0">
                <img
                src="/projects/cpu_arch.webp"
                alt="RTL RISC-V CPU architecture diagram"
                className="w-full rounded-lg"
                />
            </div>

            {/* 右边内容 */}
            <div className="flex-1">
                <h3 className="text-xl font-semibold">
                RTL RISC-V CPU Implementation & Verification
                </h3>

                <p className="mt-2 text-sm text-gray-400 sm:text-base">
                Designed and verified an RTL RISC-V CPU with differential testing,
                CSR-based exception handling, and system-level bring-up.
                </p>

                <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-300 text-sm sm:text-base">
                <li>Designed RTL datapath and control logic</li>
                <li>Implemented CSR-based exception and trap handling</li>
                <li>Built C reference model and applied differential testing</li>
                <li>Developed Verilator-based simulation and debug environment</li>
                <li>Ran RT-Thread for system-level validation</li>
                </ul>

                <p className="mt-4 text-sm text-gray-500">
                Tools: Verilog, C, Verilator, GTKWave, RISC-V, Difftest
                </p>
            </div>
            </div>

            {/* Analog IC Project */}
            <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="w-full md:w-1/3 flex-shrink-0">
                <img
                src="/projects/opamp-layout.webp"
                alt="Op-amp layout in Cadence Virtuoso"
                className="w-full rounded-lg"
                />
            </div>

            <div className="flex-1">
                <h3 className="text-xl font-semibold">
                Class-AB Audio Amplifier Design in 0.18-μm CMOS
                </h3>

                <p className="mt-2 text-sm text-gray-400 sm:text-base">
                Designed a class-AB audio amplifier with full-custom layout and
                post-layout verification.
                </p>

                <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-300 text-sm sm:text-base">
                <li>Designed amplifier, bias, and start-up circuits</li>
                <li>Applied translinear-loop class-AB control and Ahuja compensation</li>
                <li>Completed layout with DRC/LVS clean and PEX</li>
                <li>Verified performance across PVT corners</li>
                <li>Achieved ~12-dB gain, ~300-kHz UGBW, &gt;60° phase margin</li>
                </ul>

                <p className="mt-4 text-sm text-gray-500">
                Tools: Cadence Virtuoso, Spectre, Layout, DRC, LVS, PEX
                </p>
            </div>
            </div>
        </div>
        </section>

        {/* Competitions */}
        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-gray-300">
            Competitions
          </h2>

          <div className="mt-6 space-y-10">
            {/* Smart Car */}
            <div>
              <h3 className="text-xl font-semibold">
                Smart Car Race – Triple-Vehicle Formation System
              </h3>

              <p className="mt-2 text-gray-400 text-sm sm:text-base">
                Triple-vehicle coordinated racing system with path tracking,
                road recognition, and overtaking.
              </p>

              <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-300 text-sm sm:text-base">
                <li>Three-vehicle cooperative control</li>
                <li>Electromagnetic path tracking</li>
                <li>Road condition recognition</li>
                <li>Fork-road overtaking strategy</li>
                <li>CH32V307 + STC16-based system design</li>
                <li>Bluetooth communication</li>
              </ul>

              <p className="mt-4 text-sm text-gray-500">
                Award: National Second Prize
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Tools: CH32V307, STC16, Embedded C, Sensors, Motor Control
              </p>

              <div className="mt-6 w-full overflow-hidden rounded-lg">
                <iframe
                  src="https://player.bilibili.com/player.html?bvid=BV1hiQXBFEzB&autoplay=0"
                  className="w-full aspect-video"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Dual Vehicle */}
            <div>
              <h3 className="text-xl font-semibold">
                Electronic Design Contest – Dual-Vehicle Following System
              </h3>

              <p className="mt-2 text-gray-400 text-sm sm:text-base">
                Dual-vehicle system with sensor tracking and autonomous distance control.
              </p>

              <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-300 text-sm sm:text-base">
                <li>Dual-vehicle cooperative system</li>
                <li>Grayscale path tracking</li>
                <li>Ultrasonic distance measurement</li>
                <li>Bluetooth communication</li>
                <li>MSP430-based control and circuit design</li>
                <li>Stable following strategy optimization</li>
              </ul>

              <p className="mt-4 text-sm text-gray-500">
                Award: Provincial First Prize
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Tools: MSP430F5529, Embedded C, Sensors, Motor Control
              </p>

              <div className="mt-6 w-full overflow-hidden rounded-lg">
                <iframe
                  src="https://player.bilibili.com/player.html?bvid=BV1QXQQBbEMi&autoplay=0"
                  className="w-full aspect-video"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}