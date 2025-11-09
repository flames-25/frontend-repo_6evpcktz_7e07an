import { Download, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 pt-10 pb-14 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-black leading-tight text-neutral-900">
            Kasir Offline untuk Warung Makan Kecil
          </h2>
          <p className="mt-4 text-neutral-600 text-lg">
            Ganti buku tulis dan kalkulator dengan aplikasi Android lokal yang cepat, akurat, dan mudah dipakai.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#download" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition">
              <Download size={18} /> Unduh APK
            </a>
            <a href="#demo" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border hover:bg-neutral-50 transition">
              <Play size={18} /> Lihat Demo UI
            </a>
          </div>
          <ul className="mt-6 text-sm text-neutral-700 grid grid-cols-2 gap-2">
            <li>• Tanpa internet</li>
            <li>• Hitung total & kembalian</li>
            <li>• Riwayat transaksi</li>
            <li>• Laporan harian/mingguan/bulanan</li>
          </ul>
        </div>
        <div className="bg-white rounded-xl border p-4 shadow-sm">
          <img src="/pos-mock.png" alt="Preview POS" className="rounded-lg w-full object-cover" />
        </div>
      </div>
    </section>
  );
}
