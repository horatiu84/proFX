import React, { useEffect, useState } from "react";

export default function App() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Tranzacționează alături de profesioniști pe un grup live exclusiv, cu lecții gratuite și suport complet.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText((prev) => prev + fullText.charAt(index));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <style>
        {`
          @keyframes fade-in-down {
            0% { opacity: 0; transform: translateY(-20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes pulse-fx {
            0%, 100% { transform: scale(1); box-shadow: 0 0 0 transparent; }
            50% { transform: scale(1.05); box-shadow: 0 0 10px #facc15; }
          }

          .animate-fade-in-down {
            animation: fade-in-down 0.8s ease-out forwards;
          }

          .pulse-fx {
            animation: pulse-fx 2.5s infinite;
          }

          .glow-hover:hover {
            box-shadow: 0 0 10px #facc15, 0 0 20px #facc15;
          }

          .zoom-hover:hover {
            transform: scale(1.05);
            transition: transform 0.3s ease;
          }
        `}
      </style>

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center py-20 px-4 text-center">
        <div className="text-5xl font-bold flex items-center animate-fade-in-down">
          <span className="text-gray-200">Pro</span>
          <span className="bg-yellow-600 text-black px-3 py-1 rounded ml-2 pulse-fx">FX</span>
        </div>
        <p className="mt-4 max-w-xl text-lg text-gray-400 min-h-[3rem]">{typedText}</p>
        <a
          href="https://www.fpmarkets.com?redir=stv&fpm-affiliate-utm-source=IB&fpm-affiliate-agt=61490"
          target="_blank"
          className="mt-6 inline-block bg-yellow-600 text-black font-semibold py-3 px-6 rounded hover:bg-yellow-500 transition glow-hover"
        >
          Creează cont FP Markets
        </a>
      </header>

      {/* Tutorial Video Link */}
      <section className="px-4 py-10 bg-gray-900 text-center">
        <h2 className="text-3xl font-bold mb-4">Tutorial de înregistrare FP Markets</h2>
        <a
          href="https://youtu.be/WknqObeGhMU"
          target="_blank"
          className="inline-block bg-yellow-600 text-black font-semibold py-3 px-6 rounded hover:bg-yellow-500 transition"
        >
          Vezi tutorialul video
        </a>
      </section>

      {/* Cursuri gratuite */}
      <section className="px-4 py-10 bg-black text-center">
        <h2 className="text-3xl font-bold mb-4">Începe cu lecțiile gratuite ProFX</h2>
        <a
          href="https://profx.ro/#lectii"
          target="_blank"
          className="inline-block bg-yellow-600 text-black font-semibold py-3 px-6 rounded hover:bg-yellow-500 transition"
        >
          Accesează lecțiile
        </a>
      </section>

      {/* Final Message */}
      <section className="px-4 py-10 bg-gray-900 text-center">
        <p className="max-w-3xl mx-auto text-lg text-gray-300">
          Aceasta este oportunitatea perfectă pentru a învăța direct de la experți și pentru a vă dezvolta abilitățile într-un mediu profesionist, alături de un broker reglementat cu condiții excelente.
        </p>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
          Nu ratați această șansă. Acum este momentul ideal pentru a începe călătoria voastră în lumea tradingului.
        </p>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-yellow-500 font-semibold">
          Vă așteptăm cu entuziasm să faceți parte din comunitatea noastră!
        </p>
        <p className="mt-6 max-w-3xl mx-auto text-md text-gray-300">
          Pentru a avea acces la grupul nostru exclusiv, trimiteți un mesaj pe WhatsApp către <span className="text-yellow-500 font-medium">Sergiu</span> sau <span className="text-yellow-500 font-medium">John</span> și atașați o captură cu contul vostru activ FP Markets (demo sau real). După verificare, veți fi adăugați în grup.
        </p>
        <div className="mt-4 flex flex-col md:flex-row justify-center items-center gap-4">
          <a
            href="https://wa.me/40765463353"
            target="_blank"
            className="zoom-hover bg-green-500 text-white font-semibold py-3 px-6 rounded hover:bg-green-400 transition"
          >
            Contactează Sergiu pe WhatsApp
          </a>
          <a
            href="https://wa.me/40728581352"
            target="_blank"
            className="zoom-hover bg-green-500 text-white font-semibold py-3 px-6 rounded hover:bg-green-400 transition"
          >
            Contactează John pe WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-6 bg-gray-900 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} ProFX. Toate drepturile rezervate. Made by Horatiu
      </footer>
    </div>
  );
}
