// ─── Summary.jsx ──────────────────────────────────────────────────────────────
// Displays three summary cards: Balance, Income, Expense.
// Props:
//   stats — { balance: number, income: number, expense: number }
//           computed by useMemo in App.jsx
// ─────────────────────────────────────────────────────────────────────────────

export default function Summary({ stats }) {

  // Card configuration array — easy to add/remove cards here
  const cards = [
    { label: 'Balance', value: stats.balance, color: 'from-blue-500  to-blue-600'  },
    { label: 'Income',  value: stats.income,  color: 'from-green-500 to-green-600' },
    { label: 'Expense', value: stats.expense, color: 'from-red-500   to-red-600'   },
  ]

  return (
    // 3-column grid for the three cards
    <div className="grid grid-cols-3 gap-3 mb-4">
      {cards.map(({ label, value, color }) => (
        <div key={label} className={`bg-gradient-to-br ${color} text-white rounded-2xl p-4 text-center shadow`}>
          <p className="text-xs opacity-80 mb-1">{label}</p>
          {/* toLocaleString() formats number with commas: 25000 → 25,000 */}
          <p className="font-bold text-lg">₹{value.toLocaleString()}</p>
        </div>
      ))}
    </div>
  )
}
