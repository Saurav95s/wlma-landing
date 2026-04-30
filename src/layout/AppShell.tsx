import { Outlet } from 'react-router-dom'
import AppHeader from '../components/AppHeader'
import PrimaryNavigationToolbar from '../components/PrimaryNavigationToolbar'

export default function AppShell() {
  return (
    <div className="flex min-h-screen w-full bg-white text-left">
      <aside className="sticky top-0 h-screen w-[280px] shrink-0 self-start overflow-hidden border-r border-[#eaecf0]">
        <PrimaryNavigationToolbar />
      </aside>
      <div className="flex min-w-0 flex-1 flex-col bg-[#fefbf6]">
        <header className="h-10 min-h-[40px] shrink-0 bg-white">
          <AppHeader />
        </header>
        <main className="min-w-0 flex-1 overflow-x-auto overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
