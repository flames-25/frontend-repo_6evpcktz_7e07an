import { Store, ShieldCheck } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-md bg-emerald-600 text-white grid place-items-center font-bold">WM</div>
          <div>
            <h1 className="text-lg font-semibold leading-tight">Warung Makan Mak Yan</h1>
            <p className="text-xs text-neutral-500 -mt-0.5">Aplikasi Kasir Offline (Android, Kotlin)</p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-3 text-sm text-neutral-600">
          <div className="flex items-center gap-1"><Store size={16} /> Offline-first</div>
          <div className="flex items-center gap-1"><ShieldCheck size={16} /> Data aman</div>
        </div>
      </div>
    </header>
  );
}
