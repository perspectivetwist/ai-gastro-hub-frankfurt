'use client'

import { useState } from 'react'

const faqItems = [
  {
    question: 'Was macht AI-Shift-Drift einzigartig?',
    answer: 'AI-Shift-Drift ist kein Webdesign-Tool. AI-Shift-Drift misst, ob KI-Systeme dein Restaurant kennen, deine Website nutzen können, und ob du sicher aufgestellt bist für eine Welt, in der Agenten und Maschinen im Netz handeln. Vier Scanner, drei Scores, eine Wahrheit. Und einen konkreten Aktionsplan.',
  },
  {
    question: 'Warum gibt es AI-Shift-Drift und warum jetzt?',
    answer: 'Weil KI-Agenten bereits einkaufen, buchen und kontaktieren, und die meisten Restaurants dafür nicht bereit sind. ChatGPT, Perplexity und Gemini handeln zunehmend autonom im Auftrag von Nutzern. Wer technisch nicht zugänglich ist, wird übersprungen. Der Wandel passiert gerade, nicht irgendwann.',
  },
  {
    question: 'Ich hab eine Website und bin bei Google. Warum reicht das nicht mehr?',
    answer: 'Weil deine Gäste zunehmend ChatGPT, Perplexity oder Gemini fragen. Diese Systeme lesen deine Website anders als Google. Wer dort nicht sichtbar ist, existiert für einen wachsenden Teil der Gäste schlicht nicht.',
  },
  {
    question: 'Was ist der Unterschied zwischen AEO, GEO, Slipstream und Quantum?',
    answer: 'Wake / AEO misst, ob ChatGPT deine Website lesen und zitieren kann. Wake / GEO misst, ob ChatGPT deinen Ruf kennt: Bewertungen, Erwähnungen, Profil. Slipstream misst, ob KI-Agenten durch deine digitale Infrastruktur handeln können. Quantum misst, wie sicher du gegen KI-gestützte Angriffe aufgestellt bist. Vier verschiedene Fragen, ein Gesamtbild.',
  },
  {
    question: 'Ich hab keine Zeit für sowas. Wie lang dauert ein Scan?',
    answer: 'Unter 60 Sekunden. URL eingeben, fertig. Den Rest macht AI-Shift-Drift. Was du danach hast: einen konkreten Score und eine priorisierte Liste, was du oder dein Webentwickler ändern muss. Keine Theorie, keine Agenturpräsentation.',
  },
  {
    question: 'Ich bin Gastronom / Hotelier / Café-Betreiber, das ist doch nichts für mich?',
    answer: 'Doch, genau für dich. Gäste fragen ChatGPT nach Restaurantempfehlungen, KI-Agenten buchen Tische, Fake-Bewertungen bedrohen deinen Ruf. Jeder Gastro-Betrieb mit einer Website braucht AI-Readiness.',
  },
  {
    question: 'Ich hab meinen Score. Was jetzt? Was ändert sich konkret in meinem Business?',
    answer: 'Wer seine Scores auf über 80 bringt, taucht in KI-Antworten auf, kann von Agenten genutzt werden, ist sicher. Neue Anfragen, zusätzlicher Umsatz ohne Werbebudget.',
  },
  {
    question: 'Ich hab das schon mal bei einer Agentur machen lassen. Was ist der Unterschied?',
    answer: 'Agenturen optimieren für Google von gestern. AI-Shift-Drift misst die Kanäle von morgen: KI-Sichtbarkeit, Agenten-Nutzbarkeit, KI-Sicherheit. Das sind neue Disziplinen, für die es bisher kein einheitliches Messinstrument gab.',
  },
  {
    question: 'Was passiert mit meinen Daten?',
    answer: 'AI-Shift-Drift scannt nur öffentlich zugängliche Informationen, genau das, was KI-Systeme auch sehen. Keine Zugangsdaten, kein Login, kein Eingriff in deine Systeme. DSGVO-konform, Made in Germany.',
  },
  {
    question: 'Muss ich danach meine Website neu bauen?',
    answer: 'Meistens nicht. Die meisten Verbesserungen sind kleine technische Anpassungen: strukturierte Daten, FAQ-Format, Konsistenz in Verzeichnissen. Was du bzw. dein Webentwickler in ein bis zwei Stunden umsetzen kann, hat oft den größten Effekt.',
  },
  {
    question: 'Ist das einmalig oder brauche ich das regelmäßig?',
    answer: 'KI-Systeme lernen laufend. Was heute gut ist, kann in drei Monaten veraltet sein. Deshalb macht AI-Shift-Drift einen zweiten Kanal messbar. Nicht einmalig, sondern als laufendes Signal, ob dein Restaurant im KI-Raum sichtbar bleibt.',
  },
]

export default function GastroFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section
      className="relative py-24 px-6 max-w-3xl mx-auto"
      style={{ zIndex: 1 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Häufige <span className="gradient-accent">Fragen.</span>
      </h2>
      <div className="space-y-3">
        {faqItems.map((item, i) => {
          const isOpen = openIndex === i
          return (
            <div
              key={i}
              className="border rounded-lg overflow-hidden"
              style={{
                borderColor: "rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
              >
                <span className="font-medium text-white text-sm pr-4">
                  {item.question}
                </span>
                <span
                  className="text-lg shrink-0"
                  style={{ color: "#888" }}
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <div className="px-5 pb-5 -mt-1">
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#cccccc" }}
                  >
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
