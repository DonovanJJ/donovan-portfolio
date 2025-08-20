import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import IotPage from "./pages/IoT.tsx";
import Navbar from "./components/Navbar.tsx";
import PeerprepPage from "./pages/Peerprop.tsx";
import HouseholdChoresTelebotPage from "./pages/HouseholdChoresTelebot.tsx";
import ProductivityPlannerPage from "./pages/ProductivityPlanner.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <div className="min-h-screen w-full bg-gray-50 text-gray-900 overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/donovan-portfolio" element={<App />} />
          <Route path={"/donovan-portfolio/projects/iot-temp-monitor"} element={<IotPage />} />
          <Route path={"/donovan-portfolio/projects/coding-collaboration-platform"} element={<PeerprepPage />} />
          <Route path={"/donovan-portfolio/projects/household-chore-telebot"} element={<HouseholdChoresTelebotPage />} />
          <Route path={"/donovan-portfolio/projects/productivity-planner"} element={<ProductivityPlannerPage />} />
        </Routes>
      </div>
    </Router>
  </StrictMode>,
)
