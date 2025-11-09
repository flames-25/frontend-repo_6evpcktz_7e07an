export default function Architecture() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl font-bold mb-6">Arsitektur & Teknologi</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border p-5">
            <h4 className="font-semibold mb-2">Struktur Proyek Android (MVVM)</h4>
            <pre className="text-xs bg-neutral-50 p-3 rounded-lg overflow-auto">
{`com.makyan.pos
├─ data
│  ├─ local (Room)
│  │  ├─ AppDatabase.kt
│  │  ├─ dao
│  │  │  ├─ MenuDao.kt
│  │  │  ├─ TransactionDao.kt
│  │  │  └─ UserDao.kt
│  │  └─ entity
│  │     ├─ MenuItemEntity.kt
│  │     ├─ TransactionEntity.kt
│  │     ├─ TransactionItemEntity.kt
│  │     └─ UserEntity.kt
│  ├─ repository
│  │  ├─ MenuRepository.kt
│  │  └─ TransactionRepository.kt
├─ domain (model)
│  ├─ MenuItem.kt
│  └─ Transaction.kt
├─ ui (Jetpack Compose)
│  ├─ login
│  │  ├─ LoginViewModel.kt
│  │  └─ LoginScreen.kt
│  ├─ pos
│  │  ├─ PosViewModel.kt
│  │  └─ PosScreen.kt
│  ├─ admin
│  │  ├─ MenuScreen.kt
│  │  └─ ReportScreen.kt
│  └─ components
└─ util
   ├─ Security.kt (EncryptedSharedPreferences)
   └─ Mappers.kt`}
            </pre>
          </div>
          <div className="bg-white rounded-xl border p-5">
            <h4 className="font-semibold mb-2">Skema Database Room</h4>
            <pre className="text-xs bg-neutral-50 p-3 rounded-lg overflow-auto">
{`@Entity(tableName = "menu")
- id: Long (PK)
- name: String
- price: Long
- category: String

@Entity(tableName = "transactions")
- id: Long (PK)
- timestamp: Long
- total: Long
- paid: Long
- change: Long

@Entity(tableName = "transaction_items", primaryKeys = ["transactionId", "menuId"]) 
- transactionId: Long (FK)
- menuId: Long (FK)
- name: String
- qty: Int
- price: Long
- subtotal: Long

@Entity(tableName = "users")
- id: Long (PK)
- username: String (unique)
- role: String (ADMIN | CASHIER)
- passwordHash: String (disimpan terenkripsi)`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
