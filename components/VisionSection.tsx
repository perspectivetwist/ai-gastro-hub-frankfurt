export default function VisionSection() {
  return (
    <section
      id="vision"
      className="relative py-24 px-6 max-w-5xl mx-auto text-center"
      style={{ zIndex: 1 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        Dein <span className="gradient-accent">Zeitfenster...</span>
      </h2>
      <p
        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
        style={{ color: "#cccccc" }}
      >
        In 12 Monaten empfehlen KI-Systeme nicht nur Restaurants, sondern <span className="font-semibold text-white">buchen Tische</span> und <span className="font-semibold text-white">bewerten Erlebnisse</span>.
        {" "}Wer <span className="font-semibold text-white">heute handelt</span>, bekommt die <span className="font-semibold text-white">Gäste von morgen</span>.
        {" "}Wer wartet, <span className="font-semibold text-white">verliert sie</span> an Restaurants, die KI verstanden haben.
      </p>
      <div className="mt-10">
        <a
          href="#products"
          className="inline-block rounded-full transition-all duration-300 hover:scale-105 p-[1.5px] focus:outline-none"
          style={{ background: "linear-gradient(135deg, #FFB432 0%, #FF3CAC 50%, #FF2D78 100%)" }}
        >
          <span
            className="block px-10 py-3.5 rounded-full font-semibold text-sm tracking-wide text-white"
            style={{ background: "#000008" }}
          >
            Restaurant kostenlos prüfen
          </span>
        </a>
      </div>
    </section>
  );
}
