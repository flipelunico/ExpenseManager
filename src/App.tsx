import React from 'react'
import ExpenseDashboard from './components/ExpenseDashboard'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <ExpenseDashboard />
        </div>
      </main>
      <footer className="bg-white">
      </footer>
    </div>
  )
}

export default App