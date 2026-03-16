// ─── App.jsx ─────────────────────────────────────────────────────────────────
// Root component of the Expense Tracker.
// Uses useMemo to compute balance/income/expense totals efficiently —
// recalculates only when "transactions" state changes, not on every render.
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useMemo } from 'react'
import Summary from './components/Summary'
import AddExpense from './components/AddExpense'
import ExpenseList from './components/ExpenseList'

// ── Initial Sample Data ───────────────────────────────────────────────────────
// Pre-loaded transactions so the app looks populated on first load.
const INITIAL = [
  { id: 1, desc: 'Groceries',    amount: 450,   type: 'expense', date: '2026-03-10', category: '🛒' },
  { id: 2, desc: 'Salary',       amount: 25000, type: 'income',  date: '2026-03-01', category: '💰' },
  { id: 3, desc: 'Netflix',      amount: 199,   type: 'expense', date: '2026-03-05', category: '🎬' },
  { id: 4, desc: 'Freelance',    amount: 5000,  type: 'income',  date: '2026-03-08', category: '💻' },
  { id: 5, desc: 'Electric Bill',amount: 850,   type: 'expense', date: '2026-03-12', category: '⚡' },
]

export default function App() {

  // ── State ──────────────────────────────────────────────────────────────────
  const [transactions, setTransactions] = useState(INITIAL)

  // ── Derived Data (useMemo) ─────────────────────────────────────────────────
  // useMemo caches the result of this computation.
  // The function only re-runs when "transactions" changes (dependency array).
  const stats = useMemo(() => {
    const income  = transactions
      .filter(t => t.type === 'income')       // keep only income items
      .reduce((sum, t) => sum + t.amount, 0)  // sum all amounts

    const expense = transactions
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0)

    return { income, expense, balance: income - expense }
  }, [transactions])  // recalculate whenever transactions array changes

  // ── Handlers ───────────────────────────────────────────────────────────────

  // Add new transaction to the TOP of the list (prepend with spread)
  const addTransaction = (t) =>
    setTransactions(prev => [{ ...t, id: Date.now() }, ...prev])

  // Remove a transaction by id using .filter()
  const deleteTransaction = (id) =>
    setTransactions(prev => prev.filter(t => t.id !== id))

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-md mx-auto">

        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">💳 Expense Tracker</h1>

        {/* Summary cards: Balance / Income / Expense — receives computed stats */}
        <Summary stats={stats} />

        {/* Form to add a new income or expense transaction */}
        <AddExpense onAdd={addTransaction} />

        {/* Scrollable list of all transactions with delete option */}
        <ExpenseList transactions={transactions} onDelete={deleteTransaction} />

      </div>
    </div>
  )
}
