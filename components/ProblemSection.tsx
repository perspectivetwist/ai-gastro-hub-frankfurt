export default function ProblemSection() {
  return (
    <section
      id="problem"
      className="relative pt-16 pb-24 px-6 max-w-5xl mx-auto"
      style={{ zIndex: 1 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        KI empfiehlt täglich Restaurants.
        <br />
        <span className="gradient-accent">Deins auch?</span>
      </h2>

      <div className="space-y-6 mb-16 max-w-3xl">
        <div className="flex gap-0 rounded-lg overflow-hidden">
          <div className="w-1 flex-shrink-0" style={{ background: "linear-gradient(180deg, #FFB432, #FF3CAC)" }} />
          <p className="text-xl leading-relaxed pl-4" style={{ color: "#cccccc" }}>
            Heute suchen Gäste dein Restaurant noch bei Google.
          </p>
        </div>
        <div className="flex gap-0 rounded-lg overflow-hidden">
          <div className="w-1 flex-shrink-0" style={{ background: "linear-gradient(180deg, #FFB432, #FF3CAC)" }} />
          <p className="text-xl leading-relaxed pl-4" style={{ color: "#cccccc" }}>
            <span className="font-semibold" style={{ color: "#ffffff" }}>Morgen fragen sie ChatGPT:</span>
            <br />
            &quot;Welches Restaurant in meiner Nähe hat die beste Pasta?&quot; — und KI entscheidet, wen sie empfiehlt.
          </p>
        </div>
        <div className="flex gap-0 rounded-lg overflow-hidden">
          <div className="w-1 flex-shrink-0" style={{ background: "linear-gradient(180deg, #FFB432, #FF3CAC)" }} />
          <p className="text-xl leading-relaxed pl-4" style={{ color: "#cccccc" }}>
            <span className="font-semibold" style={{ color: "#ffffff" }}>70% der Restaurants sind unsichtbar</span>
            <br />
            für KI-Systeme. Die Gäste gehen zur Konkurrenz — ohne dass du es merkst.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            stat: "70%",
            text: "der Restaurants sind für KI-Suchen komplett unsichtbar — ChatGPT kennt sie nicht",
          },
          {
            stat: "3x",
            text: "mehr Nutzer fragen KI nach Restaurant-Empfehlungen als vor 12 Monaten",
          },
          {
            stat: "+721%",
            text: "Wachstum der KI-Suchplattformen in 12 Monaten. KI empfiehlt täglich Restaurants — ohne dich.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="border rounded-lg p-6"
            style={{
              borderColor: "#FF006E33",
              background: "rgba(255,0,110,0.04)",
            }}
          >
            <div className="text-4xl font-bold mb-3 gradient-accent">
              {item.stat}
            </div>
            <div
              className="text-sm leading-relaxed"
              style={{ color: "#cccccc" }}
            >
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
