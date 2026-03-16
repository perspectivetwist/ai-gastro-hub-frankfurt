export default function VisionSection() {
  return (
    <section
      id="vision"
      className="relative py-24 px-6 max-w-5xl mx-auto text-center"
      style={{ zIndex: 1 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        Wir machen jedes Restaurant{" "}
        <span className="gradient-accent">KI-sichtbar.</span>
      </h2>
      <p
        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
        style={{ color: "#cccccc" }}
      >
        In 24 Monaten empfehlen KI-Agenten Restaurants, buchen Tische und
        bewerten Erlebnisse. Wer heute handelt, bekommt die Gäste von morgen.
        Wer wartet, verliert sie — an Restaurants, die KI verstanden haben.
      </p>
    </section>
  );
}
