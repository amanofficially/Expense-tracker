// ─── AddExpense.jsx ───────────────────────────────────────────────────────────
// Form component to add a new income or expense transaction.
// Uses a single "form" state object to manage all fields together.
// Props: onAdd(transactionObject) — called when user submits the form
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from 'react'

// Available categories with emoji icons
const CATEGORIES = ['🛒 Groceries', '🍔 Food', '⚡ Bills', '🎬 Entertainment', '🚗 Transport', '💻 Work', '💰 Salary', '🎁 Other']

export default function AddExpense({ onAdd }) {

  // Single state object for all form fields (desc, amount, type, category)
  const [form, setForm] = useState({ desc: '', amount: '', type: 'expense', category: '🎁' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.desc || !form.amount) return   // validation: both fields required
    onAdd({
      ...form,
      amount: parseFloat(form.amount),                        // convert string → number
      date: new Date().toISOString().split('T')[0],           // today's date as YYYY-MM-DD
    })
    // Reset form fields after successful submit
    setForm({ desc: '', amount: '', type: 'expense', category: '🎁' })
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-4 shadow mb-4">
      <h2 className="font-semibold text-gray-700 mb-3">Add Transaction</h2>

      {/* Income / Expense toggle buttons */}
      <div className="flex gap-2 mb-3">
        {['income', 'expense'].map(t => (
          <button
            key={t}
            type="button"  // type="button" prevents accidental form submission
            onClick={() => setForm(f => ({ ...f, type: t }))}  // update only "type" field
            className={`flex-1 py-2 rounded-xl font-medium text-sm capitalize transition-colors ${
              form.type === t
                ? t === 'income' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                : 'bg-gray-100 text-gray-500'
            }`}
          >
            {t === 'income' ? '+ Income' : '− Expense'}
          </button>
        ))}
      </div>

      {/* Description input */}
      <input
        value={form.desc}
        onChange={e => setForm(f => ({ ...f, desc: e.target.value }))}
        placeholder="Description"
        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 mb-2 outline-none focus:border-blue-400 text-sm"
      />

      {/* Amount + Category row */}
      <div className="flex gap-2">
        <input
          type="number"
          value={form.amount}
          onChange={e => setForm(f => ({ ...f, amount: e.target.value }))}
          placeholder="Amount (₹)"
          className="flex-1 border border-gray-200 rounded-xl px-4 py-2.5 outline-none focus:border-blue-400 text-sm"
        />
        <select
          value={form.category}
          onChange={e => setForm(f => ({ ...f, category: e.target.value.split(' ')[0] }))}  // keep only the emoji
          className="border border-gray-200 rounded-xl px-3 outline-none focus:border-blue-400 text-sm"
        >
          {CATEGORIES.map(c => <option key={c}>{c}</option>)}
        </select>
      </div>

      <button type="submit" className="w-full mt-3 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
        Add Transaction
      </button>
    </form>
  )
}
