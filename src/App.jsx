import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Architecture from "./components/Architecture";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-emerald-50 text-neutral-900">
      <Header />
      <main>
        <Hero />
        <Features />
        <Architecture />
        <section id="download" className="py-14 border-t">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold mb-2">Unduh APK</h3>
            <p className="text-neutral-600 mb-6">Versi demo untuk dicoba di perangkat Android (offline).</p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition"
            >
              Dapatkan APK
            </a>
            <p className="text-xs text-neutral-500 mt-4">Catatan: Ini adalah halaman presentasi fitur. APK asli dapat disediakan di tahap berikutnya.</p>
          </div>
        </section>
      </main>
      <footer className="py-8 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Warung Makan Mak Yan — Kasir Offline
      </footer>
    </div>
  );
}

export default App;
