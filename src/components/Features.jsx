import { Touchpad, Calculator, History, PieChart, Shield } from "lucide-react";

const features = [
  {
    icon: Touchpad,
    title: "POS Sentuh Cepat",
    desc: "Tampilan grid tombol besar untuk tambah/kurangi item dan ringkasan real-time.",
  },
  {
    icon: Calculator,
    title: "Hitung Otomatis",
    desc: "Total & kembalian dihitung otomatis, meminimalkan salah hitung.",
  },
  {
    icon: History,
    title: "Riwayat Transaksi",
    desc: "Simpan transaksi lengkap di perangkat, tetap aman meski offline.",
  },
  {
    icon: PieChart,
    title: "Laporan Lengkap",
    desc: "Pendapatan harian/mingguan/bulanan dan produk terlaris.",
  },
  {
    icon: Shield,
    title: "Akses Peran",
    desc: "Admin & Kasir dengan login aman dan pembatasan fitur.",
  },
];

export default function Features() {
  return (
    <section className="py-12 border-t bg-neutral-50" id="demo">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl font-bold mb-6">Fitur Utama</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div key={f.title} className="bg-white rounded-xl border p-5 hover:shadow-sm transition">
              <div className="h-10 w-10 rounded-md bg-emerald-600/10 text-emerald-700 grid place-items-center mb-3">
                <f.icon size={20} />
              </div>
              <h4 className="font-semibold">{f.title}</h4>
              <p className="text-sm text-neutral-600 mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
