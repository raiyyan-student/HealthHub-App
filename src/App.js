import React from 'react'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Profile from './Components/Profile'
import Dashboard from './Components/Dashboard'
import FitnessTracking from './Components/FitnessTracking'
import NutritionTracking from './Components/NutritionTracking'
import SleepMonitoring from './Components/SleepMonitoring'
import MentalWellness from './Components/MentalWellness'
import HealthInsights from './Components/HealthInsights'
import CommunitySupport from './Components/CommunitySupport'
import Settings from './Components/Settings'

const App = () => {
  return (
    <div>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/fitnesstracking' element={<FitnessTracking/>}/>
        <Route path='/nutritiontracking' element={<NutritionTracking/>}/>
        <Route path='/sleepmonitoring' element={<SleepMonitoring/>}/>
        <Route path='/mentalwellness' element={<MentalWellness/>}/>
        <Route path='/healthinsights' element={<HealthInsights/>}/>
        <Route path='/communitysupport' element={<CommunitySupport/>}/>
        <Route path='/settings' element={<Settings/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App