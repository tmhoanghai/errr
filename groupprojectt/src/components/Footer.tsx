import zaloLogo from '@/assets/images/zalo.svg';

interface FooterProps {
  lang?: 'VI' | 'EN';
}

export default function Footer({ lang = 'VI' }: FooterProps) {
  const isEn = lang === 'EN';

  return (
    <footer className="py-8 mt-auto border-t border-white/10 bg-black/80 backdrop-blur-md relative z-10">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center text-center">

        <div className="mb-6">
          <a
            href="https://zalo.me/0786812289"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-stone-900/90 hover:bg-stone-800 border border-amber-500/30 hover:border-amber-400 text-stone-200 hover:text-white shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            title="Zalo: 0786812289"
          >
            <img 
              src={zaloLogo} 
              alt="Zalo" 
              className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg object-contain shrink-0 shadow-sm transition-transform group-hover:scale-110" 
            />
            <span className="text-sm sm:text-base font-semibold text-stone-300">
              {isEn ? 'Zalo Contact / Hotline:' : 'Zalo Tư Vấn:'}
            </span>
            <span className="text-base sm:text-lg font-black font-mono tracking-wider text-amber-300 group-hover:text-amber-200 transition-colors">
              0786812289
            </span>
          </a>
        </div>

        <div className="border-t border-white/10 w-full pt-6">
          <p className="text-amber-400 font-cinzel-royal text-sm sm:text-base font-bold tracking-wider mb-1">
            ELITE TRAVEL GROUP
          </p>
          <p className="text-stone-400 text-[11px] sm:text-xs font-mono">
            {isEn ? '© 2026 Elite Travel Group. All rights reserved.' : '© 2026 Elite Travel Group. Bảo lưu mọi quyền.'}
          </p>
        </div>
      </div>
    </footer>
  );
}
