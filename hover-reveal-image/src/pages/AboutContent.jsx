const AboutContent = ({ isSpiderMan }) => {
  const data = isSpiderMan
    ? {
        title: "Spider-Man",
        desc: "Peter Parker gains superhuman strength, agility, and web-slinging abilities after being bitten by a radioactive spider.",
        facts: ["🕸️ Web-slinging", "🕷️ Super strength", "🤓 Genius intellect"],
      }
    : {
        title: "Venom",
        desc: "Eddie Brock bonds with the Venom symbiote, gaining incredible strength, shape-shifting, and tendril powers.",
        facts: [
          "🦹‍♂️ Symbiote powers",
          "💪 Insane strength",
          "🦾 Shape-shifting",
        ],
      };

  return (
    <div className="w-full text-center text-white/95">
      <h2
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-6 bg-gradient-to-r bg-clip-text text-transparent
        from-red-400 via-orange-400 to-yellow-400"
      >
        {data.title}
      </h2>
      <p className="text-sm sm:text-base md:text-lg mb-8 opacity-85 leading-relaxed px-4 max-w-lg mx-auto">
        {data.desc}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
        {data.facts.map((fact, i) => (
          <div
            key={i}
            className="p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all"
          >
             <div className="text-2xl mb-2">{fact.split(' ')[0]}</div>
            <div className="text-xs font-semibold uppercase tracking-wide">{fact.split(' ').slice(1).join(' ')}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutContent;
