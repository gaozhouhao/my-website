export default function BeyondPage() {
  return (
    <main className="min-h-screen bg-black px-4 py-16 text-white sm:px-6 md:px-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          Beyond Engineering
        </h1>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
          A few things I build, make, and enjoy beyond IC design — from 3D
          printing and carving to public speaking, music, and everyday life.
        </p>

        {/* Hands-on Making */}
        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-gray-200">
            Hands-on Making
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            I enjoy building things by hand, including FDM and SLA 3D printing, 
            rubber stamp carving, and small DIY projects. These experiences reflect 
            the same mindset I value in engineering: iteration, precision, and turning 
            ideas into physical objects.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <img
              src="/beyond/making/figure-fern.webp"
              alt="3D printed figure"
              className="h-full w-full rounded-xl object-cover"
            />
            <img
              src="/beyond/making/figure-wukong.webp"
              alt="3D printed figure"
              className="h-full w-full rounded-xl object-cover"
            />
            <img
              src="/beyond/making/figure-bajie.webp"
              alt="3D printed figures"
              className="h-full w-full rounded-xl object-cover"
            />
            <img
              src="/beyond/making/mini-sculpture.webp"
              alt="3D printed figures"
              className="h-full w-full rounded-xl object-cover"
            />
            <img
              src="/beyond/making/bead-art.webp"
              alt="bead-art"
              className="h-full w-full rounded-xl object-cover"
            />
            <img
              src="/beyond/making/stamp-anime-black.webp"
              alt="Hand-carved stamp artwork"
              className="h-full w-full rounded-xl object-cover"
            />
            <img
              src="/beyond/making/stamp-anime-orange.webp"
              alt="Hand-carved stamp artwork in orange"
              className="h-full w-full rounded-xl object-cover"
            />
            <img
              src="/beyond/making/stamp-fate.webp"
              alt="Hand-carved Fate artwork"
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
        </section>

        {/* Leadership */}
        <section className="mt-16">
        <h2 className="text-2xl font-semibold text-gray-200">
            Leadership & Recognition
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Beyond technical work, I have also represented students in academic
            events and public speaking occasions.
        </p>

        {/* Mobile */}
        <div className="mt-8 grid grid-cols-2 gap-4 md:hidden">
            <div className="col-span-2">
            <img
                src="/beyond/leadership/speech-red.webp"
                alt="Representative speech"
                className="w-full aspect-[4/3] rounded-xl object-cover"
            />
            </div>

            <div>
            <img
                src="/beyond/leadership/top10-stage.webp"
                alt="Top 10 student selection presentation event"
                className="w-full aspect-[4/3] rounded-xl object-cover"
            />
            </div>

            <div>
            <img
                src="/beyond/leadership/award-top10.webp"
                alt="Top 10 student award"
                className="w-full aspect-[4/3] rounded-xl object-cover"
            />
            </div>
        </div>

        {/* Desktop */}
        <div className="mt-8 hidden md:grid md:grid-cols-3 md:gap-4">
            <div className="md:col-span-2 md:row-span-2">
            <img
                src="/beyond/leadership/speech-red.webp"
                alt="Representative speech"
                className="h-full w-full rounded-xl object-cover"
            />
            </div>

            <div>
            <img
                src="/beyond/leadership/top10-stage.webp"
                alt="Top 10 student selection presentation event"
                className="w-full aspect-[4/3] rounded-xl object-cover"
            />
            </div>

            <div>
            <img
                src="/beyond/leadership/award-top10.webp"
                alt="Top 10 student award"
                className="w-full aspect-[4/3] rounded-xl object-cover"
            />
            </div>
        </div>
        </section>

        {/* Music */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-200">Music</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Music has long been part of my life outside engineering.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            <img
              src="/beyond/music/street-performance.webp"
              alt="Playing guitar on stage"
              className="h-full w-full rounded-xl object-cover"
            />
            <img
              src="/beyond/music/guitar-classroom.webp"
              alt="Playing guitar in classroom"
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
        </section>

        {/* Life */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-200">Life</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            A few moments beyond study and projects.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <img
              src="/beyond/life/swim.webp"
              alt="swim"
              className="h-full w-full rounded-xl object-cover"
            />
            <img
              src="/beyond/life/fish.webp"
              alt="Holding a fish"
              className="h-full w-full rounded-xl object-cover"
            />
            <img
              src="/beyond/life/group-photo.webp"
              alt="Group photo"
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
        </section>
      </div>
    </main>
  );
}