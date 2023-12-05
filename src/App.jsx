import { useState } from 'react'
import './App.css'
import Drawer from './components/Drawer/Drawer'
import { Route, Routes } from 'react-router'
import Dashboard from './pages/Dashboard'
import Portfolio from './pages/Portfolio'
import Wallet from './pages/Wallet'
import Oppurtunities from './pages/Opportunities'
import Support from './pages/Support'
import Notifications from './pages/Notifications'
import Opportunities from './pages/Opportunities'

function App() {

  return (
    <>
      <Routes>
        <Route element={<Drawer />}>
          <Route index element={<Dashboard />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='wallet' element={<Wallet />} />
          <Route path='opportunities' element={<Opportunities />} />
          <Route path='support' element={<Support />} />
          <Route path='notifications' element={<Notifications />} />
       
        </Route>
        <Route
						path='*'
						element={
							<div className='min-h-[60vh] flex flex-col items-center justify-center gap-5 md:gap-8'>
								<p>Not found page</p>
								<p>page temporarily unavailable</p>
								<div
									className='flex gap-3 font-bold font-playfair cursor-pointer underline'
									onClick={() => window.history.back()}
								>
									Return Back
								</div>
							</div>
						}
					/>
      </Routes>
    </>
  )
}

export default App
