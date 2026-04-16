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
                Designed and verified a multi-cycle RTL RISC-V CPU with latency-insensitive
                handshake-based microarchitecture, differential testing, and RTOS bring-up.
                </p>

                <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-300 text-sm sm:text-base">
                  <li>Designed a modular multi-cycle RV32E CPU (IF/ID/EX/LSU/WB) with valid-ready handshake for stage and memory interaction</li>
                  <li>Implemented machine-mode privilege architecture including CSR subsystem and precise exception/trap handling</li>
                  <li>Built a C reference model (RV32E + M) and developed differential testing (DUT vs. reference) for instruction-level verification</li>
                  <li>Integrated a custom SimpleBus-based memory interface with request/response protocol supporting variable-latency access</li>
                  <li>Designed and integrated an AXI4-Lite read interface for instruction-fetch memory access, enabling bus-based external memory communication</li>
                  <li>Developed a Verilator-based simulation framework with waveform tracing, instruction/memory trace, and debug tooling</li>
                  <li>Successfully booted RT-Thread RTOS on the RTL CPU, validating system-level execution and exception handling</li>
                </ul>

                <p className="mt-4 text-sm text-gray-500">
                Tools: Verilog, C/C++, Python, Verilator, GTKWave, RISC-V ISA, Difftest
                </p>
            </div>
            </div>

<div className="border-t border-gray-800 my-10"></div>

            {/* Analog IC Project */}
            <div className="flex flex-col gap-6 md:flex-row md:items-start">

            	{/* 图片区域 */}
            	<div className="w-full md:w-1/3 flex-shrink-0 flex flex-col gap-4">
                  
                  {/* <img
                    src="/projects/opamp-schematic.webp"
                    alt="Op-amp schematic"
                    className="w-full rounded-lg object-cover max-h-40 md:max-h-48"
                  /> */}
                  <img
                    src="/projects/bias-schematic.webp"
                    alt="bias schematic"
                    className="w-full rounded-lg object-cover max-h-40 md:max-h-48"
                  />
                  <img
                    src="/projects/opamp-layout.webp"
                    alt="Op-amp layout"
                    className="w-full rounded-lg object-cover max-h-40 md:max-h-48"
                  />
            	</div>

            	{/* 右边内容 */}
            	<div className="flex-1">
                <h3 className="text-xl font-semibold">
                  Class-AB Audio Amplifier Design in GF 0.18-μm CMOS
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

<div className="border-t border-gray-800 my-10"></div>

		{/* Charge Pump Project */}
        <div className="flex flex-col gap-6 md:flex-row md:items-start">

        	{/* 图片区域 */}
        	<div className="w-full md:w-1/3 flex-shrink-0 flex flex-col gap-4">
        	<img
            	src="/projects/charge_pump.webp"
            	alt="Cross-coupled charge pump schematic"
            	className="w-full rounded-lg object-cover max-h-40 md:max-h-48"
            />
            <img
            	src="/projects/cp_waveform.webp"
            	alt="Charge pump transient simulation"
            	className="w-full rounded-lg object-cover max-h-40 md:max-h-48"
            />
        	</div>

        	{/* 右边内容 */}
        	<div className="flex-1">
            <h3 className="text-xl font-semibold">
            	Digitally Controlled Cross-Coupled Charge Pump in 0.18-µm CMOS
            </h3>

            <p className="mt-2 text-sm text-gray-400 sm:text-base">
            	Designed a 2-stage cross-coupled charge pump with 4-phase non-overlapping
            	clock generation and closed-loop digital regulation in Cadence Virtuoso.
            </p>

            <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-300 text-sm sm:text-base">
            	<li>Designed a 2-stage cross-coupled charge pump for on-chip voltage boosting</li>
            	<li>Implemented 4-phase non-overlapping clock generation to improve charge transfer stability</li>
            	<li>Optimized device sizing and pumping capacitance to balance boosting capability, ripple, and startup behavior under leakage effects</li>
            	<li>Built a bang-bang closed-loop digital control scheme using comparator feedback for output regulation</li>
            	<li>Achieved regulated output of 2.94-3.01 V from a 1.8 V supply with about 70 mV peak-to-peak ripple under ~100 kΩ load in schematic-level simulations</li>
            </ul>

            <p className="mt-4 text-sm text-gray-500">
            	Tools: Cadence Virtuoso
            </p>
          </div>
        </div>

