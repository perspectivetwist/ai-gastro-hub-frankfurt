export default function HeroSection() {
  return (
    <section
      className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pb-16"
      style={{ zIndex: 1 }}
    >
      {/* Eyebrow */}
      <div
        className="mb-8 text-sm tracking-widest uppercase"
        style={{ color: "#FFFFFF" }}
      >
        KI-Sichtbarkeit für Restaurants
      </div>

      {/* Hook Headline */}
      <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 max-w-4xl">
        Ist dein Restaurant in der{" "}
        <span className="gradient-accent">
          KI-Ära sichtbar?
        </span>
      </h1>

      {/* Sub */}
      <p
        className="text-xl md:text-2xl mb-10 max-w-2xl"
        style={{ color: "#cccccc" }}
      >
        ChatGPT, Perplexity und Google AI empfehlen täglich Restaurants. Wer nicht sichtbar ist, verliert Gäste an die Konkurrenz — ohne es zu merken.
      </p>

      {/* CTA */}
      <div className="flex items-center justify-center">
        <a
          href="#products"
          className="inline-block px-8 py-3 rounded-lg font-semibold text-sm tracking-wide border transition-colors duration-200 hover:bg-white/5"
          style={{ borderColor: "#888888", color: "#cccccc" }}
        >
          Restaurant kostenlos scannen →
        </a>
      </div>

    </section>
  );
}
