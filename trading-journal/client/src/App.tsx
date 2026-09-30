import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Trades from './pages/Trades';
import WeeklyReview from './pages/WeeklyReview';

const nav = [
  { to: '/dashboard', label: 'Dashboard', icon: '▚' },
  { to: '/trades', label: 'Trades', icon: '≣' },
  { to: '/review', label: 'Weekly Review', icon: '◷' },
];

export default function App() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="flex w-56 shrink-0 flex-col border-r border-edge bg-panel px-3 py-5">
        <div className="px-2">
          <div className="text-sm font-semibold text-white">Trading Journal</div>
          <div className="text-xs text-muted">Your edge, measured</div>
        </div>

        <nav className="mt-8 flex flex-col gap-1">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition ${
                  isActive
                    ? 'bg-edge text-white'
                    : 'text-muted hover:bg-edge/50 hover:text-white'
                }`
              }
            >
              <span className="w-4 text-center opacity-80">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto rounded-lg border border-edge bg-ink/40 p-3 text-[11px] leading-relaxed text-muted">
          A mirror on your behavior — not a market predictor.
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/trades" element={<Trades />} />
            <Route path="/review" element={<WeeklyReview />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}
