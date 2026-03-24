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

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-xl font-semibold">
                RTL RISC-V CPU Implementation & Verification
              </h3>

              <p className="mt-2 text-gray-400 text-sm sm:text-base">
                Designed and verified an RTL RISC-V CPU with differential testing,
                exception handling, and system-level bring-up.
              </p>

              <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-300 text-sm sm:text-base">
                <li>RTL datapath and control logic design</li>
                <li>CSR-based exception and trap handling</li>
                <li>C reference model + differential testing</li>
                <li>Verilator-based simulation and debug environment</li>
                <li>RT-Thread bring-up for system-level validation</li>
              </ul>

              <p className="mt-4 text-sm text-gray-500">
                Tools: Verilog, C, Verilator, GTKWave, RISC-V, Difftest
              </p>
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