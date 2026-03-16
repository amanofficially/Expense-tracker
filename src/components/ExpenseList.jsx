// ─── ExpenseList.jsx ──────────────────────────────────────────────────────────
// Renders the scrollable transaction history list.
// Props:
//   transactions — array of transaction objects from App state
//   onDelete     — function to remove a transaction (called with id)
// ─────────────────────────────────────────────────────────────────────────────

export default function ExpenseList({ transactions, onDelete }) {
  return (
    <div className="bg-white rounded-2xl shadow">
      <h2 className="font-semibold text-gray-700 p-4 border-b border-gray-100">Transactions</h2>

      {/* Empty state */}
      {transactions.length === 0 && (
        <p className="text-center text-gray-400 py-8">No transactions yet. Add one above!</p>
      )}

      {/* Transaction list — max height with scroll for long lists */}
      <ul className="divide-y divide-gray-50 max-h-96 overflow-y-auto">
        {transactions.map(t => (
          <li key={t.id} className="flex items-center px-4 py-3 hover:bg-gray-50 group">

            {/* Emoji category icon */}
            <span className="text-2xl mr-3">{t.category}</span>

            {/* Description + date */}
            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-800 text-sm truncate">{t.desc}</p>
              <p className="text-xs text-gray-400">{t.date}</p>
            </div>

            {/* Amount: green for income, red for expense */}
            <span className={`font-bold mr-3 ${t.type === 'income' ? 'text-green-600' : 'text-red-500'}`}>
              {t.type === 'income' ? '+' : '−'}₹{t.amount.toLocaleString()}
            </span>

            {/* Delete button: only visible on row hover (Tailwind: opacity-0 group-hover:opacity-100) */}
            <button
              onClick={() => onDelete(t.id)}
              className="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-600 transition-all font-bold text-lg"
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
