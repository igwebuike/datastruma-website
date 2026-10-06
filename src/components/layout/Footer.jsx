import { bookingUrl, companyInfo } from "../../data/siteData";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-4 py-10 text-slate-400 md:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="font-bold text-white">{companyInfo.name}</div>
          <div className="text-sm">Cloud, AI, automation, analytics, and logistics growth.</div>
        </div>
        <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-cyan-200 hover:text-white">Book a Free AI Discovery Call</a>
      </div>
    </footer>
  );
}
