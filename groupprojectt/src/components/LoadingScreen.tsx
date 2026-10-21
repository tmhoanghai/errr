import { useState, useEffect } from 'react';
import logo1Img from '@/assets/images/logo1.jpg';

interface LoadingScreenProps {
  lang?: 'VI' | 'EN';
  onFinished?: () => void;
}

export default function LoadingScreen({ lang = 'VI', onFinished }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [isRendered, setIsRendered] = useState(true);

  const isEn = lang === 'EN';

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1200; 

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(() => {
            setIsRendered(false);
            if (onFinished) onFinished();
          }, 450);
        }, 200);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [onFinished]);

  const handleSkip = () => {
    setIsDone(true);
    setTimeout(() => {
      setIsRendered(false);
      if (onFinished) onFinished();
    }, 300);
  };

  if (!isRendered) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-stone-950/95 backdrop-blur-xl transition-opacity duration-500 ease-out ${
        isDone ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center max-w-sm px-6 text-center select-none">

        <div className="relative mb-6">
          <div className="absolute -inset-3 rounded-full border border-amber-400/30 animate-spin" style={{ animationDuration: '8s' }} />
          <div className="absolute -inset-1.5 rounded-full border border-dashed border-amber-300/40 animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }} />
          <div className="absolute -inset-4 rounded-full bg-amber-400/10 blur-xl animate-pulse" />

          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-amber-400 shadow-[0_0_35px_rgba(251,191,36,0.6)] bg-white flex items-center justify-center p-2.5">
            <img
              src={logo1Img}
              alt="Elite Travel Group Emblem"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <h2 className="text-xl sm:text-2xl font-black tracking-widest uppercase bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-md">
          Elite Travel Group
        </h2>
        <p className="text-xs sm:text-sm text-stone-300 font-semibold tracking-wider mt-1.5 mb-6">
          {isEn ? 'Hue Heritage Tour · 3D2N' : 'Tour Di Sản Cố Đô Huế · 3N2Đ'}
        </p>

        <div className="w-64 h-1.5 bg-stone-800 rounded-full overflow-hidden border border-amber-500/20 shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300 transition-all duration-75 ease-out rounded-full shadow-[0_0_12px_rgba(251,191,36,0.8)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-between w-64 text-[11px] font-mono text-stone-400 mt-2.5">
          <span>{isEn ? 'Loading heritage journey...' : 'Đang tải dữ liệu di sản...'}</span>
          <span className="text-amber-400 font-bold">{progress}%</span>
        </div>

        <button
          onClick={handleSkip}
          className="mt-6 px-4 py-1 rounded-full text-xs text-stone-400 hover:text-amber-300 hover:border-amber-400/50 border border-stone-800 bg-stone-900/60 transition-all duration-200 cursor-pointer"
        >
          {isEn ? 'Skip ✕' : 'Bỏ qua ✕'}
        </button>
      </div>
    </div>
  );
}
