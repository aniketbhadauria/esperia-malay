const links = [
  {
    no: "001",
    site: "Esperia Insights Hub",
    href: "https://esperia-insights-hub.vercel.app/",
  },
  {
    no: "002",
    site: "Ahli Dewan Undangan Negeri",
    href: "https://suara-dun.vercel.app/",
  },
  {
    no: "003",
    site: "Menteri Besar",
    href: "https://parlimen-portal.vercel.app/",
  },
  {
    no: "004",
    site: "ISMS Esperia",
    href: "https://isms-esperia.vercel.app/",
  },
  {
    no: "005",
    site: "E-library",
    href: "https://uniread-hub.vercel.app/",
  },
  {
    no: "006",
    site: "PM Parliament",
    href: "https://pm-parliament.vercel.app/",
  },
];

export function LinkTable() {
  return (
    <section className="mt-16 max-w-[1400px] mx-auto" aria-label="Projects">
      <div className="overflow-x-auto rounded-[32px] border border-slate-200/60 bg-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)]">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-slate-200/70">
              <th className="px-6 py-4 text-[12px] font-semibold text-slate-500 md:px-8">
                No.
              </th>
              <th className="px-6 py-4 text-[12px] font-semibold text-slate-500 md:px-8">
                Site
              </th>
              <th className="px-6 py-4 text-[12px] font-semibold text-slate-500 md:px-8">
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {links.map((link) => (
              <tr
                key={link.no}
                className="border-b border-slate-100 last:border-b-0"
              >
                <td className="px-6 py-4 font-display text-[15px] font-medium tracking-tight text-[#0a1b33] md:px-8">
                  {link.no}
                </td>
                <td className="px-6 py-4 text-[14px] font-medium text-[#0a1b33] md:px-8">
                  {link.site}
                </td>
                <td className="px-6 py-4 md:px-8">
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="break-all text-[14px] text-[#64748b] underline decoration-slate-300 underline-offset-4 hover:text-[#0a1b33]"
                  >
                    {link.href}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
