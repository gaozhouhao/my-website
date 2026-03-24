import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
      <h1 className="text-5xl font-bold text-center">
        Gao Zhouhao
      </h1>

      <p className="mt-4 text-lg text-gray-300 text-center">
        MSc Integrated Circuit Design (TUM × NTU)
      </p>

      <p className="mt-2 text-gray-400 text-center">
        IC Design (RTL / Analog / System)
      </p>

      <div className="mt-8 flex gap-4">
        <Link
          href="/projects"
          className="px-6 py-2 bg-white text-black rounded"
        >
          View Projects
        </Link>

        {/* <Link
          href="/contact"
          className="px-6 py-2 border border-white rounded"
        >
          Contact
        </Link> */}
      </div>
    </main>
  );
}