import { Route, Routes } from 'react-router-dom'
import AppShell from './layout/AppShell'
import LandingPage from './pages/LandingPage'
import PricingPage from './pages/PricingPage'

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Route>
    </Routes>
  )
}
