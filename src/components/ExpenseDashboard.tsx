import React, { useState } from 'react'
import { Bell, Grid, Home, Plus, User, Wallet, X } from "lucide-react"

const ExpenseDashboard: React.FC = () => {
  const [balance, setBalance] = useState(3257.00)
  const [income, setIncome] = useState(2350.00)
  const [expenses, setExpenses] = useState(950.00)
  const [showNotifications, setShowNotifications] = useState(false)

  const transactions = [
    { id: 1, name: 'Money Transfer', time: '12:35 PM', amount: -450, icon: '👤' },
    { id: 2, name: 'Paypal', time: '10:20 AM', amount: 1200, icon: 'P' },
    { id: 3, name: 'Uber', time: '08:40 AM', amount: -150, icon: 'U' },
    { id: 4, name: 'Bata Store', time: 'Yesterday', amount: -200, icon: '🛍️' },
    { id: 5, name: 'Bank Transfer', time: 'Yesterday', amount: -600, icon: '🏦' },
    { id: 6, name: 'Grocery Shopping', time: '2 days ago', amount: -75, icon: '🛒' },
    { id: 7, name: 'Salary Deposit', time: '3 days ago', amount: 3000, icon: '💼' },
    { id: 8, name: 'Netflix Subscription', time: '4 days ago', amount: -15, icon: '🎬' },
    { id: 9, name: 'Gym Membership', time: '5 days ago', amount: -50, icon: '🏋️' },
    { id: 10, name: 'Freelance Payment', time: '6 days ago', amount: 500, icon: '💻' },
  ]

  const notifications = [
    { id: 1, message: 'Your account balance is low', time: '5 minutes ago' },
    { id: 2, message: 'New feature: Budget planner is now available', time: '1 hour ago' },
    { id: 3, message: 'Your monthly report is ready', time: '1 day ago' },
    { id: 4, message: 'Upcoming bill payment: Electricity', time: '2 days ago' },
  ]

  return (
    <div className="h-screen bg-white flex flex-col">
      <div className="mx-auto w-full max-w-md flex-1 flex flex-col">
        {/* Fixed Content: Header, Balance Card, and Transactions Title */}
        <div className="sticky top-0 z-10 bg-white">
          {/* Header */}
          <header className="flex items-center justify-between p-4 bg-white border-b">
            <button className="rounded-lg p-2 hover:bg-gray-100" aria-label="Menu">
              <Grid className="h-6 w-6" />
            </button>
            <h1 className="text-lg font-semibold">Home</h1>
            <button 
              className="relative rounded-lg p-2 hover:bg-gray-100" 
              aria-label="Notifications"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <Bell className="h-6 w-6" />
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" aria-hidden="true" />
            </button>
          </header>

          {/* Notifications Panel */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg z-20 border border-gray-200">
              <div className="p-4 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Notifications</h3>
                  <button 
                    onClick={() => setShowNotifications(false)}
                    className="text-gray-500 hover:text-gray-700"
                    aria-label="Close notifications"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {notifications.map((notification) => (
                  <div key={notification.id} className="p-4 border-b border-gray-200 last:border-b-0">
                    <p className="text-sm text-gray-800">{notification.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Balance Card */}
          <div className="px-4 pt-4 pb-6">
            <div className="rounded-3xl bg-gradient-to-r from-violet-500 via-purple-500 to-orange-400 p-6 text-white">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-sm">Total Balance</span>
                <button className="rounded-full p-1 hover:bg-white/10" aria-label="More options">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                  </svg>
                </button>
              </div>
              <div className="mb-6">
                <h2 className="text-3xl font-bold">${balance.toFixed(2)}</h2>
              </div>
              <div className="flex justify-between">
                <div>
                  <div className="flex items-center gap-1 text-sm">
                    <svg className="h-4 w-4 rotate-180 transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                    Income
                  </div>
                  <div className="text-lg font-semibold">${income.toFixed(2)}</div>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-sm">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                    Expenses
                  </div>
                  <div className="text-lg font-semibold">${expenses.toFixed(2)}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Transactions Title */}
          <div className="px-4 py-2 bg-white border-b">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">Transactions</h3>
              <button className="text-sm text-gray-500 hover:text-gray-700">See All</button>
            </div>
          </div>
        </div>

        {/* Scrollable Transactions List */}
        <div className="flex-1 overflow-y-auto px-4 pb-20">
          <div className="space-y-4 pt-4">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full ${
                    transaction.amount > 0 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                  }`}>
                    {transaction.icon}
                  </div>
                  <div>
                    <div className="font-medium">{transaction.name}</div>
                    <div className="text-sm text-gray-500">{transaction.time}</div>
                  </div>
                </div>
                <div className={`text-right font-medium ${
                  transaction.amount > 0 ? 'text-green-500' : 'text-red-500'
                }`}>
                  {transaction.amount > 0 ? '+' : ''}{transaction.amount.toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation - Fixed */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="mx-auto max-w-md">
          <div className="flex items-center justify-around p-2">
            <button className="flex flex-col items-center p-2 text-violet-600" aria-label="Home">
              <Home className="h-6 w-6" />
              <span className="mt-1 text-xs">Home</span>
            </button>
            <button className="flex flex-col items-center p-2 text-gray-500" aria-label="Wallet">
              <Wallet className="h-6 w-6" />
              <span className="mt-1 text-xs">Wallet</span>
            </button>
            <div className="relative flex items-center justify-center">
              <button className="absolute -top-7 flex h-14 w-14 items-center justify-center rounded-full bg-violet-600 text-white shadow-lg" aria-label="Add">
                <Plus className="h-6 w-6" />
              </button>
            </div>
            <button className="flex flex-col items-center p-2 text-gray-500" aria-label="Stats">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="mt-1 text-xs">Stats</span>
            </button>
            <button className="flex flex-col items-center p-2 text-gray-500" aria-label="Profile">
              <User className="h-6 w-6" />
              <span className="mt-1 text-xs">Profile</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default ExpenseDashboard