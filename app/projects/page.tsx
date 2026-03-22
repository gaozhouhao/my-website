export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-16">
      <h1 className="text-4xl font-bold">Projects</h1>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-300">
          IC Projects
        </h2>

        <div className="mt-6 rounded-xl border border-gray-800 p-6">
          <h3 className="text-2xl font-semibold">
            RTL RISC-V CPU Implementation &amp; Verification
          </h3>

          <p className="mt-2 text-gray-400">
            Designed and verified an RTL RISC-V CPU with differential testing,
            exception handling, and system-level bring-up.
          </p>

          <ul className="mt-4 list-inside list-disc space-y-1 text-gray-300">
            <li>Designed RTL datapath and control logic for a RISC-V CPU core</li>
            <li>Implemented CSR-based exception and trap handling mechanism</li>
            <li>Built a C reference model and applied differential testing</li>
            <li>Developed a Verilator-based simulation and debugging environment</li>
            <li>Brought up RT-Thread on the RTL CPU for system-level validation</li>
          </ul>

          <p className="mt-4 text-sm text-gray-500">
            Tools: Verilog, C, Verilator, GTKWave, RISC-V, Difftest
          </p>
        </div>
      </section>
        {/* Competitions */}
        <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-300">
            Competitions
        </h2>

            {/* Smart Car Competition – Multi-Vehicle Autonomous Driving System */}
            <div className="mt-6 border border-gray-800 rounded-xl p-6">
                <h3 className="text-2xl font-semibold">
                    Smart Car Race – Triple-Vehicle Formation System
                </h3>

                <p className="mt-2 text-gray-400">
                    Designed and implemented a triple-vehicle formation racing system with
                    path tracking, road condition recognition, and coordinated overtaking.
                </p>

                <ul className="mt-4 list-disc list-inside text-gray-300 space-y-1">
                    <li>Led development of a three-vehicle coordinated racing system</li>
                    <li>Implemented electromagnetic wire-based path tracking</li>
                    <li>Designed algorithms for bend and cross-road recognition</li>
                    <li>Developed coordinated overtaking strategy at fork roads</li>
                    <li>Designed circuit and system using CH32V307VCT6 and STC16F40K128</li>
                    <li>Built Bluetooth-based inter-vehicle communication</li>
                </ul>

                <p className="mt-4 text-sm text-gray-500">
                    Award: National Second Prize, China Undergraduate Smart Car Race (17th)
                </p>

                <p className="mt-1 text-sm text-gray-500">
                    Tools: CH32V307, STC16, Embedded C, Motor Control, Sensors, Bluetooth
                </p>
                <div className="mt-6">
                <iframe
                    src="https://player.bilibili.com/player.html?bvid=BV1hiQXBFEzB"
                    width="100%"
                    height="400"
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen
                    className="rounded-lg"
                ></iframe>
                </div>
            </div>

            {/* Cooperative Dual-Vehicle Driving System with Distance Control */}
            <div className="mt-6 border border-gray-800 rounded-xl p-6">
                <h3 className="text-2xl font-semibold">
                    Electronic Design Contest – Dual-Vehicle Following System
                </h3>

                <p className="mt-2 text-gray-400">
                    Designed and implemented a dual-vehicle following system with sensor-based
                    tracking, inter-vehicle communication, and autonomous distance control.
                </p>

                <ul className="mt-4 list-disc list-inside text-gray-300 space-y-1">
                    <li>Led development of a dual-vehicle cooperative control system</li>
                    <li>Implemented grayscale sensor-based path tracking</li>
                    <li>Integrated ultrasonic ranging for distance measurement</li>
                    <li>Built Bluetooth-based inter-vehicle communication</li>
                    <li>Designed control, power, and motor drive circuits using MSP430F5529</li>
                    <li>Optimized control strategy for stable following and overtaking</li>
                </ul>

                <p className="mt-4 text-sm text-gray-500">
                    Award: Provincial First Prize, Jiangsu Undergraduate Electronic Design Contest
                </p>

                <p className="mt-1 text-sm text-gray-500">
                    Tools: MSP430F5529, Embedded C, Sensors, Motor Control, Bluetooth
                </p>
                <div className="mt-6">
                <iframe
                    src="https://player.bilibili.com/player.html?bvid=BV1QXQQBbEMi"
                    width="100%"
                    height="400"
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen
                    className="rounded-lg"
                ></iframe>
                </div>
            </div>

        </section>
    </main>
  );
}