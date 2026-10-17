import { logos, type Logo } from "../data/logos";
import { cn } from "../lib/cn";

const cardClass =
  "group relative h-24 w-40 shrink-0 flex items-center justify-center rounded-full bg-white border border-slate-200/60 shadow-sm hover:border-slate-300 transition-all overflow-hidden";

function LogoCard({ logo }: { logo: Logo }) {
  return (
    <div className={cn(cardClass)}>
      <div
        aria-hidden="true"
        className="absolute inset-0 scale-150 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100"
        style={{
          backgroundImage: `linear-gradient(135deg, ${logo.gradient.from}, ${logo.gradient.to})`,
        }}
      />
      <img
        src={logo.src}
        alt={logo.alt}
        draggable={false}
        className="relative z-10 h-8 w-auto max-w-[92px] object-contain transition-all duration-500 group-hover:brightness-0 group-hover:invert"
      />
    </div>
  );
}

export function LogoMarquee() {
  const copies = [logos, logos];

  return (
    <section
      aria-label="Partners"
      className="marquee mt-10 max-w-[1400px] mx-auto overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div className="marquee-track flex w-max">
        {copies.map((group, copyIndex) => (
          <div
            key={copyIndex}
            className="flex items-center gap-4 pr-4"
            aria-hidden={copyIndex === 1}
          >
            {group.map((logo) => (
              <LogoCard key={`${copyIndex}-${logo.alt}`} logo={logo} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
