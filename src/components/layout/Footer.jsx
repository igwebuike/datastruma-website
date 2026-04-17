import { companyInfo, ecosystemTags } from "../../data/siteData";

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-7xl px-4 pb-12 pt-4 text-sm text-slate-400 md:px-6 lg:px-8">
      <div className="border-t border-white/10 pt-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="space-y-2">
            <div>© 2026 {companyInfo.name}. All rights reserved.</div>
            <div>{companyInfo.established}</div>
            <div>{companyInfo.phone}</div>
            <div>{companyInfo.address}</div>
            <a
              href={`mailto:${companyInfo.email}`}
              className="block text-slate-300 hover:text-white"
            >
              {companyInfo.email}
            </a>
          </div>

          <div className="flex max-w-xl flex-wrap gap-x-3 gap-y-1">
            {ecosystemTags.map((tag, index) => (
              <div key={tag} className="flex items-center gap-3">
                <span>{tag}</span>
                {index < ecosystemTags.length - 1 ? <span>•</span> : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}