<div className="border-t border-gray-800 my-10"></div>

        {/* Reference Voltage Project */}
        <div className="flex flex-col gap-6 md:flex-row md:items-start">

          {/* 图片区域 */}
          <div className="w-full md:w-1/3 flex-shrink-0 flex flex-col gap-4">
            <img
              src="/projects/bandgap-schematic.webp"
              alt="Bandgap schematic"
              className="w-full rounded-lg object-cover max-h-40 md:max-h-48"
            />
            {/* <img
              src="/projects/bandgap-temp.png"
              alt="Temperature sweep result"
              className="w-full rounded-lg object-cover max-h-40 md:max-h-48"
            /> */}
          </div>

          {/* 右边内容 */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold">
              Bandgap-Based Reference Voltage Design in TSMC 0.18-μm CMOS
            </h3>

            <p className="mt-2 text-sm text-gray-400 sm:text-base">
              Designed a temperature-compensated reference circuit based on BJT ΔVbe
              generation and PTAT/CTAT compensation.
            </p>

            <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-300 text-sm sm:text-base">
              <li>Implemented ΔVbe generation using BJT area ratio (N = 4)</li>
              <li>Designed bias network and current mirrors for stable operation</li>
              <li>Optimized resistor ratios to balance PTAT and CTAT components</li>
              <li>Achieved ~25 ppm/°C over -40°C to 100°C</li>
              <li>Output reference voltage ~2.54 V</li>
            </ul>

            <p className="mt-4 text-sm text-gray-500">
              Tools: Cadence Virtuoso, Spectre
            </p>
          </div>
        </div>
        </section>

<div className="border-t border-gray-800 my-10"></div>

        {/* Competitions */}
        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-gray-300">
            Competitions
          </h2>

          <div className="mt-6 space-y-10">
            {/* Smart Car */}
            <div>
              <h3 className="text-xl font-semibold">
                Multi-Vehicle Formation System (17th National College Smart Car Competition, WCH Track)
              </h3>

              <p className="mt-2 text-gray-400 text-sm sm:text-base">
                Triple-vehicle coordinated racing system with path tracking,
                road recognition, and overtaking.
              </p>

              <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-300 text-sm sm:text-base">
                <li>Designed a three-vehicle cooperative control system within a 5-member team, enabling coordinated tracking and overtaking via wireless communication</li>
                <li>Developed custom electromagnetic sensing module for path tracking using AC-driven wire, enabling robust line detection</li>
                <li>Implemented multi-loop PID control for motor speed, inter-vehicle spacing, and steering servo angle</li>
                <li>Built full hardware system including sensor module, motor driver, and custom PCB (CH32V307 + STC16)</li>
                <li>Designed wireless networking between vehicles for real-time state exchange and cooperative decision-making</li>
                <li>Performed embedded software development and parameter tuning for control stability and high-speed operation</li>
                <li>Integrated 3D-printed mechanical structures for chassis and system assembly</li>
                <li>Achieved 2nd place in East China region and National Second Prize in a high-speed autonomous racing competition</li>
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

<div className="border-t border-gray-800 my-10"></div>

            {/* Dual Vehicle */}
            <div>
              <h3 className="text-xl font-semibold">
                Dual-Vehicle Following System - TI Cup National Electronic Design Contest
              </h3>

              <p className="mt-2 text-gray-400 text-sm sm:text-base">
                Dual-vehicle system with sensor tracking and autonomous distance control.
              </p>

              <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-300 text-sm sm:text-base">
                <li>Designed a dual-vehicle cooperative system with Bluetooth-based communication for coordinated following control</li>
                <li>Implemented grayscale sensor-based path tracking for reliable line following</li>
                <li>Integrated ultrasonic sensing for real-time inter-vehicle distance measurement</li>
                <li>Developed multi-loop PID control for vehicle speed and following distance regulation</li>
                <li>Built MSP430-based embedded system including control logic and peripheral circuit design</li>
                <li>Optimized following strategy for stability and responsiveness in dynamic conditions</li>
                <li>Awarded First Prize in Jiangsu Province (TI Cup Electronic Design Contest)</li>
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